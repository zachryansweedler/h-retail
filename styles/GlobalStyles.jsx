import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0;
    }

    *:focus {
        outline: none;
    }

    body {
        font-family: 'Poppins', sans-serif !important;
        line-height: 1;
        padding: 0;
        margin: 0;   
        background-color: white;
        color: black;
    } 

    button {
        border: none;
        background-color: black;
        color: white;
        padding: 10px 15px;
        border-radius: 100px;
        cursor: pointer;
        &:hover {
            transform: scale(1.05);
            transition: transform 0.5s ease-in;
        }
        &:not(:hover) {
            transform: scale(1);
            transition: transform 0.2s ease-out;
        }
    }
    
    p {
        line-height: 1.72;
        font-size: 14px;
    }

    a {
        outline: none;
        text-decoration: none;
        color: black;
    }
`;
