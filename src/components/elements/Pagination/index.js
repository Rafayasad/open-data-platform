import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import './style.css';

const theme = createTheme(
    {
        palette: {
            neutral: {
                main: 'black',
                contrastText: '#fff',
            },
        }
    }
);

const Paginations = memo((props) => {
    const { currentPage, totalCount, onChangePageNumber, rowsPerPage } = props;
    return (
        <Container className="d-flex justify-content-center py-5">
            <ThemeProvider theme={theme}>
                <Row>
                    <Col md={12} xl={12} sm={12} lg={12} xs={12}>
                        <Pagination
                            showFirstButton showLastButton
                            page={currentPage}
                            count={totalCount}
                            color="neutral"
                            onChange={(event, value) => {
                                onChangePageNumber(value);
                            }}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{
                                        previous: FiChevronLeft,
                                        next: FiChevronRight,
                                        first: FiChevronsLeft,
                                        last: FiChevronsRight
                                    }}
                                    {...item}
                                />
                            )}
                        />
                    </Col>
                </Row>
            </ThemeProvider>
        </Container>
    )
});

export default Paginations;