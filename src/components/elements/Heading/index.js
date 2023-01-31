import React, { memo } from 'react';

const Heading = memo((props) => {

    const { heading, color } = props

    return (
        <h1
            className='display-5'
            style={{
                color: color ? color : "#00000"
            }}
        >
            {heading}
        </h1>
    )

})

export default Heading;