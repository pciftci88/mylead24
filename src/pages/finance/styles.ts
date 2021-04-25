import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const LinkWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin: 2em auto;
    border: 2px solid #ddd;
    padding: 4em;
    flex: 1;
    width: 65%;
    min-width: 25em;
    border-radius: 0.4em;
    transition: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0.6, 0.33, 1.54);
    color: #333;
    font-weight: 700;
    background-color: #f4f4f4;

    &:hover {
       transform: scale(1.1);
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
    font-size: 1.4em;
`;