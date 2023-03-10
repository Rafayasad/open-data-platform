import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MUIPagination from '@mui/material/Pagination';
import MUIPaginationItem from '@mui/material/PaginationItem';
import { useTranslation } from 'react-i18next';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css';
import { locales } from "../../../i18n/helper";
import { getBreakpoint } from "../../../utils/generic";

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
const Pagination = memo((props) => {

    const { i18n } = useTranslation();

    const { currentPage, totalCount, onChange } = props;

    return (
        <Container className="d-flex justify-content-center py-5">
            <ThemeProvider theme={theme}>
                <Row>
                    <Col md={12} xl={12} sm={12} lg={12} xs={12}>
                        <MUIPagination
                            showFirstButton
                            showLastButton
                            page={currentPage || 1}
                            size={window.innerWidth >= 768 ? "medium" : "small"}
                            siblingCount={window.innerWidth >= 768 ? 1 : 0}
                            count={totalCount || 1}
                            color="neutral"
                            onChange={(_, value) => {
                                onChange(value);
                            }}
                            renderItem={(item) => (
                                <MUIPaginationItem
                                    slots={{
                                        previous: i18n.language === locales.EN ? FiChevronLeft : FiChevronRight,
                                        next: i18n.language === locales.EN ? FiChevronRight : FiChevronLeft,
                                        first: i18n.language === locales.EN ? FiChevronsLeft : FiChevronsRight,
                                        last: i18n.language === locales.EN ? FiChevronsRight : FiChevronsLeft
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

export default Pagination;