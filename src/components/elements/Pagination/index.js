import React, { memo } from "react";
import { Container } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const Pagination = memo(() => {
    return (
        <Container>
            <ReactPaginate
                nextLabel=''
                breakLabel='...'
                previousLabel=''
                pageCount={50}
                containerClassName={'pagination'}
            />
        </Container>
    )
});

export default Pagination;