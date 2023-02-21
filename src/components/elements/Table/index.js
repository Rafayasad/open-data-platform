import React, { memo } from "react";
import DataTable from "react-data-table-component";

const columns = (data) => {

    let entries = Object.entries(data)

    let filtered = entries.map(item => {

        let key = item[0]


        // if (key !== "id") {
        //     console.log("hhahahha", key)
            return (
                {
                    name: key.replace("_", " "),
                    selector: row => row[key]
                }
            )
        // }

    })

    return filtered;
}

// const data = [
//     {
//         id: 1,
//         title: 'Beetlejuice',
//         year: '1988',
//     },
//     {
//         id: 2,
//         title: 'Ghostbusters',
//         year: '1984',
//     },
// ]

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

    let { data } = props;

    return (
        <DataTable
            columns={data && columns(data[0])}
            data={data && data}
            customStyles={customStyles}
        />
    )
});

export default Table;