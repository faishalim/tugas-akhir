"use client";

import Link from "next/link";
import type { ColumnDef } from "@tanstack/react-table";
import { ImageIcon } from "lucide-react";

import type { RepairHistory } from "@/types";
import { Badge } from "@/components/shadcn/badge";

import { formatCamelCase } from "@/lib/utils";

export const columns: ColumnDef<RepairHistory>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "componentName",
    header: "Component",
  },
  {
    accessorKey: "actionType",
    header: "Action Type",
    cell: ({ row }) => (
      <span className="capitalize">{row.getValue("actionType")}</span>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "technicalSpecification",
    header: "Technical Specification (Replacement)",
    cell: ({ row }) => {
      const properties = row.getValue("technicalSpecification") as
        | Record<string, string>[]
        | undefined;

      return properties ? (
        <ul>
          {properties.map((obj, index) => (
            <li key={index} className="capitalize leading-4">
              {formatCamelCase(Object.keys(obj)[0])}: {Object.values(obj)[0]}
            </li>
          ))}
        </ul>
      ) : (
        "-"
      );
    },
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image = row.getValue("image") as
        | { url: string; key: string }
        | undefined;

      return !!image && image.url.length > 1 ? (
        <Link href={image.url} target="_blank">
          <Badge
            className="inline-flex max-w-[100px] items-center gap-1 truncate text-xs font-medium text-primary"
            variant="secondary"
          >
            <div className="w-3">
              <ImageIcon className="size-3" />
            </div>
            <span className="truncate">{image.url}</span>
          </Badge>
        </Link>
      ) : (
        "-"
      );
    },
  },
];
