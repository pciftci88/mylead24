import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;

    @media (max-width: 1020px) {
        flex-wrap: wrap;
    }
`;

export const Product = styled.div`
    flex-basis: 100%;
    font-size: 1.2rem;
`;

export const ProductHeader = styled.header`
    text-align: center;
`;