import {
    Container,
    Grid,
    Item,
    Box,
    TitleContainer,
    Title,
    SubTitle,
    Button,
} from "./MemoryStyles";

interface Props {
    speechs: {
        title: string;
        category: string;
        image: string;
    }[];
}

const Memory: React.FC<Props> = ({ speechs }: Props) => {
    return (
        <Container>
            {/*          <TitleContainer>
                <Title>Momentos del año pasado</Title>
                <SubTitle>
                    Explora las presentaciones memorables del año 2020.
                </SubTitle>
            </TitleContainer> */}
            <Grid>
                {speechs.map((speech, i) => (
                    <Item url={speech.image} key={i}>
                        <Box>
                            <span>{speech.title}</span>
                            <span>{speech.category}</span>
                        </Box>
                    </Item>
                ))}
            </Grid>
            {/*      <Button>Ver más</Button> */}
        </Container>
    );
};

export default Memory;
