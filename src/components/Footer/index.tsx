import {
    Container,
    Title,
    SubTitle,
    SiteList,
    SiteListItem,
    Copyright,
    SocialList,
    SocialListItem,
} from "./FooterStyles";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <Container>
            <div>
                <Title>
                    <h1>
                        <span>SOFT</span>WARE
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
                <SiteListItem>Información</SiteListItem>
                <SiteListItem>Contacto</SiteListItem>
                <SiteListItem>Entradas</SiteListItem>
                <SiteListItem>Lugar</SiteListItem>
                <SiteListItem>Términos y Condiciones</SiteListItem>
            </SiteList>
            <Copyright>
                © 2021, Matías Rivera. Todos los derechos reservados.
            </Copyright>
        </Container>
    );
};

export default Footer;
