import { Container, Title, SponsorsContainer, Button } from "./SponsorsStyles";

const Sponsors: React.FC = () => {
    return (
        <Container>
            <Title>Nuestros Sponsors</Title>
            <SponsorsContainer>
                <img src={"/images/sponsors/aws.svg"} />
            </SponsorsContainer>
            <SponsorsContainer>
                <img src={"/images/sponsors/oracle.svg"} />
                <img src={"/images/sponsors/unity.svg"} />
                <img src={"/images/sponsors/cisco.svg"} />
            </SponsorsContainer>
            <SponsorsContainer>
                <img src={"/images/sponsors/aws.svg"} />
                <img src={"/images/sponsors/unity.svg"} />
                <img src={"/images/sponsors/cisco.svg"} />
            </SponsorsContainer>
        </Container>
    );
};

export default Sponsors;
