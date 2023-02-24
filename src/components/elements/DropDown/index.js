import React, { useState } from 'react';
import { Dropdown as BSDropdown } from 'react-bootstrap';
import { MdKeyboardArrowDown } from "react-icons/md";
import { colors } from '../../../utils/colors';
import Heading from '../Heading';
import './style.css';

const Dropdown = (props) => {

    const { autoClose, options, setSelectedDropdownValue, selectedValue, name, size, headerComponent, highlightableItem, width, selectedDropdownValue } = props

    const [isOpen, setIsOpen] = useState(false);
    const [indexx, setIndexx] = useState();

    const toggle = (e) => {
        setIsOpen(e)
        selectedDropdownValue && setSelectedDropdownValue();
    };

    return (
        <div className='d-flex align-items-center'>
            {
                name &&
                <div className='px-3'>
                    <Heading size="xxs" heading={name} nomargin />
                </div>
            }
            <BSDropdown autoClose={autoClose} onToggle={toggle}>
                {
                    headerComponent ? (
                        <BSDropdown.Toggle href={null} className='bg-transparent border-0 my-dropdown-toggle d-flex justify-content-end'
                            style={{ width: width && '12rem' }}
                        >
                            {headerComponent}
                        </BSDropdown.Toggle>
                    ) : (
                        <BSDropdown.Toggle
                            href={null}
                            className={`bg-white my-1 d-flex align-items-center justify-content-between my-dropdown-toggle text-black border border-1 ${isOpen && "dropdown-hover"}`}
                            style={{ width: '12rem' }}
                        >
                            <div className=''>
                                <Heading size="xxs" nomargin heading={selectedValue} />
                            </div>
                            <div className='my-1'>
                                <MdKeyboardArrowDown />
                            </div>
                        </BSDropdown.Toggle>
                    )
                }
                {
                    isOpen && options &&
                    <BSDropdown.Menu
                        className={`d-flex flex-column my-1 p-1`}
                        style={{ backgroundColor: "white", zIndex: 999, minWidth: "100%", width: size === "lg" ? "50vw" : size === "md" ? "30vw" : "10vw" }}>
                        {
                            options && options.length > 0 && options.map((item, index) => (
                                <BSDropdown.Item
                                    href={item.downloadLink && item.downloadLink}
                                    onClick={() => {
                                        highlightableItem && setIndexx(index)
                                        item.onClick(item.title)
                                    }}
                                    style={{ width: "auto" }}
                                    key={index} className={`d-flex rounded p-2 align-items-center ${indexx === index && "dropdown-items"} ${index > 0 && "mt-1"}`}>
                                    {
                                        item.icon &&
                                        <div className='px-2'>
                                            {item.icon}
                                        </div>
                                    }
                                    <div className={`d-flex flex-wrap ${item.icon && "px-2"}`}>
                                        <Heading color={colors.black} maxNumberOfLines={1} size="xxs" heading={item.title} nomargin />
                                    </div>
                                </BSDropdown.Item>
                            ))
                        }
                    </BSDropdown.Menu>
                }
            </BSDropdown>

        </div >
    );
}

export default Dropdown;