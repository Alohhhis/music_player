import styled, { keyframes } from "styled-components";
import AccLogo from "../Assets/AccLogo.svg";

export const LandingPageContainer = styled.div`
    background-image: linear-gradient(145deg, #51138A, #0B044F);
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 100vh;
    scroll-behavior: smooth;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    padding: 0;
`;

export const Header = styled.header`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //width: 100%;
    grid-column: 1/4;
    grid-row: 1/2;
    background: transparent;
    z-index: 10;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Title = styled.h1`
    font-size: 60px;
    color: white;
    animation: ${fadeIn} 1.5s ease-out;
    margin: 0;
    font-family: "monoton-regular", sans-serif;
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1/4;
    grid-row: 2/3;
`;

export const Footer = styled.footer`
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    grid-column: 1/4;
    text-align: center;
`;

export const FooterText = styled.p`
    color: white;
    font-size: 14px;
    margin: 0;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px; /* Отступы между кнопками */
`;

export const MenuItems = styled.div`
    display: flex;
    align-items: center;
    gap: 20px; /* Отступы между кнопками */
`;

export const MenuButton = styled.button`
    background-color: transparent;
    color: white;
    font-size: 18px;
    padding: 10px 20px;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: white;
        color: #51138A;
        transform: scale(1.05);
    }
`;

export const AccIcon = styled.img`
    width: 40px;
    height: 40px;
    //background-color: white;
    border-radius: 50%;
    cursor: pointer;
`;

export const LogoDiv = styled.div`
    cursor: pointer;
    transition: transform 0.35s ease;

    &:hover {
        transform: rotate(360deg);
    }
`;
