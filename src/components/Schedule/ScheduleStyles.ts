import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 10rem;
`;

export const Title = styled.h1`
    text-align: center;
    color: var(--color-primary-dark);
    margin-bottom: 0.2rem;
`;

export const SubTitle = styled.h3`
    text-align: center;
    color: var(--color-gray);
    font-weight: 400;
    margin-bottom: 2rem;
`;

export const ScheduleContainer = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const SwitchContainer = styled.div`
    display: flex;
    background: var(--color-primary-dark);
`;

export const Switch = styled.ul`
    display: flex;
    list-style: none;
`;

export const SwitchButton = styled.li`
    color: var(--color-white);
    background: var(--color-primary-dark);
    padding: 2rem;
    font-size: 1.2rem;
    &:hover {
        cursor: pointer;
        background: var(--color-primary);
    }

    span:nth-child(1) {
        font-weight: 800;
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }
`;

export const List = styled.ul`
    list-style: none;
    width: 100%;

    li:not(li:last-child) {
        border-bottom: none;
    }
`;

export const ListItem = styled.li`
    display: flex;
    padding: 2rem;
    border: 1px solid var(--color-gray-light);
    gap: 2rem;
    &:hover {
        cursor: pointer;
    }
`;

export const ItemPicture = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
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
        color: var(--color-primary);
        &:hover {
            color: var(--color-primary-dark);
            cursor: pointer;
        }
    }
`;

export const ItemDetails = styled.div`
    overflow: hidden;
    display: ${({ open }: { open?: boolean }) => (open ? "none" : "flex")};
    flex-direction: column;
    gap: 1rem;
    transition: all 1s;

    /* height: ${({ open }: { open?: boolean }) => (open ? "0" : "100")}; */
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
