import styled from 'styled-components';

interface ProductProps {
    bgImage?: any
}

export const Product = styled.section<ProductProps>`
    text-align: center;
    background: url(${props => props.bgImage && props.bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;

export const ProductTitle = styled.h2`
    background-color: #ffa500;
    padding: 15px 0;
    margin: 0;
    font-size: 1.3rem;
    color: #fff;

    @media (max-width: 1020px) {
        padding: 10px 0;
        font-size: 1.1rem;
    }
`;

export const WidgetContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    min-height: 40em;
    max-width: 120em;

    @media (max-width: 1020px) {
        padding: 2em 0;
    }
`;

export const Widget = styled.div`
    flex: 1 1 20em;
    margin: 2em;
    max-width: 400px;

    @media (max-width: 1020px) {
        flex-basis: 100%;
    };
`;

export const TravelWidget = styled.div`
    width: 100%;
`;