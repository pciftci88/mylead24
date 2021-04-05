import styled from 'styled-components';

export const Content = styled.section`
    margin: 40px 0;
    position: relative;
`;

export const Legend = styled.a`
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 320px;
    background-color: #16366F;
    padding: 10px;
    border-radius: 3px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;

    @media (max-width: 1020px) {
        font-size: 0.8rem;
        bottom: 20%;
        max-width: 220px;
    }
`;