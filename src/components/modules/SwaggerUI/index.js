import React from "react";
import { memo } from "react";
import SwaggerUi from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const SwaggerUI = memo((props) => {

    const { url } = props

    return (
        <SwaggerUi url={"https://api.abudhabi.ae/gateway/GardenBooking/3.0/searchFacilities"}
            spec={{
                "municipalityId": 1001
            }}
        />
    )
});

export default SwaggerUI;