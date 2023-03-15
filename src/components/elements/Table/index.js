import React, { memo } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Pagination from "../Pagination";

const columns = (data) => {

    let entries = Object.entries(data)

    let filtered = entries.map(item => {

        let key = item[0]

        return (
            {
                name: key.replace("_", " "),
                selector: row => row[key],
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
    tableWrapper: {
        style: {
            display: 'table',
        },
    },
    cells: {
        style: {
            padding: '12px', // override the cell padding for data cells
            // paddingRight: '8px',
        },
    },
};

const Table = memo((props) => {

    let { data, loading, currentPage, totalCount, onChange } = props;

    let rowsPerPage = 10;

    return (
        loading ? (
            <div className="d-flex align-items-center justify-content-center" >
                <Spinner />
            </div>
        ) : (
            <div className="en-font-default">
                <Row>
                    <Col>
                        <p style={{ fontSize: '16px' }}>
                            Showing&nbsp;
                            {(rowsPerPage * currentPage) - (rowsPerPage - (data && data.length)) > 0 ? (rowsPerPage * currentPage) - (rowsPerPage - (data && data.length)) - (data && data.length) + 1 : '0'}
                            &nbsp;-&nbsp;
                            {(rowsPerPage * currentPage) - (rowsPerPage - (data && data.length))}
                            &nbsp;out of&nbsp;
                            {totalCount}
                        </p>
                    </Col>
                </Row>
                <DataTable
                    columns={data && columns(data[0])}
                    data={data && data}
                    customStyles={customStyles}
                    striped
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