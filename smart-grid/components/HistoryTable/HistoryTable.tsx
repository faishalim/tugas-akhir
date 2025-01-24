"use client";

import * as React from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useReactToPrint } from "react-to-print";
import { ChevronDownIcon } from "lucide-react";

import { cn, exportExcel } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { Button } from "@/components/shadcn/button";
import { Pdf, Csv } from "@/components/Icon";

import type { RepairHistory } from "@/types";

interface HistoryTableProps {
  columns: ColumnDef<RepairHistory>[];
  data: RepairHistory[];
}

const HistoryTable = ({ columns, data }: HistoryTableProps) => {
  const contentRef = React.useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  // TODO: ssr?
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // TODO: fix the inconsistent width of this element
  return (
    <div className="space-y-6 print:p-10" ref={contentRef}>
      <Table className="border-collapse text-xs">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="border-2 border-primary bg-secondary py-2 text-center text-secondary-foreground"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cn(
                      "border-2 border-primary text-center",
                      cell.column.id === "date" && "min-w-[94px]",
                      cell.column.id === "description" && "min-w-[80px]",
                      cell.column.id === "technical-specification" &&
                        "min-w-[80px]",
                      cell.column.id === "image" && "min-w-[90px]",
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="relative w-full font-semibold print:hidden">
            <span>Print</span>
            <ChevronDownIcon className="absolute right-3" strokeWidth={3} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="rounded-xl border-2 border-primary"
        >
          <DropdownMenuItem
            className="items-center"
            onClick={() => reactToPrintFn()}
          >
            <Pdf />
            <span>PDF</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="items-center"
            onClick={() => exportExcel(table.getFilteredRowModel().rows)}
          >
            <Csv />
            <span>CSV</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HistoryTable;
