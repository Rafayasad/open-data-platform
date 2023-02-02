import Dropdown from 'react-bootstrap/Dropdown';
import Heading from '../Heading';
import './dropdown.css';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';

const CustomDropdown = ({ data, isIcon, selectedValue }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Dropdown className=''>
            <Dropdown.Toggle

                style={{ backgroundColor: "white", width: "12rem" }}
                className='my-1 d-flex align-items-center justify-content-between my-dropdown-toggle text-black border border-1 dropdown-hover' variant="success" id="dropdown-basic">
                <div className=''>
                    <Heading size="xxs" heading={selectedValue} />
                </div>
                <div className='my-1'>
                    <MdKeyboardArrowDown />
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu
                className='m-0 p-1 my-1'
                style={{ backgroundColor: "white", width: "12rem", zIndex: 999 }}
            >
                {data?.map((item, index) => {
                    return (
                        <Dropdown.Item onClick={(e) => item.onClick(item.title)} key={index} className='rounded py-2'>
                            <Heading size="xxs" heading={item.title} />
                        </Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CustomDropdown;