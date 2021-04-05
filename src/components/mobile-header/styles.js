import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    background-color: #16366F;
    height: 60px;
`;

export const Menu = styled.div`
    display: ${props => (props.isVisible ? 'block' : 'none')};
`;

export const Navbar = styled.div`
    display: flex;
    flex-direction: column;  
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    box-shadow: 0 0 50px 800px rgb(0 0 0 / 55%);
    width: 15rem;
    z-index: 2;
`;

export const LinkList = styled.nav`
    display: flex;
    flex-direction: column;
`;

export const LinkListHeader = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-around;
`;

export const MenuLink = styled(Link)`
    padding: 13px 24px;
    text-decoration: none;
    color: #696969;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
        background-color: #f5f5f5;
        color: #333;
    }
`;

export const MenuIcon = styled.img`
    max-width: 35px;
    max-height: 35px;
    margin: 10px;

    &:hover {
        cursor: pointer;
    }
`;

export const CloseIcon = styled.img`
    max-width: 20px;
    max-height: 20px;

    &:hover {
        cursor: pointer;
    }
`;

export const Logo = styled.img`
    max-width: 150px;
`;
