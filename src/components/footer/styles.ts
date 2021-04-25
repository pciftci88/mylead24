import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 128em;
    margin: 0 auto;
    text-align: center;
`;

export const Copyright = styled.div`
    margin: 2em auto;
`;

export const FooterLinkList = styled.ul`
    margin: 2em auto;

    @media (max-width: 1020px) {
        padding: 0;
    }
`;

export const FooterLink = styled.li`
    display: inline-block;
    list-style: none;
    padding: 0 1em;
`;