import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: var(--gradient-primary-2);
`;

export const SocialList = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;
`;
export const SocialListItem = styled.li`
    font-size: 1.5rem;
    color: var(--color-white);
    transition: all 0.2s;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

export const Form = styled.form`
    display: flex;
    gap: 2rem;
    align-items: center;
`;

export const Label = styled.label`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-white);
`;

export const Input = styled.input`
    padding: 0.5rem 1rem;
    color: var(--color-black);
    background: var(--color-white);
    border: 0;
    outline: 0;
    width: 15rem;
    height: 2.5rem;
    font-size: 1rem;
`;

export const Submit = styled.button`
    color: white;
    text-transform: uppercase;
    padding: 0 1.2rem;
    height: 2.5rem;
    font-size: 1rem;
    background: var(--color-primary-dark);
    border: 1px solid transparent;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s;
    display: flex;
    &:hover {
        color: var(--color-primary);
        border: 1px solid var(--color-primary);
        cursor: pointer;
        background: var(--color-white);
    }
`;
