import React from "react";
import Authenticated from "@/Layouts/Authenticated_v2";
import { Head } from "@inertiajs/inertia-react";
import { useTable, usePagination, useFilter } from "react-table";

export default function Dashboard(props) {
    // const data2 = props.categories.map((category) => )

    const data = React.useMemo(() => props.categories, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id", // accessor is the "key" in the data
            },
            {
                Header: "Categories",
                accessor: "name",
            },
            {
                Header: "Created at",
                accessor: "created_at",
            },
            {
                Header: "Updated at",
                accessor: "updated_at",
            },
        ],
        []
    );

    const tableInstance = useTable({ columns, data });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Category" />
            {/* // apply the table props */}
            <div class="p-4">
                <label for="table-search" class="sr-only">
                    Search
                </label>
                <div class="relative mt-1">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for items"
                    />
                </div>
            </div>
            <table
                {...getTableProps()}
                className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    {
                        // Loop over the header rows
                        headerGroups.map((headerGroup) => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    // Loop over the headers in each row
                                    headerGroup.headers.map((column) => (
                                        // Apply the header cell props
                                        <th
                                            {...column.getHeaderProps()}
                                            scope="col"
                                            className="px-6 py-3"
                                        >
                                            {
                                                // Render the header
                                                column.render("Header")
                                            }
                                        </th>
                                    ))
                                }
                                <th className="px-6 py-3">Edit</th>
                            </tr>
                        ))
                    }
                </thead>
                {/* Apply the table body props */}
                <tbody {...getTableBodyProps()}>
                    {
                        // Loop over the table rows
                        rows.map((row) => {
                            // Prepare the row for display
                            prepareRow(row);
                            return (
                                // Apply the row props
                                <tr
                                    {...row.getRowProps()}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    {
                                        // Loop over the rows cells
                                        row.cells.map((cell) => {
                                            // Apply the cell props
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    className="px-6 py-4"
                                                >
                                                    {
                                                        // Render the cell contents
                                                        cell.render("Cell")
                                                    }
                                                </td>
                                            );
                                        })
                                    }
                                    <td className="px-6 py-4">
                                        <a href={route("dashboard")}>Edit</a>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </Authenticated>
    );
}
