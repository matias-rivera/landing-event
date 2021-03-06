import styled from "styled-components";

export const Container = styled.section`
    background-image: radial-gradient(
            circle at 52% 94%,
            rgba(169, 169, 169, 0.04) 0%,
            rgba(169, 169, 169, 0.04) 50%,
            rgba(199, 199, 199, 0.04) 50%,
            rgba(199, 199, 199, 0.04) 100%
        ),
        radial-gradient(
            circle at 96% 98%,
            rgba(61, 61, 61, 0.04) 0%,
            rgba(61, 61, 61, 0.04) 50%,
            rgba(201, 201, 201, 0.04) 50%,
            rgba(201, 201, 201, 0.04) 100%
        ),
        radial-gradient(
            circle at 93% 97%,
            rgba(227, 227, 227, 0.04) 0%,
            rgba(227, 227, 227, 0.04) 50%,
            rgba(145, 145, 145, 0.04) 50%,
            rgba(145, 145, 145, 0.04) 100%
        ),
        radial-gradient(
            circle at 79% 52%,
            rgba(245, 245, 245, 0.04) 0%,
            rgba(245, 245, 245, 0.04) 50%,
            rgba(86, 86, 86, 0.04) 50%,
            rgba(86, 86, 86, 0.04) 100%
        ),
        linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
        url("/images/tickets.jpg");
    display: flex;

    flex-direction: column;
    align-items: center;
    padding: 5rem 1rem;
    gap: 4rem;
`;

export const Title = styled.h1`
    color: var(--color-white);
    text-align: center;
`;

export const TicketContainer = styled.div`
    display: flex;
    gap: 4rem;
    @media (max-width: 1024px) {
        gap: 2rem;
    }
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const TicketBack = styled.div`
    width: 50px;
    height: 50px;
    background-image: var(--gradient-primary);
    border-radius: 50%;
    position: absolute;
    bottom: -3rem;
    right: -3rem;
    transition: transform 0.8s;
`;

export const TicketTitle = styled.h3`
    color: var(--color-black);
    text-transform: uppercase;
    z-index: 10;
    transition: color 0.5s;
    margin-top: 1.5rem; ;
`;

export const TicketPrice = styled.h1`
    color: var(--color-primary);
    font-weight: 800;
    font-size: 3.5rem;
    z-index: 10;
    transition: color 0.5s;
`;

export const Line = styled.hr`
    width: 70%;
    height: 5px;
    background: linear-gradient(
        90deg,
        rgba(41, 63, 20, 0.9),
        rgba(56, 167, 0, 0.9)
    );
    border: 0;
    z-index: 10;
    transition: background 0.5s;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    z-index: 10;
`;
export const ListItem = styled.li`
    color: var(--color-gray);
    transition: color 0.5s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const TicketButton = styled.button`
    color: var(--color-black);
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background: var(--color-white);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    transition: all 0.2s;
    border: none;
    margin-bottom: 1.5rem;
    margin-top: auto;

    align-self: center;
    z-index: 10;

    &:hover {
        cursor: pointer;
        color: var(--color-primary);
    }
`;

export const SubTitle = styled.h4`
    color: var(--color-gray-light);
    font-weight: 400;
    text-align: center;

    & > span {
        transition: all 0.3s;
        color: var(--color-primary);
        &:hover {
            cursor: pointer;
            color: var(--color-primary-strong);
        }
    }
`;

export const Ticket = styled.div`
    width: 240px;

    height: 350px;
    background-image: radial-gradient(
            circle at 27% 33%,
            rgba(193, 193, 193, 0.04) 0%,
            rgba(193, 193, 193, 0.04) 50%,
            rgba(77, 77, 77, 0.04) 50%,
            rgba(77, 77, 77, 0.04) 100%
        ),
        radial-gradient(
            circle at 35% 8%,
            rgba(183, 183, 183, 0.04) 0%,
            rgba(183, 183, 183, 0.04) 50%,
            rgba(25, 25, 25, 0.04) 50%,
            rgba(25, 25, 25, 0.04) 100%
        ),
        radial-gradient(
            circle at 93% 50%,
            rgba(218, 218, 218, 0.04) 0%,
            rgba(218, 218, 218, 0.04) 50%,
            rgba(127, 127, 127, 0.04) 50%,
            rgba(127, 127, 127, 0.04) 100%
        ),
        linear-gradient(90deg, hsl(116, 0%, 99%), hsl(116, 0%, 99%));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    border-radius: 5px;
    position: relative;
    overflow: hidden;

    &:hover ${TicketBack} {
        transform: scale(19);
    }

    &:hover ${TicketTitle} {
        color: var(--color-white);
    }

    &:hover ${TicketPrice} {
        color: var(--color-white);
    }

    &:hover ${ListItem} {
        color: var(--color-white);
    }

    &:hover ${Line} {
        background: var(--color-white-2);
    }

    @media (max-width: 900px) {
        width: 300px;
    }

    @media (max-width: 480px) {
        width: 240px;
    }
`;
