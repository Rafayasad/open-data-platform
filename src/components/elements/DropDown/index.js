import React, { useState } from 'react';
import { Dropdown as BSDropdown } from 'react-bootstrap';
import { MdKeyboardArrowDown } from "react-icons/md";
import { colors } from '../../../utils/colors';
import Heading from '../Heading';
import './style.css';

const Dropdown = (props) => {

    const { autoClose, options, setSelectedDropdownValue, selectedValue, name, size, noheadercomponent, headerComponent, highlightableItem, width, dropdownToggleWidth, dropdownWidth, selectedDropdownValue } = props;

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
                <div className='px-3 d-none d-lg-block w-50'>
                    <Heading size="xxs" heading={name} nomargin />
                </div>
            }
            <BSDropdown style={{ width: '100%' }} autoClose={autoClose} onToggle={toggle}>
                {
                    noheadercomponent ? null :
                        headerComponent ? (
                            <BSDropdown.Toggle href={null} className='bg-transparent border-0 my-dropdown-toggle d-flex justify-content-end'
                                style={{ width: width }}
                            >
                                {headerComponent}
                            </BSDropdown.Toggle>
                        ) : (
                            <BSDropdown.Toggle
                                href={null}
                                className={`w-100 bg-white my-1 d-flex align-items-center justify-content-between my-dropdown-toggle text-black border border-1 ${isOpen && "dropdown-hover"}`}
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
                        style={{ backgroundColor: "white", zIndex: 999, minWidth: "100%", width: size === "lg" ? "50vw" : size === "md" ? "30vw" : size === "sm" ? "15vw" : "10vw" }}>
                        {
                            options && options.length > 0 && options.map((item, index) => (
                                <BSDropdown.Item
                                    // target="_blank"
                                    href={item.downloadLink && item.downloadLink}
                                    onClick={() => {
                                        highlightableItem && setIndexx(index)
                                        item.onClick(item.title)
                                    }}
                                    style={{ width: "auto", alignItems: "center" }}
                                    key={index} className={`d-flex rounded p-2 align-items-center ${indexx === index && "dropdown-items"} ${index > 0 && "mt-1"}`}>
                                    {
                                        item.icon &&
                                        <div className='px-2'>
                                            {item.icon}
                                        </div>
                                    }
                                    <div className={`d-flex flex-wrap ${item.icon && "px-2"}`}>
                                        <span className='m-0 p-0 multine-ellipsis-1'
                                            style={{
                                                color: colors.black
                                            }}>
                                            {item.title}
                                        </span>
                                        {/* <Heading nomargin color={colors.black} maxNumberOfLines={1} size="xxs" heading={item.title} /> */}
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