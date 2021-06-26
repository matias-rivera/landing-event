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
        <Container>
            <InfoContainer>
                <InfoSubTitle>Únete al evento</InfoSubTitle>
                <InfoTitle>Sobre Nosotros</InfoTitle>
                <div>
                    <InfoText>
                        How you transform your business as tech, consumer,
                        habits industry dynamic change, Find out from those
                        leading the charge.
                    </InfoText>
                    <InfoText>
                        How you transform your business as tech, consumer,
                        habits industry dynamic change, Find out from those
                        leading the charge. How you transform your business as
                        tech, consumer, habits industry dynamic change, Find out
                        from those leading the charge.
                    </InfoText>
                </div>
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
                <Button>Comprar Ticket</Button>
            </InfoContainer>
            <CardsContainer>
                <Card>
                    <CardIcon>
                        <FaRegComments />
                    </CardIcon>
                    <CardTitle>Networking</CardTitle>
                    <CardText>
                        How you transform your business as technology, consumer,
                        habits industry dynamic.
                    </CardText>
                    <CardNumber>
                        <span>1</span>
                    </CardNumber>
                </Card>
                <Card>
                    <CardIcon>
                        <FaUsers />
                    </CardIcon>
                    <CardTitle>New People</CardTitle>
                    <CardText>
                        How you transform your business as technology, consumer,
                        habits industry dynamic.
                    </CardText>
                    <CardNumber>
                        <span>2</span>
                    </CardNumber>
                </Card>
                <Card>
                    <CardIcon>
                        <GiPublicSpeaker />
                    </CardIcon>
                    <CardTitle>Speaking</CardTitle>
                    <CardText>
                        How you transform your business as technology, consumer,
                        habits industry dynamic.
                    </CardText>
                    <CardNumber>
                        <span>3</span>
                    </CardNumber>
                </Card>
                <Card>
                    <CardIcon>
                        <GiPartyPopper />
                    </CardIcon>
                    <CardTitle>Have fun</CardTitle>
                    <CardText>
                        How you transform your business as technology, consumer,
                        habits industry dynamic.
                    </CardText>
                    <CardNumber>
                        <span>4</span>
                    </CardNumber>
                </Card>
            </CardsContainer>
        </Container>
    );
};

export default About;
