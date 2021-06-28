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
    Image,
} from "./HeroStyles";
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const Hero: React.FC = () => {
    return (
        <Container id="hero">
            <Location>
                <FaMapMarkerAlt /> Tucuman, Argentina
            </Location>
            <TitleContainer>
                <SubTitle>Seminario Anual</SubTitle>
                <Title>SOFTWARE XXI</Title>
                <Company>Presentado por Vercel</Company>
            </TitleContainer>
            <Date>NOVIEMBRE 19 - 22</Date>
            <Button to="subscribe" smooth={true} duration={500} spy={true}>
                Reserva tu lugar <FaCheckCircle />
            </Button>
        </Container>
    );
};

export default Hero;
