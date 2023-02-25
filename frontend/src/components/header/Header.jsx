import React from "react";
import {ReactNavbar} from "overlay-navbar";
import logo from "../../images/logo.png";
import {FaUserAlt} from "react-icons/fa";

const Header = () => {
  return <ReactNavbar hs
  navColor1 = "hsl(45, 86%, 62%)"
  navColor2 = "hsl(195, 100%, 50%)"
  burgerColor = "hsl(360, 100%, 50%)"
  burgerColorHover = "hsl(360, 100%, 100%)"
  logo = {logo}
  logoWidth = "250px"
  logoHoverCover = "hsl(360, 100%, 100%)"
  nav2justifyContent = "space-around"
  nav3justifyContent = "space-around"
  link1Text = "Home"
  link2Text = "About"
  link3Text = "Projects"
  link4Text = "Contact"
  link1Url = "/"
  link2Url = "/about"
  link3Url = "/projects"
  link4Url = "/contact"
  link1ColorHover = "orange"
  link1Color = "black"
  link1Size = "2rem"
  link1Padding = "3vmax"
  profileIcon = {true}
  ProfileIconElement = {FaUserAlt}
  profileIconColor = "black"
  profileIconColorHover = "orange"
  />;
};

export default Header;