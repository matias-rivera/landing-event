import { Container, SubTitle, Title, Button } from "./HurryStyles";

const Hurry: React.FC = () => {
    return (
        <Container>
            <SubTitle>Las entradas se agotan</SubTitle>

            <Title>
                <h1>Reserva tu lugar ahora</h1>
            </Title>
            <Button>Reservar</Button>
        </Container>
    );
};

export default Hurry;
