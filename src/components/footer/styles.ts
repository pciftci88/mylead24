import styled from 'styled-components/macro';

export const Wrapper = styled.footer`
    max-width: 128em;
    margin: auto 1em 0;
    text-align: center;
    font-size: 1rem;
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

export const Hint = styled.p`
    font-size: 1rem;
`;