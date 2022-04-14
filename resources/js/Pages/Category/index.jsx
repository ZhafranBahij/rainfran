import React from "react";
import Authenticated from "@/Layouts/Authenticated_v2";
import { Head } from "@inertiajs/inertia-react";
import { useTable, useFilters, usePagination } from "react-table";
import Tabledata from "../../Components/Tabledata";
import Modal from "../../Components/Modal";

export default function Category(props) {
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

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Category" />
            {/* // apply the table props */}
            {/* {console.log(state.pageSize)} */}
            <Modal />
            <Tabledata columns={columns} data={data} />
        </Authenticated>
    );
}
