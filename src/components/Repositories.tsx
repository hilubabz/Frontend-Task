import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { format } from "timeago.js";
import { Star, Eye, GitFork } from "lucide-react";
import type { RepoType } from "../services/repository.type";

interface ColumnMeta {
  width?: string;
}

const Repositories = ({ data }: { data: RepoType[] }) => {
  const columnHelper = createColumnHelper<RepoType>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Repository",
      meta: { width: "250px" } as ColumnMeta,
      cell: (row) => (
        <div className="text-left">
          <a
            href={row.row.original.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold line-clamp-3 text-blue-600 hover:text-blue-800 hover:underline"
          >
            {row.getValue()}
          </a>
          {row.row.original.description && (
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
              {row.row.original.description}
            </p>
          )}
        </div>
      ),
    }),
    columnHelper.accessor("watchers_count", {
      header: "Watchers",
      meta: { width: "120px" } as ColumnMeta,
      cell: (row) => (
        <div className="flex items-center justify-center gap-1">
          <Eye className="w-4 h-4 text-gray-500" />
          <span className="font-medium">{row.getValue().toLocaleString()}</span>
        </div>
      ),
    }),
    columnHelper.accessor("stargazers_count", {
      header: "Stars",
      meta: { width: "120px" } as ColumnMeta,
      cell: (row) => (
        <div className="flex items-center justify-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{row.getValue().toLocaleString()}</span>
        </div>
      ),
    }),
    columnHelper.accessor("forks_count", {
      header: "Forks",
      meta: { width: "120px" } as ColumnMeta,
      cell: (row) => (
        <div className="flex items-center justify-center gap-1">
          <GitFork className="w-4 h-4 text-gray-500" />
          <span className="font-medium">{row.getValue().toLocaleString()}</span>
        </div>
      ),
    }),
    columnHelper.accessor("language", {
      header: "Language",
      meta: { width: "140px" } as ColumnMeta,
      cell: (row) => {
        const lang = row.getValue();
        return lang ? (
          <div className="flex items-center justify-center gap-1">
            {/* <Code className="w-4 h-4 text-gray-500" /> */}
            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
              {lang}
            </span>
          </div>
        ) : (
          <span className="text-gray-400 text-sm">Unknown</span>
        );
      },
    }),
    columnHelper.accessor("pushed_at", {
      header: "Last Updated",
      meta: { width: "150px" } as ColumnMeta,
      cell: (row) => (
        <div className="text-sm text-gray-600">{format(row.getValue())}</div>
      ),
    }),
  ];

  const [sorting, setSorting] = useState([{ id: "pushed_at", desc: true }]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    columns,
    data,
    state: { sorting, pagination },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold">Repositories</h2>
          <p className="text-sm mt-1">{data.length} repositories found</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed">
            <thead className="bg-gray-50 border-b border-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer bg-transparent transition-colors"
                      style={{
                        width:
                          (header.column.columnDef.meta as ColumnMeta)?.width ||
                          "auto",
                      }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-4 text-center text-sm"
                      style={{
                        maxWidth:
                          (cell.column.columnDef.meta as ColumnMeta)?.width ||
                          "auto",
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {pagination.pageIndex * pagination.pageSize + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {Math.min(
                  (pagination.pageIndex + 1) * pagination.pageSize,
                  data.length,
                )}
              </span>{" "}
              of <span className="font-medium">{data.length}</span> results
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </button>
            <span className="px-4 py-2 text-sm text-gray-700">
              Page{" "}
              <span className="font-medium">{pagination.pageIndex + 1}</span> of{" "}
              <span className="font-medium">{table.getPageCount()}</span>
            </span>
            <button
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
