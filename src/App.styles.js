import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    color: #666;
    border: 4px solid;
    border-radius: 5px;
    padding: .3em;
    background: #fff;
    min-width: 7em;
    max-width: 15em;
    margin: .5em auto;

    @media (max-width: 60em) {
        border: 3px solid;
    }
`;

export const Content = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 9em auto 2em auto;
    width: 100%;
`;