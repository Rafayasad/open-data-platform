export const DatasetAllColumns = [
    {
        name: "Dataset Name",
        selector: row => row['Dataset Name'],
        width: "50%"
    },
    {
        name: "Publisher Name",
        selector: row => row['Publisher Name'],
        width: "40%"
    },
    {
        name: "Topics",
        selector: row => row.topics,
    },
    {
        name: "Date",
        selector: row => row.Date
    }
]

export const DatasetUsersColumns = [
    {
        name: "User",
        selector: row => row.user,
        width: "30%"
    },
    {
        name: "Publisher Name",
        selector: row => row.publisher_name,
        width: "40%"
    },
    {
        name: "Total Datasets",
        selector: row => row.total_datasets,
    },
    {
        name: "Date",
        selector: row => row.date
    }
]