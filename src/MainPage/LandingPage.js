import React from "react";
import {
    LandingPageContainer,
    Footer,
    Header,
    Main,
    Title,
    FooterText,
    Menu,
    AccIcon,
    MenuItems,
    MenuButton,
    LogoDiv
} from "./LandingPageStyles";
import Player from "../Player";
import SearchBar from "../Components/SearchBar"; // Импортируем компонент поиска
import '../Fonts/Monoton-Regular.ttf';
import LogoPic from "../Assets/AccLogo.svg";

const LandingPage = () => {
    return (
        <LandingPageContainer>
            <Header>
                <Title>VinylSound</Title>
                <Menu>
                    <MenuItems>
                        <MenuButton>Home</MenuButton> {/* Кнопка Главная */}
                        <SearchBar /> {/* Компонент поиска с подсказками */}
                        <MenuButton>Add</MenuButton>
                        <MenuButton>Sign Up</MenuButton>
                    </MenuItems>
                    <LogoDiv>
                        <AccIcon src={LogoPic}/>
                    </LogoDiv>
                </Menu>
            </Header>
            <Main>
                <Player />
            </Main>
            <Footer>
                <FooterText>© 2024 Music player "VinylSound"</FooterText>
            </Footer>
        </LandingPageContainer>
    );
};

export default LandingPage;
