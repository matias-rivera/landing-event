import { Container, SubTitle, Title, Button } from "./HurryStyles";

const Hurry: React.FC = () => {
    return (
        <Container>
            <SubTitle>No te quedes afuera!</SubTitle>

            <Title>
                <h1>Reserva tu lugar ahora</h1>
            </Title>
            <Button to="subscribe" smooth={true} duration={500} spy={true}>
                Reservar
            </Button>
        </Container>
    );
};

export default Hurry;
