import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Jost', sans-serif;
        font-style: normal;
        font-weight: 400;
        box-sizing: border-box;
    }
    
    button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #5dadec;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: 100%;
        padding: 12px;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
        color: black;
    }
    input {
        font-size: 20px;
        width: 100%;
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        &[type=text]:focus, &[type=datetime-local]:focus {
            border: 2px solid #afd9fb;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: black;
        text-decoration: none;
    }
`

export default GlobalStyle