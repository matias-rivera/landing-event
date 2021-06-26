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

const Tickets = () => {
    const renderTicket = () => (
        <Ticket>
            <TicketTitle>Regular</TicketTitle>
            <TicketPrice>$150</TicketPrice>
            <Line />
            <List>
                <ListItem>Un asiento</ListItem>
                <ListItem>Bocadillos</ListItem>
                <ListItem>Desayuno y Almuerzo</ListItem>
                <ListItem>Entrada al after</ListItem>
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
