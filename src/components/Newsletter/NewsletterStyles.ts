import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 10rem;
    display: flex;
    justify-content: space-between;
`;

export const SocialList = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;

    * {
        transition: all 0.2s;
        &:hover {
            color: var(--color-primary);
            cursor: pointer;
            transform: scale(1.05);
        }
    }
`;
export const SocialListItem = styled.li`
    font-size: 1.5rem;
`;

export const Form = styled.form`
    display: flex;
    gap: 2rem;
    align-items: center;
`;

export const Label = styled.label`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-primary-dark);
`;

export const Input = styled.input`
    height: 100%;
    padding: 0.5rem 1rem;
    color: var(--color-black);
    background: var(--color-white-2);
    border: 0;
    outline: 0;
    width: 15rem;
`;

export const Submit = styled.button`
    color: white;
    text-transform: uppercase;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    background: var(--color-primary);
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
