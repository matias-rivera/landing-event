import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 5rem 10rem;
    gap: 1rem;
    background: var(--gradient-white-2);

    @media (max-width: 1200px) {
        padding: 5rem 5rem;
    }

    @media (max-width: 1024px) {
        padding: 5rem 5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }
`;

export const Event = styled.div`
    display: flex;
`;

export const Hotel = styled.div`
    display: flex;
`;

export const HotelPicture = styled.div``;

export const HotelIcon = styled.div``;

export const HotelModal = styled.div``;

export const HotelInfo = styled.div``;

export const HotelButton = styled.div``;

export const MapContainer = styled.div`
    width: 50%;
    height: 360px;
    padding: 1rem;
    border-radius: 10px;
    background: white;
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const Black = styled.span`
    color: black !important;
    font-weight: 600;
`;

export const Info = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;

    @media (max-width: 1024px) {
        width: 100%;
        gap: 2rem;
    }
    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        align-items: center;
    }
`;
export const SubTitle = styled.h4`
    color: var(--color-gray);
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const Title = styled.h1`
    color: var(--color-primary-dark);
    @media (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
    }
`;

export const Line = styled.hr`
    width: 20%;
    background: var(--color-primary-dark);
    border: none;
    height: 2px;
`;

export const Switch = styled.ul`
    display: flex;
    list-style: none;
    margin-bottom: 1rem;
`;

export const SwitchButton = styled.li`
    padding: 0.5rem 1rem;
    background: ${({ active }: { active?: boolean }) =>
        active ? "var(--color-primary)" : "transparent"};
    color: ${({ active }: { active?: boolean }) =>
        active ? "var(--color-white)" : "var(--color-black)"};
    transition: all 0.2s;
    &:hover {
        cursor: pointer;
        color: var(--color-white);
        background: var(--color-primary);
    }
    @media (max-width: 480px) {
        padding: 0.4rem 0.6rem;
    }
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
    }
    span {
        color: var(--color-gray);
    }
`;

export const DetailsBox = styled.div`
    display: flex;
    gap: 2rem;
    @media (max-width: 480px) {
        flex-direction: column;
    }
`;
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
        color: var(--color-primary-dark);
    }
    div {
        span:nth-child(1) {
            font-weight: 600;
        }
    }
`;
