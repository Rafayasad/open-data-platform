import React, { memo } from 'react';

const Heading = memo((props) => {

    const { heading, color, size } = props

    var Tag, ClassName;

    if (!size) {
        ClassName = "display-5"
    }

    if (size === 'xs') {
        Tag = "h5"
    } else if (size === 'sm') {
        Tag = "h4"
    } else if (size === 'md') {
        Tag = "h3"
    } else if (size === 'lg') {
        Tag = "h2"
    } else {
        Tag = "h1"
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