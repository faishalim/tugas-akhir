import type { DocumentReference, Timestamp } from "firebase/firestore";

// type for realtime database room
export type ControlledRoom = {
  name: string;
  lamp: boolean;
  socket: boolean;
};

// type for firestore room
export type Room = {
  name: string;
  date_created: Timestamp;
  componentRefs: DocumentReference[];
};
