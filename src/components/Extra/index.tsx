import { Container, Image, Info, Title, SubTitle, Text } from "./ExtraStyles";

const Extra: React.FC = () => {
    return (
        <Container>
            <Image />
            <Info>
                <SubTitle>Capacítate</SubTitle>
                <Title>
                    Actualiza tus conocimeintos con las nuevas tecnologías
                </Title>
                <Text>
                    El trozo de texto estándar de Lorem Ipsum usado desde el año
                    1500 es reproducido debajo para aquellos interesados. Las
                    secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et
                    Malorum" por Cicero son también reproducidas en su forma
                    original exacta, acompañadas por versiones en Inglés de la
                    traducción realizada en 1914 por H. Rackham.
                </Text>
                <Text>
                    El trozo de texto estándar de Lorem Ipsum usado desde el año
                    1500 es reproducido debajo para aquellos interesados. Las
                    secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et
                    Malorum" por Cicero son también reproducidas en su forma
                    original exacta.
                </Text>
            </Info>
        </Container>
    );
};

export default Extra;
