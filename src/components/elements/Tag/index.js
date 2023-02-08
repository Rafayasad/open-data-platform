import React, { memo } from "react";

const Tag = memo((props) => {

    const { title } = props

    return (
        <div className="px-3 mx-1 d-flex justify-content-center align-items-center" style={{ height: '36px', backgroundColor: '#F3E6FA', borderRadius: '100px', color: '#8207C9' }}>
            <p className="m-0">{title}</p>
        </div>
    )
});

export default Tag;