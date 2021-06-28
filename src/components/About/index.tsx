import React from "react";
import {
    Container,
    InfoContainer,
    InfoTitle,
    InfoSubTitle,
    InfoText,
    InfoItem,
    Button,
    CardsContainer,
    Card,
    CardIcon,
    CardNumber,
    CardText,
    CardTitle,
} from "./AboutStyles";

import {
    FaMapMarkerAlt,
    FaRegComments,
    FaCalendarAlt,
    FaUsers,
} from "react-icons/fa";

import { GiPublicSpeaker, GiPartyPopper } from "react-icons/gi";

const About: React.FC = () => {
    return (
        <Container id="about">
            <InfoContainer>
                <div>
                    <InfoSubTitle>Únete al evento</InfoSubTitle>
                    <InfoTitle>Nosotros</InfoTitle>
                </div>
                <div>
                    <InfoText>
                        Es un hecho establecido hace demasiado tiempo que un
                        lector se distraerá con el contenido del texto de un
                        sitio mientras que mira su diseño.raerá con el contenido
                        del texto de un sitio mientras que mira su diseño.
                    </InfoText>
                </div>
                <div>
                    <InfoItem>
                        <span>
                            <FaCalendarAlt />
                        </span>
                        <span>Fecha: </span>
                        <span>Noviembre 19 - Noviembre 22</span>
                    </InfoItem>
                    <InfoItem>
                        <span>
                            <FaMapMarkerAlt />
                        </span>
                        <span>Lugar: </span>
                        <span>Tucumán - San Miguel de Tucumán</span>
                    </InfoItem>
                </div>
                <Button to="subscribe" smooth={true} duration={500} spy={true}>
                    Reserva
                </Button>
            </InfoContainer>
            <CardsContainer>
                <Card>
                    <CardIcon>
                        <FaRegComments />
                    </CardIcon>
                    <CardTitle>Networking</CardTitle>
                    <CardText>
                        Es un hecho establecido hace demasiado tiempo que un
                        lector se distraerá.
                    </CardText>
                    <CardNumber></CardNumber>
                </Card>
                <Card>
                    <CardIcon>
                        <FaUsers />
                    </CardIcon>
                    <CardTitle>Talleres</CardTitle>
                    <CardText>
                        Es un hecho establecido hace demasiado tiempo que un
                        lector se distraerá.
                    </CardText>
                    <CardNumber></CardNumber>
                </Card>
                <Card>
                    <CardIcon>
                        <GiPublicSpeaker />
                    </CardIcon>
                    <CardTitle>Presentaciones</CardTitle>
                    <CardText>
                        Es un hecho establecido hace demasiado tiempo que un
                        lector se distraerá.
                    </CardText>
                    <CardNumber></CardNumber>
                </Card>
                <Card>
                    <CardIcon>
                        <GiPartyPopper />
                    </CardIcon>
                    <CardTitle>Diviértete</CardTitle>
                    <CardText>
                        Es un hecho establecido hace demasiado tiempo que un
                        lector se distraerá.
                    </CardText>
                    <CardNumber></CardNumber>
                </Card>
            </CardsContainer>
        </Container>
    );
};

export default About;
