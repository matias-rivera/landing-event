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

const Memory: React.FC = () => {
    const renderItem = () => (
        <Item>
            <Box>
                <span>Algoritmos Genéticos para la optimización de rutas</span>
                <span>Inteligencia Artificial</span>
            </Box>
        </Item>
    );
    return (
        <Container>
            {/*          <TitleContainer>
                <Title>Momentos del año pasado</Title>
                <SubTitle>
                    Explora las presentaciones memorables del año 2020.
                </SubTitle>
            </TitleContainer> */}
            <Grid>
                {renderItem()}
                {renderItem()}
                {renderItem()}
                {renderItem()}
                {renderItem()}
                {renderItem()}
                {renderItem()}
                {renderItem()}
            </Grid>
            {/*      <Button>Ver más</Button> */}
        </Container>
    );
};

export default Memory;
