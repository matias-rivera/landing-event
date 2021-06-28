import {
    Container,
    Title,
    SponsorsContainer,
    Sponsor,
    Underline,
    Button,
} from "./SponsorsStyles";

interface Props {
    sponsors: {
        image: string;
        name: string;
    }[];
}

const Sponsors: React.FC<Props> = ({ sponsors }: Props) => {
    return (
        <Container>
            <Title>Nuestros Sponsors</Title>
            <Underline />

            <SponsorsContainer>
                <Sponsor>
                    <img src={sponsors[0].image} alt={sponsors[0].name} />
                </Sponsor>
                <Sponsor>
                    <img src={sponsors[1].image} alt={sponsors[1].name} />
                    <img src={sponsors[2].image} alt={sponsors[2].name} />
                    <img src={sponsors[3].image} alt={sponsors[3].name} />
                </Sponsor>
                <Sponsor>
                    <img src={sponsors[4].image} alt={sponsors[4].name} />
                    <img src={sponsors[5].image} alt={sponsors[5].name} />
                    <img src={sponsors[6].image} alt={sponsors[6].name} />
                </Sponsor>
            </SponsorsContainer>
        </Container>
    );
};

export default Sponsors;
