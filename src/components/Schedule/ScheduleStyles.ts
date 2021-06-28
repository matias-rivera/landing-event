import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 10rem;
    gap: 2rem;
    background-image: var(--gradient-white);

    @media (max-width: 1200px) {
        padding: 5rem 7rem;
    }

    @media (max-width: 1024px) {
        padding: 5rem 5rem;
    }
    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }
`;

export const Title = styled.h1`
    text-align: center;
    color: var(--color-primary-dark);
    margin-bottom: 0.5rem;
`;

export const SubTitle = styled.h3`
    text-align: center;
    color: var(--color-gray);
    font-weight: 400;
`;

export const ScheduleContainer = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const SwitchContainer = styled.div`
    background: var(--color-primary-dark);
`;

export const Switch = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
`;

export const SwitchButton = styled.li`
    color: var(--color-white);
    background: ${({ active }: { active?: boolean }) =>
        active ? "var(--color-primary);" : "var(--color-primary-dark);"};
    padding: 2rem 0;
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
    transition: all 0.2s;

    &:hover {
        cursor: pointer;
        background: var(--color-primary);
    }

    span:nth-child(1) {
        font-weight: 800;
        font-size: 1.5rem;
        margin-right: 0.5rem;
        @media (max-width: 1200px) {
            font-size: 1rem;
        }
        @media (max-width: 1024px) {
            font-size: 1.2rem;
        }
    }

    span:nth-child(2) {
        @media (max-width: 1024px) {
            display: none;
        }
    }

    @media (max-width: 1200px) {
        font-size: 0.9rem;
    }
    @media (max-width: 769px) {
        padding: 1.2rem 0;
    }
`;

export const List = styled.ul`
    list-style: none;
    width: 100%;
    background: var(--color-white);
    li:not(li:last-child) {
        border-bottom: none;
    }
`;

export const ListItem = styled.li`
    display: flex;
    padding: 2rem;
    border: 1px solid var(--color-gray-light);
    gap: 2rem;
    transition: all 0.2s;
    &:hover {
        cursor: pointer;
        background: var(--color-white-2);
    }
`;

export const ItemPicture = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
`;

export const ItemDate = styled.h4`
    color: var(--color-gray);
`;

export const ItemTitle = styled.h3``;

export const ItemAuthor = styled.h3`
    font-weight: 400;
    span {
        color: var(--color-primary-dark);
        &:hover {
            color: var(--color-primary);
            cursor: pointer;
        }
    }
`;

export const ItemDetails = styled.div`
    overflow: hidden;

    display: ${({ open }: { open?: boolean }) => (open ? "flex" : "none")};
    flex-direction: column;
    gap: 1rem;
    transition: all 1s;
`;

export const ItemFront = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ItemText = styled.p`
    color: var(--color-gray);
    line-height: 1.5;
    font-size: 1.05rem;
`;

export const ItemTags = styled.div`
    font-weight: 500;
    letter-spacing: 1px;
    color: var(--color-primary-black);
`;

export const Line = styled.hr`
    border: none;
    border-bottom: 1px solid var(--color-gray-light);
`;

export const ItemPlace = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    span:nth-child(1) {
        color: var(--color-primary);
        font-weight: 600;
    }
    span:nth-child(2) {
        color: var(--color-gray);
    }
`;

export const ButtonPdf = styled.button`
    color: white;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    background: var(--color-primary);
    border: none;
    border-radius: 5px;
    transition: all 0.2s;
    width: 15rem;
    align-self: center;

    &:hover {
        cursor: pointer;
        background: var(--color-primary-dark);
    }
`;
