import React, { useEffect, useState } from 'react';
import { Dropdown as BSDropdown } from 'react-bootstrap';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import i18n from '../../../i18n/i18n';
import { colors } from '../../../utils/colors';
import Heading from '../Heading';
import './style.css';

const Dropdown = (props) => {

    const { minWidth, reportsFilter, autoClose, options, setSelectedDropdownValue, textColor, selectedValue, name, size, noheadercomponent, headerComponent, highlightableItem, width, dropdownToggleWidth, dropdownWidth, selectedDropdownValue } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [indexx, setIndexx] = useState();

    const toggle = (e) => {
        setIsOpen(e)
        selectedDropdownValue && setSelectedDropdownValue();
    };

    useEffect(() => {
        setIndexx();
    }, [i18n.language])

    const itemComponent = (icon, title) => {
        return (
            <div className='d-flex align-items-center'>
                {
                    icon &&
                    <div className='px-2'>
                        {icon}
                    </div>
                }
                <div className={`d-flex flex-wrap ${icon && "px-2"}`}>
                    <span className='m-0 p-0 multine-ellipsis-1'
                        style={{
                            color: colors.black
                        }}>
                        {title}
                    </span>
                    {/* <Heading nomargin color={colors.black} maxNumberOfLines={1} size="xxs" heading={item.title} /> */}
                </div>
            </div>
        )
    }

    return (
        <div className='d-flex align-items-center w-100 justify-content-end'>
            {
                name &&
                <div className={`${reportsFilter ? 'p-0' : 'px-3'} d-none d-lg-block w-50 ${reportsFilter ? "text-start" : "text-end"}`}>
                    <Heading size="xxs" heading={name} nomargin />
                </div>
            }
            <BSDropdown className='' style={{ width: dropdownWidth }} autoClose={autoClose} onToggle={toggle}>
                {
                    noheadercomponent ? null :
                        headerComponent ? (
                            <BSDropdown.Toggle href={null} className='w-100 bg-transparent border-0 my-dropdown-toggle d-flex justify-content-end'>
                                {headerComponent}
                            </BSDropdown.Toggle>
                        ) : (
                            <BSDropdown.Toggle
                                href={null}
                                className={`w-100 bg-white my-1 d-flex align-items-center justify-content-between my-dropdown-toggle text-black border border-1 ${isOpen && "dropdown-hover"}`}
                            >
                                <div className=''>
                                    <Heading size="xxs" color={isOpen ? "#AD50F0" : textColor} nomargin heading={selectedValue} />
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
                        align={"end"}
                        className={`d-flex flex-column my-1 p-1`}
                        style={{ backgroundColor: "white", zIndex: 999, minWidth: minWidth ? minWidth : "100%", width: size === "xl" ? "175px" : size === "lg" ? "50px" : size === "md" ? "30px" : size === "sm" ? "15px" : "10px" }}>
                        {
                            options && options.length > 0 && options.map((item, index) => (
                                <BSDropdown.Item
                                    as={"div"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (item.onClick) {
                                            highlightableItem && setIndexx(index)
                                            item.onClick(item.title)
                                        }

                                        if (item.downloadLink) {
                                            window.open(item.downloadLink)
                                        }

                                    }}
                                    style={{ width: "auto", alignItems: "center" }}
                                    key={index} className={`d-flex rounded p-2 align-items-center ${indexx === index && "dropdown-items"} ${index > 0 && "mt-1"}`}
                                >
                                    {
                                        item.format === "facebook" ? (
                                            <FacebookShareButton url={item.url}>
                                                {itemComponent(item.icon, item.title)}
                                            </FacebookShareButton>
                                        ) : item.format === 'twitter' ? (
                                            <TwitterShareButton url={item.url}>
                                                {itemComponent(item.icon, item.title)}
                                            </TwitterShareButton>
                                        ) : item.format === 'linkedin' ? (
                                            <LinkedinShareButton url={item.url}>
                                                {itemComponent(item.icon, item.title)}
                                            </LinkedinShareButton>
                                        ) : (
                                            <>
                                                {itemComponent(item.icon, item.title)}
                                            </>
                                        )
                                    }

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