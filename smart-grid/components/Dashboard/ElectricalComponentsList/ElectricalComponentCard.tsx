import * as React from "react";
import Link from "next/link";

import { getDoc, type DocumentReference } from "firebase/firestore";

import type { Component } from "@/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/shadcn/card";
import { Button } from "@/components/shadcn/button";
import { Lamp, Socket, Wire, MCB } from "@/components/Icon";

import { formatCamelCase } from "@/lib/utils";

interface Props {
  roomId: string;
  docReference: DocumentReference;
}

const ElectricalComponentCard: React.FC<Props> = async ({
  roomId,
  docReference,
}) => {
  const componentSnap = await getDoc(docReference);
  const { id, name, type, properties } = {
    id: componentSnap.id,
    ...componentSnap.data(),
  } as Component;

  const Icon = {
    lamp: Lamp,
    socket: Socket,
    wire: Wire,
    mcb: MCB,
  }[type];

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <Icon className="mx-auto w-[80px]" />
      </CardHeader>
      <CardContent className="w-full">
        {properties.map((property, index) => (
          <div key={index} className="line-clamp-1 flex capitalize leading-8">
            <span className="mr-2 flex justify-between gap-1">
              <span className="min-w-[100px] max-w-[100px] overflow-hidden">
                {formatCamelCase(Object.keys(property)[0])}
              </span>
              <span>:</span>
            </span>
            <span>{formatCamelCase(Object.values(property)[0])}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="mt-auto flex-col gap-2">
        <Button className="w-full rounded-full" asChild>
          <Link href={`${roomId}/${id}?action=repair`}>Repair</Link>
        </Button>
        <Button className="w-full rounded-full" asChild>
          <Link href={`${roomId}/${id}?action=change&type=${type}`}>
            Change
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ElectricalComponentCard;
