import React, { memo } from 'react';
import './style.css';

const Heading = memo((props) => {

    const { heading, color, size, underline, maxNumberOfLines, nomargin } = props

    var Tag, ClassName = "";

    if (!size) {
        ClassName = "display-5"
    }

    if (size === "xxs") {
        Tag = "p"
        ClassName = "m-0"
    } else if (size === 'xs') {
        Tag = "h5"
        ClassName = "m-0"
    } else if (size === 'sm') {
        Tag = "h4"
        ClassName = "m-0"
    } else if (size === 'md') {
        Tag = "h3"
        ClassName = "m-0"
    } else if (size === 'lg') {
        Tag = "h2"
        ClassName = "m-0"
    } else if (size === 'xxl') {
        Tag = "h1"
        ClassName = "display-3"
    } else {
        Tag = "h1"
        ClassName = "m-0"
    }

    if (underline) {
        ClassName = ClassName + " " + "text-underline-hover"
    }

    if (maxNumberOfLines) {
        ClassName = ClassName + " " + "multine-ellipsis-" + maxNumberOfLines
    }

    if (nomargin) {
        ClassName = ClassName + " " + "m-0"
    }

    return (
        <Tag
            className={ClassName}
            style={{
                color: color ? color : "#00000"
            }}
        >
            {heading}
        </Tag>
    )

});

export default Heading;