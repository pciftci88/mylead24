import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface ListElementProps {
    icon?: any
}

interface SubListProps {
    isOpen?: boolean
}

const colorWhite = '#fff';

export const Icon = styled(FontAwesomeIcon)`
    min-width: 2em;
`;

export const Wrapper = styled.section`
    display: flex;
    background-color: #954646;
    color: #fff;
    padding: 2em 0;
    width: 100%;

    @media (max-width: 1020px) {
        flex-wrap: wrap;
    }
`;

export const Product = styled.div`
    flex-basis: 100%;
    font-size: 1.2rem;
    margin: 0 2em;

    @media (max-width: 1020px) {
        margin: 0 1em;
    }
`;

export const ProductHeader = styled.h2`
    text-transform: uppercase;
    margin: 0 .8em;
    padding: .8em 0;
    border-bottom: 2px solid;

    @media (max-width: 1020px) {
        text-align: center;
    }
`;

export const List = styled.ul`
    margin: 0 1.5em;
`;

export const ListElement = styled.li<ListElementProps>`
    margin: 1em auto;
    cursor: pointer;
    
    &:hover {
        font-weight: 700;
    }
`;

export const ListLink = styled(Link)`
    color: ${colorWhite};
`;

export const ALink = styled.a`
    color: ${colorWhite};
`;

export const SubList = styled.ul<SubListProps>`
    display: ${props => props.isOpen ? 'inline-block' : 'none'};
`;

export const SubListElement = styled.li`
    font-weight: 400;
    margin: .5em 0 0 2em;

    &:hover {
        font-weight: 700;
    }
`;