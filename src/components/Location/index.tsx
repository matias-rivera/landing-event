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
    Black,
    SwitchContainer,
} from "./LocationStyles";
import Map from "../Map";

const Location: React.FC = () => {
    const [option, setOption] = useState<number>(1);

    const renderInfo = () => {
        if (option === 1) {
            return (
                <>
                    <h3>San Miguel de Tucumán, Tucumán</h3>
                    <span>CALLE 01, AVENIDA 1002</span>
                    <span>Argentina</span>
                </>
            );
        } else if (option === 2) {
            return (
                <>
                    <span>
                        <Black>Viernes 19:</Black> 08:30 - 18:00
                    </span>
                    <span>
                        <Black>Sábado 20:</Black> 08:30 - 18:00
                    </span>
                    <span>
                        <Black>Domingo 21:</Black> 10:00 - 15:00
                    </span>
                    <span>
                        <Black>Lunes 22:</Black> 8:30 - 18:00
                    </span>
                </>
            );
        }
    };

    return (
        <Container id="location">
            <Info>
                <div>
                    <SubTitle>Informate</SubTitle>
                    <Title>Lugar y Hora</Title>
                </div>
                <SwitchContainer>
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
                            Programa
                        </SwitchButton>
                        {/*                         <SwitchButton
                            active={option === 3}
                            onClick={() => setOption(3)}
                        >
                            Como llegar
                        </SwitchButton> */}
                    </Switch>
                    <InfoBox>{renderInfo()}</InfoBox>
                </SwitchContainer>

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
