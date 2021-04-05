import styled from 'styled-components';

export const Content = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

export const Product = styled.div`
    background-color: #16366F;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
`;

export const ProductTitle = styled.h2`
    padding: 15px 0;
    margin: 0;
    font-size: 1.3rem;

    @media (max-width: 1020px) {
        padding: 10px 0;
        font-size: 1.1rem;
    }
`;