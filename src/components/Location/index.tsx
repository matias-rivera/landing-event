import { useState } from "react";
import {
    Container,
    MapContainer,
    Info,
    Title,
    SubTitle,
    Line,
    Switch,
    SwitchButton,
    InfoBox,
    DetailsBox,
    Details,
} from "./LocationStyles";
import Map from "../Map";

const Location: React.FC = () => {
    const [option, setOption] = useState<number>(1);
    return (
        <Container>
            <Info>
                <div>
                    <SubTitle>Informate</SubTitle>
                    <Title>Lugar y Hora</Title>
                </div>
                <div>
                    <Switch>
                        <SwitchButton
                            active={option === 1}
                            onClick={() => setOption(1)}
                        >
                            Lugar
                        </SwitchButton>
                        <SwitchButton
                            active={option === 2}
                            onClick={() => setOption(2)}
                        >
                            Horario
                        </SwitchButton>
                        <SwitchButton
                            active={option === 3}
                            onClick={() => setOption(3)}
                        >
                            Como llegar
                        </SwitchButton>
                    </Switch>
                    <InfoBox>
                        <h3>San Miguel de Tucumán, Tucumán</h3>
                        <span>CALLE 01, AVENIDA 1002</span>
                        <span>Argentina</span>
                    </InfoBox>
                </div>

                <DetailsBox>
                    <Details>
                        <h3>Información de Tickets</h3>
                        <div>
                            <span>Nombre: </span>
                            <span>Matías Rivera</span>
                        </div>
                        <div>
                            <span>Teléfono: </span>
                            <span>3804122323</span>
                        </div>
                        <div>
                            <span>Email: </span>
                            <span>matias@example.com</span>
                        </div>
                    </Details>
                    <Details>
                        <h3>Información del Programa</h3>
                        <div>
                            <span>Nombre: </span>
                            <span>Matías Rivera</span>
                        </div>
                        <div>
                            <span>Teléfono: </span>
                            <span>3804122323</span>
                        </div>
                        <div>
                            <span>Email: </span>
                            <span>matias@example.com</span>
                        </div>
                    </Details>
                </DetailsBox>
            </Info>
            <MapContainer>
                <Map
                    lat={parseFloat(`${process.env.REACT_APP_MAP_LAT}`)}
                    lng={parseFloat(`${process.env.REACT_APP_MAP_LNG}`)}
                    zoom={16}
                />
            </MapContainer>
        </Container>
    );
};

export default Location;
