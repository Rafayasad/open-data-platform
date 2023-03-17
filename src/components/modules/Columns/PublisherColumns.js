export const PublisherAllColumns = [
    {
        name: "Publisher Name",
        selector: row => row.publisher_name,
        width: "50%"
    },
    {
        name: "Total Datasets",
        selector: row => row.total_datasets,
    },
    {
        name: "Date",
        selector: row => row.date,
    }
]

export const PublisherUsersColumns = [
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