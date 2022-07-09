import React from 'react';
import {
    useTable,
    useGlobalFilter,
    useAsyncDebounce,
    useFilters,
    usePagination,
} from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Button, PageButton } from '../paginationBtn/PaginationBtm';
export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}) {
    const options = React.useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
        <select
            className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name={id}
            id={id}
            value={filterValue}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export function StatusPill({ value }) {
    const valueS = value.toString();
    const valueA = valueS.split(':');
    const status = value ? value.toLowerCase() : 'unknown';
    return (
        <span
            className={`px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm,
          ${
              valueA[1].trim().startsWith('in')
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
          }`}
        >
            {status}
        </span>
    );
}
export function AvatarCell({ value, column, row }) {
    return (
        <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
                <img
                    className="h-10 w-10 rounded-full"
                    src={row.original[column.imgAccessor]}
                    alt=""
                />
            </div>
            <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{value}</div>
                <div className="text-sm text-gray-500">
                    {row.original[column.emailAccessor]}
                </div>
            </div>
        </div>
    );
}
function GlobalFilter({ globalFilter, setGlobalFilter }) {
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <label className="flex gap-x-2 items-baseline">
            <span className="text-white text-xl">Search: </span>
            <input
                type="text"
                class="mt-1 p-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`Search...`}
            />
        </label>
    );
}

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        setGlobalFilter,
        state,
        page,
        canPreviousPage,
        canNextPage,

        nextPage,
        previousPage,
        setPageSize,
        pageOptions,
    } = useTable(
        {
            columns,
            data,
        },
        useFilters,
        useGlobalFilter,
        usePagination
    );
    React.useEffect(() => {
        setPageSize(5);
    }, []);

    return (
        <>
            <div className="flex gap-x-2">
                <GlobalFilter
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />

                {headerGroups.map((headerGroup) =>
                    headerGroup.headers.map((column) =>
                        column.Filter ? (
                            <div
                                className="flex gap-x-2 center"
                                key={column.id}
                            >
                                <label
                                    className="w-full self-center text-white text-lg"
                                    htmlFor={column.id}
                                >
                                    {column.render('Header')}:
                                </label>
                                {column.render('Filter')}
                            </div>
                        ) : null
                    )
                )}
            </div>
            <div className="mt-2 flex flex-col">
                <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table
                                {...getTableProps()}
                                border="1"
                                className="min-w-full divide-y divide-gray-200"
                            >
                                <thead className="bg-gray-300">
                                    {headerGroups.map((headerGroup) => (
                                        <tr
                                            {...headerGroup.getHeaderGroupProps()}
                                        >
                                            {headerGroup.headers.map(
                                                (column) => (
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-extrabold text-gray-700 uppercase tracking-wider"
                                                        {...column.getHeaderProps()}
                                                    >
                                                        {column.render(
                                                            'Header'
                                                        )}
                                                    </th>
                                                )
                                            )}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody
                                    {...getTableBodyProps()}
                                    className="bg-white divide-y divide-gray-200 text-black"
                                >
                                    {page.map((row, i) => {
                                        prepareRow(row);
                                        return (
                                            <tr key={i} {...row.getRowProps()}>
                                                {row.cells.map((cell) => {
                                                    return (
                                                        <td
                                                            {...cell.getCellProps()}
                                                            className="px-6 py-4 whitespace-nowrap"
                                                        >
                                                            {cell.render(
                                                                'Cell'
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                    <Button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        Previous
                    </Button>
                    <Button onClick={() => nextPage()} disabled={!canNextPage}>
                        Next
                    </Button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="flex gap-x-2 text-white">
                        <span className="text-xl text-white">
                            Page &nbsp;
                            <span className="font-medium">
                                {state.pageIndex + 1}
                            </span>
                            &nbsp; of &nbsp;
                            <span className="font-medium">
                                {pageOptions.length}
                            </span>
                        </span>
                    </div>
                    <div>
                        <nav
                            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                            aria-label="Pagination"
                        >
                            <PageButton
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                            >
                                <span className="sr-only">Previous</span>
                                <FontAwesomeIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    icon={faChevronLeft}
                                />
                            </PageButton>
                            <PageButton
                                className="font-bold text-lg"
                                disabled={true}
                            >
                                {state.pageIndex + 1}
                            </PageButton>
                            <PageButton
                                onClick={() => nextPage()}
                                disabled={!canNextPage}
                            >
                                <span className="sr-only">Next</span>
                                <FontAwesomeIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    icon={faChevronRight}
                                />
                            </PageButton>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;
