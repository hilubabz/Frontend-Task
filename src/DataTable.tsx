import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type Data = {
  id: number;
  name: string;
  age: number;
};
const data: Data[] = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Emma", age: 22 },
  { id: 3, name: "Liam", age: 19 },
  { id: 4, name: "Olivia", age: 21 },
  { id: 5, name: "Noah", age: 23 },
  { id: 6, name: "Ava", age: 20 },
  { id: 7, name: "Ethan", age: 24 },
  { id: 8, name: "Sophia", age: 22 },
  { id: 9, name: "Mason", age: 25 },
  { id: 10, name: "Isabella", age: 19 },
  { id: 11, name: "Lucas", age: 21 },
  { id: 12, name: "Mia", age: 20 },
  { id: 13, name: "James", age: 23 },
  { id: 14, name: "Charlotte", age: 22 },
  { id: 15, name: "Benjamin", age: 24 },
  { id: 16, name: "Amelia", age: 21 },
  { id: 17, name: "Elijah", age: 25 },
  { id: 18, name: "Harper", age: 20 },
  { id: 19, name: "Alexander", age: 23 },
  { id: 20, name: "Evelyn", age: 22 },
];

const DataTable = () => {
  const columnHelper = createColumnHelper<Data>();
  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => {
        return <div className="font-bold">{info.getValue()}</div>;
      },
    }),
    columnHelper.accessor("name", { header: "Name" }),
    columnHelper.accessor("age", { header: "Age" }),
  ];

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState([{ id: "age", desc: false }]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { sorting, pagination },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
  });

  return (
    <div className="pl-20 pt-10">
      <div className="text-2xl font-bold">Data Table</div>
      <table className="min-w-1/2 border border-gray-500 mt-5">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2 border-b border-r">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-2 border-b border-r text-center whitespace-nowrap"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-1/2 flex justify-between mt-5">
        <div className="flex justify-center space-x-2">
          <button
            className="border-gray-500 border-1 px-2 py-1 cursor-pointer rounded-md"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          <button>
            Page {pagination.pageIndex + 1} of{" "}
            {Math.ceil(data.length / pagination.pageSize)}
          </button>
          <button
            className="border-gray-500 border-1 px-2 py-1 cursor-pointer rounded-md"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <label>Rows per page: </label>
          <select
            className="border-1 rounded-md"
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
