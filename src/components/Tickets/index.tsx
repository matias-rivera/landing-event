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
    return (
        <Container id="subscribe">
            <Title>Reserva tu entrada</Title>
            <TicketContainer>
                <Ticket>
                    <TicketTitle>Entrada un día</TicketTitle>
                    <TicketPrice>$50</TicketPrice>
                    <Line />
                    <List>
                        <ListItem>
                            <FaCheckCircle /> Un día
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
                <Ticket>
                    <TicketTitle>Regular</TicketTitle>
                    <TicketPrice>$150</TicketPrice>
                    <Line />
                    <List>
                        <ListItem>
                            <FaCheckCircle /> 4 días completos
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
                <Ticket>
                    <TicketTitle>VIP</TicketTitle>
                    <TicketPrice>$300</TicketPrice>
                    <Line />
                    <List>
                        <ListItem>
                            <FaCheckCircle /> 4 días completos
                        </ListItem>
                        <ListItem>
                            <FaCheckCircle />
                            Desayuno y Almuerzo
                        </ListItem>

                        <ListItem>
                            <FaCheckCircle />
                            Entrada al after
                        </ListItem>
                        <ListItem>
                            <FaCheckCircle />
                            Presentaciones exclusivas
                        </ListItem>
                    </List>
                    <TicketButton>Reservar</TicketButton>
                    <TicketBack />
                </Ticket>
            </TicketContainer>
            <SubTitle>
                All prices exclude 25% VAT. For more details, view our{" "}
                <span>Terms & Conditions</span>
            </SubTitle>
        </Container>
    );
};

export default Tickets;
