import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { MdDownloadForOffline, MdOutlineFilterAlt } from "react-icons/md";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Dropdown from "../../../elements/DropDown";
import Heading from "../../../elements/Heading";

const Header = memo((props) => {

    const { title, onClickFilter } = props;

    return (
        <Row className="d-flex justify-content-between py-5">
            <Col>
                <Heading
                    bold
                    nomargin
                    size="xl"
                    heading={title}
                />
            </Col>
            <Col md={3} className=" m-0 p-0 d-flex justify-content-end align-items-center">
                <div className="mx-1">
                    <Button icon={<MdOutlineFilterAlt size={20} />} borderColor={colors.black} onClick={onClickFilter} />
                </div>
                <div className="mx-1">
                    <Dropdown
                        options={
                            [
                                {
                                    title: "PDF",
                                    onClick: () => { }
                                },
                                {
                                    title: "CSV",
                                    onClick: () => { }
                                },
                                {
                                    title: "Excel",
                                    onClick: () => { }
                                }
                            ]
                        }
                        headerComponent={<Button width={"12rem"} icon={<MdDownloadForOffline className="mx-1" size={20} />} title="Download" backgroundColor={colors.black} textColor={colors.white} />} />
                </div>
            </Col >
        </Row >
    )
});

export default Header;