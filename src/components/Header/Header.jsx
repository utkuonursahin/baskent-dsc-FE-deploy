import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileMenuIcon from "../MobileMenu/MobileMenuIcon/MobileMenuIcon";
import Navigation from "./Navigation/Navigation";
const Header = ({elementRef}) => {
  const [isClicked, setIsClicked] = useState(false);
    return (
        <header className="header" ref={elementRef}>
          <Link href="/"><Image width="150" height="75" src="/logo-white.svg" alt="DSC logo"/></Link>
          <MobileMenu isClicked={isClicked} setIsClicked={setIsClicked}/>
          <MobileMenuIcon isClicked={isClicked} setIsClicked={setIsClicked}/>
          <Navigation/>
        </header>);
}

export default Header;