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
        </Container>
    );
};

export default Memory;
