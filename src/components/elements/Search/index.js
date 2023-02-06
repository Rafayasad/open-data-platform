import './index.css'
import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineFilterAlt } from 'react-icons/md';
import Heading from '../Heading';

const Search = memo((props) => {

    const { placeholder, filter } = props

    return (
        <Container fluid>
            <Row className='search-box'>
                <Col xs={2} md={1} className='d-flex justify-content-center align-items-center h-100'>
                    <IoIosSearch color="gray" size={24} />
                </Col>
                <Col className='p-0 h-100 d-flex align-items-center'>
                    <Heading nomargin size='xxs' maxNumberOfLines={1} color="#9F9F9F" heading={placeholder} />
                </Col>
                {
                    filter &&
                    <Col xs={2} md={2} className='d-flex justify-content-end align-items-center px-4 h-100'>
                        <MdOutlineFilterAlt size={24} />
                        <p className='m-0 d-none d-md-block'>Filter</p>
                    </Col>
                }
            </Row>
        </Container>
    )
});

export default Search;