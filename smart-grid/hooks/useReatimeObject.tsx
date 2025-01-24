import { useEffect, useState } from "react";
import {
  ref,
  query,
  onValue,
  QueryConstraint,
  type Database,
} from "firebase/database";

// TODO: might see: https://github.com/CSFrequency/react-firebase-hooks/blob/master/database/README.md
function useRealtimeObject<T>(
  database: Database,
  path: string,
  debounceTimeOrConstraint: number | QueryConstraint = 0,
  ...restConstraints: QueryConstraint[]
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Parse debounce time and constraints
  const { debounceTime, constraints } =
    // the default value is 0, so it is either a number or QueryConstraint
    typeof debounceTimeOrConstraint === "number"
      ? {
          debounceTime: debounceTimeOrConstraint,
          constraints: restConstraints,
        }
      : {
          debounceTime: 0,
          constraints: [debounceTimeOrConstraint, ...restConstraints],
        };

  useEffect(() => {
    const dataRef = query(ref(database, path), ...constraints);
    let debounceTimeout: NodeJS.Timeout | null = null;

    const dataListener = onValue(
      dataRef,
      (snapshot) => {
        if (debounceTimeout) clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
          if (snapshot.exists()) {
            setData(snapshot.val() as T);
            setError(null);
          } else {
            setData(null);
            setError("No data available");
          }
          setLoading(false);
        }, debounceTime);
      },
      (error) => {
        if (debounceTimeout) clearTimeout(debounceTimeout);
        setData(null);
        setError(error.message);
        setLoading(false);
      },
    );

    return () => {
      dataListener();
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [database, path, debounceTime]);

  return { data, loading, error };
}

export default useRealtimeObject;
