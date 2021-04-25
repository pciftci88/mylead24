import styled from 'styled-components';

interface ProductProps {
    withBackground?: boolean,
    bgImage?: any
}

export const Content = styled.div`
    margin: 0 auto;
`;

export const Product = styled.div<ProductProps>`
    text-align: center;
    background: url(${props => props.withBackground && props.bgImage});
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
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    min-height: 30em;
    max-width: 120em;

    @media (max-width: 1020px) {
        padding: 2em 0;
    }
`;

export const Widget = styled.div`
    flex: 1 1 20em;
    margin: 0 1.5em;

    @media (max-width: 1020px) {
        flex-basis: 100%;
        
        &:first-child {
            margin: 0;
        }

        &:not(:first-child) {
            margin: 2em 0 0;
        }
    };
`;

export const TravelWidget = styled.div`
    width: 100%;
`;