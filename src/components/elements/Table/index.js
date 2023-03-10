import React, { memo } from "react";
import { Spinner } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Pagination from "../Pagination";

const columns = (data) => {

    let entries = Object.entries(data)

    let filtered = entries.map(item => {

        let key = item[0]

        return (
            {
                name: key.replace("_", " "),
                selector: row => row[key]
            }
        )

    })

    return filtered;
}

const customStyles = {
    rows: {
        style: {
            minHeight: '50px', // override the row height
            backgroundColor: '#F6F6F6',
            fontSize: "16px",
        },
    },
    headCells: {
        style: {
            color: 'white',
            backgroundColor: "black",
            fontSize: "18px",
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            textTransform: "capitalize"
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

const Table = memo((props) => {

    let { data, loading, currentPage, totalCount, onChange } = props;

    return (
        loading ? (
            <div className="d-flex align-items-center justify-content-center" >
                <Spinner />
            </div>
        ) : (
            <div>
                <DataTable
                    columns={data && columns(data[0])}
                    data={data && data}
                    customStyles={customStyles}
                />
                {
                    currentPage && totalCount && onChange && data && data?.length > 0 ?
                        <Pagination
                            currentPage={currentPage}
                            totalCount={totalCount}
                            onChange={onChange}
                        /> : null
                }
            </div>
        )
    )
});

export default Table;