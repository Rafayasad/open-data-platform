import './index.css'
import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosSearch } from 'react-icons/io'

const Search = memo((props) => {

    const { placeholder } = props

    return (
        <Container fluid>
            <Row className='search-box'>
                <Col xs={2} md={1} className='d-flex justify-content-center align-items-center p-0'>
                    <IoIosSearch color="gray" size={24} />
                </Col>
                <Col className='p-0'>
                    <p className='m-0' style={{ color: '#9F9F9F' }}>{placeholder}</p>
                </Col>
            </Row>
        </Container>
    )
});

export default Search;