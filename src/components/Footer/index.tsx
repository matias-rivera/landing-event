import {
    Container,
    Title,
    SubTitle,
    SiteList,
    SiteListItem,
    Copyright,
    SocialList,
    SocialListItem,
    ItemLink,
} from "./FooterStyles";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <Container>
            <div>
                <Title>
                    <h1>
                        SOFT<span>WARE</span>
                    </h1>
                    <span />
                    <h1>
                        X<span>XI</span>
                    </h1>
                </Title>

                <SubTitle>19 - 22 NOV 2021 / Tucumán, Argentina</SubTitle>
            </div>
            <SocialList>
                <SocialListItem>
                    <FaFacebook />
                </SocialListItem>
                <SocialListItem>
                    <FaTwitter />
                </SocialListItem>
                <SocialListItem>
                    <FaInstagram />
                </SocialListItem>
                <SocialListItem>
                    <FaLinkedin />
                </SocialListItem>
            </SocialList>
            <SiteList>
                <ItemLink to="about" smooth={true} duration={500} spy={true}>
                    Nosotros
                </ItemLink>
                <ItemLink to="schedule" smooth={true} duration={500} spy={true}>
                    Programa
                </ItemLink>
                <ItemLink
                    to="subscribe"
                    smooth={true}
                    duration={500}
                    spy={true}
                >
                    Reserva
                </ItemLink>
                <ItemLink to="location" smooth={true} duration={500} spy={true}>
                    Contacto
                </ItemLink>
                <span>Términos y Condiciones</span>
            </SiteList>
            <Copyright>
                © 2021, Matías Rivera. Todos los derechos reservados.
            </Copyright>
        </Container>
    );
};

export default Footer;
