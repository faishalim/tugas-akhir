"use client";

import { createContext, useContext, type FC, type ReactNode } from "react";
import { ref, set } from "firebase/database";

import type { ControlledRoom } from "@/types";
import { database } from "@/lib/firebase/database";
import useRealtimeObject from "@/hooks/useReatimeObject";

// Define the shape of the context
interface ControlContextType {
  rooms: Record<string, ControlledRoom> | null;
  loading: boolean;
  error: string | null;
  toggleSwitch: (roomId: string, field: "lamp" | "socket") => void;
}

const ControlContext = createContext<ControlContextType | undefined>(undefined);

// Custom hook to provide easy access to the ControlContext
export const useControlContext = () => {
  const context = useContext(ControlContext);
  if (!context) {
    throw new Error("useControlContext must be used within ControlProvider");
  }
  return context;
};

// Provider component to wrap around components that need access to control data
export const ControlProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    data: rooms,
    loading,
    error,
  } = useRealtimeObject<Record<string, ControlledRoom>>(database, "control");

  // Function to toggle the lamp or socket state
  const toggleSwitch = (roomId: string, field: "lamp" | "socket") => {
    if (!rooms) return;

    // Toggle the value in Firebase
    const roomRef = ref(database, `control/${roomId}/${field}`);
    set(roomRef, !rooms[roomId][field]);
  };

  return (
    <ControlContext.Provider value={{ rooms, loading, error, toggleSwitch }}>
      {children}
    </ControlContext.Provider>
  );
};
