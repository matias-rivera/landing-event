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
    ButtonPdf,
} from "./ScheduleStyles";

const renderItem = () => <Details />;

const Schedule = () => {
    const [day, setDay] = useState<number>(1);
    return (
        <Container id="schedule">
            <div>
                <Title>Horario de presentaciones</Title>
                <SubTitle>
                    Es un hecho establecido hace demasiado tiempo que un lector
                    se distraerá con el contenido del texto de un sitio mientras
                    que mira su diseño.
                </SubTitle>
            </div>
            <ScheduleContainer>
                <SwitchContainer>
                    <Switch>
                        <SwitchButton
                            active={day === 1}
                            onClick={() => setDay(1)}
                        >
                            <span>Día 1</span>
                            <span>Noviembre 19, 2021</span>
                        </SwitchButton>
                        <SwitchButton
                            active={day === 2}
                            onClick={() => setDay(2)}
                        >
                            <span>Día 2</span>
                            <span>Noviembre 20, 2021</span>
                        </SwitchButton>
                        <SwitchButton
                            active={day === 3}
                            onClick={() => setDay(3)}
                        >
                            <span>Día 3</span>
                            <span>Noviembre 21, 2021</span>
                        </SwitchButton>
                        <SwitchButton
                            active={day === 4}
                            onClick={() => setDay(4)}
                        >
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
            <ButtonPdf>Descargar PDF</ButtonPdf>
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
