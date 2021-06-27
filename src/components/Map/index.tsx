import GoogleMapReact from "google-map-react";
import { Pin, Pulse } from "./MapStyles";

interface Props {
    lat: number;
    lng: number;
    zoom: number;
}

const Map = ({ lat, lng, zoom }: Props) => {
    return (
        <GoogleMapReact
            bootstrapURLKeys={{
                key: `${process.env.REACT_APP_MAP_API}`,
            }}
            defaultCenter={{ lat: lat, lng: lng }}
            defaultZoom={zoom}
        >
            <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
    );
};
const Marker = (props: { lat: number; lng: number }) => {
    return (
        <>
            <Pin />
            <Pulse />
        </>
    );
};

export default Map;
