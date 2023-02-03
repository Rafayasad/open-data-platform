import { Dropdown as BSDropdown } from 'react-bootstrap';
import Heading from '../Heading';
import './style.css';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Fragment, useState } from 'react';

const Dropdown = ({ data, selectedValue, dropdownName, dropdownSize }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [indexx, setIndexx] = useState();
    const toggle = (e) => setIsOpen(e);
    console.log(data?.map(item => item.title.length))
    return (
        <div className='d-flex align-items-center'>
            <div className='px-3 d-none d-lg-block'>
                <Heading size="xxs" heading={dropdownName} nomargin />
            </div>
            <BSDropdown autoClose={true} onToggle={toggle} style={{ backgroundColor: "white", width: "12rem" }}>
                <BSDropdown.Toggle
                    className={`w-100 my-1 d-flex align-items-center justify-content-between my-dropdown-toggle text-black border border-1 ${isOpen && "dropdown-hover"}`} variant="" id="">
                    <div className=''>
                        <Heading size="xxs" nomargin heading={selectedValue ? selectedValue : "Title"} />
                    </div>
                    <div className='my-1'>
                        <MdKeyboardArrowDown />
                    </div>
                </BSDropdown.Toggle>
                {isOpen &&
                    <BSDropdown.Menu
                        className={`d-flex flex-column my-1 p-1`}
                        style={{ backgroundColor: "white", zIndex: 999, minWidth: "100%", width: dropdownSize === "lg" ? "50vw" : dropdownSize === "md" ? "30vw" : "10vw" }}>
                        {data?.map((item, index) => {
                            return (
                                <BSDropdown.Item
                                    onClick={(e) => {
                                        setIndexx(index)
                                        item.onClick(item.title)
                                    }}
                                    style={{ width: "auto" }}
                                    key={index} className={`d-flex rounded p-2 ${indexx === index && "dropdown-items"} ${index > 0 && "mt-1"}`}>
                                    {item.icon &&
                                        <div className='px-1'>
                                            {item.icon}
                                        </div>
                                    }
                                    <div className='d-flex flex-wrap'>
                                        <Heading maxNumberOfLines={1} size="xxs" heading={item.title} nomargin />
                                    </div>
                                </BSDropdown.Item>
                            )
                        })}
                    </BSDropdown.Menu>
                }
            </BSDropdown>
        </div >
    );
}

export default Dropdown;