import {
    Container,
    SocialList,
    SocialListItem,
    Form,
    Label,
    Input,
    Submit,
} from "./NewsletterStyles";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";
const Newsletter: React.FC = () => {
    return (
        <Container>
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
            <Form>
                <Label>Suscribite para recibir novedades!</Label>
                <Input placeholder="micorreo@example.com" />
                <Submit>
                    <FaEnvelope /> Enviar
                </Submit>
            </Form>
        </Container>
    );
};

export default Newsletter;
