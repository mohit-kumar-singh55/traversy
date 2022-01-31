import React from "react";
import useStyles from "./styles";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");

    const coordinates = { lat: 0, lng: 0 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDHXXWB8X2KA7WC8jZpiCKjCYy1Ng_dCcA" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={""}
                onChildClick={""}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;