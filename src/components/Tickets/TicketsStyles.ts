import styled from "styled-components";

export const Container = styled.div`
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
    padding: 3rem 0;
    gap: 4rem;
`;

export const Title = styled.h1`
    color: var(--color-white);
`;

export const TicketContainer = styled.div`
    display: flex;
    gap: 4rem;
`;

export const TicketBack = styled.div`
    width: 50px;
    height: 50px;
    background-image: radial-gradient(
            circle at 72% 83%,
            rgba(12, 12, 12, 0.04) 0%,
            rgba(12, 12, 12, 0.04) 50%,
            rgba(172, 172, 172, 0.04) 50%,
            rgba(172, 172, 172, 0.04) 100%
        ),
        radial-gradient(
            circle at 57% 65%,
            rgba(11, 11, 11, 0.04) 0%,
            rgba(11, 11, 11, 0.04) 50%,
            rgba(222, 222, 222, 0.04) 50%,
            rgba(222, 222, 222, 0.04) 100%
        ),
        radial-gradient(
            circle at 64% 31%,
            rgba(11, 11, 11, 0.04) 0%,
            rgba(11, 11, 11, 0.04) 50%,
            rgba(191, 191, 191, 0.04) 50%,
            rgba(191, 191, 191, 0.04) 100%
        ),
        linear-gradient(130deg, rgb(5, 235, 123), rgb(47, 52, 6));
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

    align-self: center;
    z-index: 10;

    &:hover {
        cursor: pointer;
        color: var(--color-primary);
    }
`;

export const SubTitle = styled.h4`
    color: var(--color-white);
    font-weight: 400;
`;

export const Ticket = styled.div`
    width: 240px;
    height: 350px;
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
`;
