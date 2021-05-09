import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const LinkWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ProductLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 30em;
    text-decoration: none;
    margin: 1em;
    border: 2px solid #ddd;
    padding: 4em;
    min-width: 25em;
    border-radius: 0.4em;
    transition: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0.6, 0.33, 1.54);
    color: #333;
    font-weight: 700;
    background-color: #f4f4f4;

    &:hover {
       transform: scale(1.05);
       background-color: #666;
       border: 2px solid transparent;
       color: #fff;
    }

    @media (max-width: 1020px) {
        padding: 2em;
    }
`;

export const LinkText = styled.span`
    margin-top: 2em;
    font-size: 1.4rem;
`;

export const StickyHeader = css`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
`;

export const Content = styled.section`
    width: 100%;
    max-width: 102em;
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: .5rem;
    min-height: 30em;

    @media(max-width: 1020px) {
        min-height: 20em;
    }
`;