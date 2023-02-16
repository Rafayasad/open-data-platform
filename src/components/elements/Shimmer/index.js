import React, { memo } from "react";
import { Skeleton } from "@mui/material";
import { colors } from "../../../utils/colors";

const Shimmer = memo((props) => {

    const { backgroundColor, rounded } = props;

    let theme = '', radius = '';

    if (backgroundColor === colors.black) {
        theme = "gray"
    }

    if (rounded === 'xs') {
        radius = "4px"
    } else if (rounded === 'sm') {
        radius = "15px"
    } else if (rounded === 'md') {
        radius = "20px"
    } else if (rounded === 'lg') {
        radius = "30px"
    }

    return (
        <Skeleton
            style={{
                borderRadius: radius,
                backgroundColor: theme
            }}
            animation="wave"
            variant="rectangular"
            {...props}
        />
    )

});


export default Shimmer;