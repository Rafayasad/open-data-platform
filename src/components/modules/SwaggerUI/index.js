import React from "react";
import { memo } from "react";
import SwaggerUi from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const SwaggerUI = memo((props) => {

    const { url } = props

    return (
        <SwaggerUi url={"https://data.abudhabi/sites/default/files/2023-03/GardenBooking.json"}
            spec={{
                "municipalityId": 1001
            }}
        />
    )
});

export default SwaggerUI;