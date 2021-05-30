import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { StickyHeader } from '../../global/pageStyles';

export const Wrapper = styled.header`
    background-color: #16366F;
    ${StickyHeader};
`;

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 1em 2em;
`;

export const Menu = styled.nav`
    display: flex;
`;

export const MenuList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0px;
    list-style-type: none;
    align-items: center;
`;

export const MenuItems = styled.li`
    padding: 0 10px;
    font-size: 1rem;

    &:last-child {
        padding-right: 0;
    }
`;

export const MenuLink = styled(Link)`
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    user-select: none;
    position: relative;
    letter-spacing: 3px;
    text-transform: uppercase;
    transition: all 0.5s cubic-bezier(.68, -0.55, .27, 1.55);
    transition: color 0.3s;
    padding: 10px 0;
     
    &:before{
        transition: all 0.6s cubic-bezier(.68, -0.55, .27, 1.55);
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #ffffff;       
        transform: scaleX(0);
    }
    
    &:hover{
        color: #fff;
        &:before { 
          transform: scaleX(1);
        }
    }
`;

export const Logo = styled.img`
    max-width: 150px;
`;

