import {
    Container,
    Title,
    SubTitle,
    TicketContainer,
    Ticket,
    TicketTitle,
    TicketPrice,
    Line,
    List,
    ListItem,
    TicketButton,
    TicketBack,
} from "./TicketsStyles";
import { FaCheckCircle } from "react-icons/fa";

const Tickets = () => {
    const renderTicket = () => (
        <Ticket id="subscribe">
            <TicketTitle>Regular</TicketTitle>
            <TicketPrice>$150</TicketPrice>
            <Line />
            <List>
                <ListItem>
                    <FaCheckCircle /> Un asiento
                </ListItem>
                <ListItem>
                    <FaCheckCircle />
                    Bocadillos
                </ListItem>
                <ListItem>
                    <FaCheckCircle />
                    Desayuno y Almuerzo
                </ListItem>
                <ListItem>
                    <FaCheckCircle />
                    Entrada al after
                </ListItem>
            </List>
            <TicketButton>Reservar</TicketButton>
            <TicketBack />
        </Ticket>
    );
    return (
        <Container>
            <Title>Escoge tu entrada</Title>
            <TicketContainer>
                {renderTicket()}
                {renderTicket()}
                {renderTicket()}
            </TicketContainer>
            <SubTitle>
                All prices exclude 25% VAT. For more details, view our{" "}
                <span>Terms & Conditions</span>
            </SubTitle>
        </Container>
    );
};

export default Tickets;
