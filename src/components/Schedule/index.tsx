import { useState } from "react";
import {
    Container,
    Title,
    SubTitle,
    SwitchContainer,
    Switch,
    SwitchButton,
    List,
    ListItem,
    ItemInfo,
    ItemFront,
    ItemDate,
    ItemDetails,
    ItemAuthor,
    ItemPicture,
    ItemTitle,
    ItemText,
    ItemTags,
    Line,
    ItemPlace,
    ScheduleContainer,
} from "./ScheduleStyles";

const renderItem = () => Details();

const Schedule = () => {
    return (
        <Container>
            <Title>Horario de presentaciones</Title>
            <SubTitle>
                Es un hecho establecido hace demasiado tiempo que un lector se
                distraerá con el contenido del texto de un sitio mientras que
                mira su diseño.
            </SubTitle>
            <ScheduleContainer>
                <SwitchContainer>
                    <Switch>
                        <SwitchButton>
                            <span>Día 1</span>
                            <span>Noviembre 19, 2021</span>
                        </SwitchButton>
                        <SwitchButton>
                            <span>Día 2</span>
                            <span>Noviembre 20, 2021</span>
                        </SwitchButton>
                        <SwitchButton>
                            <span>Día 3</span>
                            <span>Noviembre 21, 2021</span>
                        </SwitchButton>
                        <SwitchButton>
                            <span>Día 4</span>
                            <span>Noviembre 22, 2021</span>
                        </SwitchButton>
                    </Switch>
                </SwitchContainer>
                <List>
                    {renderItem()}
                    {renderItem()}
                    {renderItem()}
                </List>
            </ScheduleContainer>
        </Container>
    );
};

const Details = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <ListItem onClick={() => setOpen(!open)}>
            <ItemPicture src={"/images/person.jpg"} />
            <ItemInfo>
                <ItemFront>
                    <ItemDate>08:00 - 09:00</ItemDate>
                    <ItemTitle>Algoritmos Géneticos</ItemTitle>
                    <ItemAuthor>
                        Por <span>Rivera, Juan Matías</span> - Frontend
                        Developer
                    </ItemAuthor>
                </ItemFront>
                <ItemDetails open={open}>
                    <ItemText>
                        Es un hecho establecido hace demasiado tiempo que un
                        lector se distraerá con el contenido del texto de un
                        sitio mientras que mira su diseño. El punto de usar
                        Lorem Ipsum es que tiene una distribución más o menos
                        normal de las letras, al contrario de usar textos como
                        por ejemplo
                    </ItemText>
                    <ItemTags>INTELIGENCIA ARTIFICIAL</ItemTags>
                    <Line />
                    <ItemPlace>
                        <span>LUGAR</span>
                        <span>Habitación 202, Segundo Piso</span>
                    </ItemPlace>
                </ItemDetails>
            </ItemInfo>
        </ListItem>
    );
};

export default Schedule;
