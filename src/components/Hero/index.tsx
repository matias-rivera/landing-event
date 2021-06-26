import React from "react";
import {
    Container,
    TitleContainer,
    SubTitle,
    Title,
    Location,
    Company,
    Date,
    Button,
} from "./HeroStyles";
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const Hero: React.FC = () => {
    return (
        <Container>
            <Location>
                <FaMapMarkerAlt /> Tucuman, Argentina
            </Location>
            <TitleContainer>
                <SubTitle>Seminario Anual</SubTitle>
                <Title>SOFTWARE XXI</Title>
                <Company>by Shiro</Company>
            </TitleContainer>
            <Date>NOVIEMBRE 19 - 22</Date>
            <Button>
                Reservar Ticket <FaCheckCircle />
            </Button>
        </Container>
    );
};

export default Hero;
