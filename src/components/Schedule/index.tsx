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
    Underline,
} from "./ScheduleStyles";

interface ScheduleProps {
    schedule: {
        job: string;
        company: string;
        author: string;
        title: string;
        time: string;
        text: string;
        category: string;
        place: string;
        picture: string[];
    }[][];
}

const Schedule: React.FC<ScheduleProps> = ({ schedule }: ScheduleProps) => {
    const [day, setDay] = useState<number>(0);
    return (
        <Container id="schedule">
            <Title>Programa</Title>
            <Underline />
            <ScheduleContainer>
                <SwitchContainer>
                    <Switch>
                        <SwitchButton
                            active={day === 0}
                            onClick={() => setDay(0)}
                        >
                            <span>Día 1</span>
                            <span>Noviembre 19, 2021</span>
                        </SwitchButton>
                        <SwitchButton
                            active={day === 1}
                            onClick={() => setDay(1)}
                        >
                            <span>Día 2</span>
                            <span>Noviembre 20, 2021</span>
                        </SwitchButton>
                        <SwitchButton
                            active={day === 2}
                            onClick={() => setDay(2)}
                        >
                            <span>Día 3</span>
                            <span>Noviembre 21, 2021</span>
                        </SwitchButton>
                        <SwitchButton
                            active={day === 3}
                            onClick={() => setDay(3)}
                        >
                            <span>Día 4</span>
                            <span>Noviembre 22, 2021</span>
                        </SwitchButton>
                    </Switch>
                </SwitchContainer>
                <List>
                    {schedule[day].map((data, i) => (
                        <Details speech={data} key={i} />
                    ))}
                </List>
            </ScheduleContainer>
            <ButtonPdf>Descargar PDF</ButtonPdf>
        </Container>
    );
};

interface DetailsProps {
    speech: {
        job: string;
        company: string;
        author: string;
        title: string;
        time: string;
        text: string;
        category: string;
        place: string;
        picture: string[];
    };
}

const Details = ({ speech }: DetailsProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <ListItem onClick={() => setOpen(!open)}>
            <ItemPicture src={speech.picture[0]} />

            <ItemInfo>
                <ItemFront>
                    <ItemDate>{speech.time}</ItemDate>
                    <ItemTitle>{speech.title}</ItemTitle>
                    <ItemAuthor>
                        Por <span>{speech.author}</span> - {speech.job}
                    </ItemAuthor>
                </ItemFront>
                <ItemDetails open={open}>
                    <ItemText>{speech.text}</ItemText>
                    <ItemTags>{speech.category}</ItemTags>
                    <Line />
                    <ItemPlace>
                        <span>LUGAR</span>
                        <span>{speech.place}</span>
                    </ItemPlace>
                </ItemDetails>
            </ItemInfo>
        </ListItem>
    );
};

export default Schedule;
