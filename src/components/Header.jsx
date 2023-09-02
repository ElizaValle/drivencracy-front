import styled from "styled-components";
import { Link } from 'react-router-dom';
import logoDrivencracy from "../assets/drivencracy-logo.svg";

export default function Header() {
    return <HeaderContainer>
        <Link to="/">
            <img src={logoDrivencracy} alt="Logo drivencracy" />
            <h1>DrivenCracy</h1>
        </Link>
    </HeaderContainer>
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 15px;
    font-size: 26px;
    color: black;
  
    img{
        transform: rotate(-8deg);
        width: 50px;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`;