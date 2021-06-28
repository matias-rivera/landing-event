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
                <div>
                    <Input placeholder="micorreo@example.com" />
                    <Submit>
                        <FaEnvelope /> <span>Enviar</span>
                    </Submit>
                </div>
            </Form>
        </Container>
    );
};

export default Newsletter;
