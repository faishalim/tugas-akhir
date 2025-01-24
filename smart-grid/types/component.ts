export type LampComponent = {
  id: string;
  name: string;
  type: "lamp";
  properties: [
    { brand: string },
    { voltage: string },
    { power: string },
    { lumens: string },
    { warrantyExp: string },
  ];
};

export type SocketComponent = {
  id: string;
  name: string;
  type: "socket";
  properties: [
    { brand: string },
    { voltage: string },
    { maxCurrent: string },
    { warrantyExp: string },
  ];
};

export type MCBComponent = {
  id: string;
  name: string;
  type: "mcb";
  properties: [
    { brand: string },
    { type: string },
    { protection: string },
    { ratedCurrent: string },
  ];
};

export type WireComponent = {
  id: string;
  name: string;
  type: "wire";
  properties: [
    { brand: string },
    { type: string },
    { area: string },
    { ampacity: string },
  ];
};

export type Component =
  | LampComponent
  | SocketComponent
  | MCBComponent
  | WireComponent;
