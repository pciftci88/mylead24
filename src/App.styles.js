import styled from 'styled-components/macro';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Title = styled.h1`
    text-align: center;
    color: #666;
    border: 4px solid;
    border-radius: 5px;
    padding: .3em;
    background: #fff;
    min-width: 7em;
    max-width: 15em;
    margin: .5em auto;

    @media (max-width: 60em) {
        border: 3px solid;
    }
`;

export const Content = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 9em auto 2em auto;
    width: 100%;
`;

export const SuspenseLoader = styled(Loader)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;