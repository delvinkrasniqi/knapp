import React, {
    useContext, useEffect, useRef, useState,
} from "react";
import ThemeContext from "../../context/themeContext";

import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import "./header.css";
import { HeaderService } from "../../services/HeaderService";

export const Header = () => {
    const { theme, setTheme, onMenuOpenHandler, menuOpen: menuOpenContext } = useContext(ThemeContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [fixedHeader, setFixedHeader] = useState(false);

    const [menuItems, setMenuItems] = useState([]);

    const changeTheme = (value) => {
        console.log(value);
        setTheme(value);
    }

    const getMenuItems = async () => {
        let items = await HeaderService.getMenuItems();
        if (items) {
            setMenuItems(items);
        }
    }

    useEffect(() => {
        getMenuItems();

        window.addEventListener("scroll", (e) => {

            if (window.scrollY > 200) {
                setFixedHeader(true);
            }
            else {
                setFixedHeader(false);
            }
        })
    }, [])

    return (
        <>
            <header className={`main-header ${fixedHeader ? 'main-header--fixed' : ''}`}>
                <Container>
                    <div className="header-inner">
                        <Link to="/">
                            <h2>KNAPP</h2>
                        </Link>

                        {/* <ul className={`menu-items ${menuOpen ? 'active' : ''}`}>
                        {menuItems && menuItems.map((item, index) => (
                            <Link key={index} to={`${item.url}`} className="text-uppercase">{item.title}</Link>
                        ))}

                    </ul> */}

                        <div className="menu-burger js-menu-burger" onClick={() => {
                            setMenuOpen(!menuOpen)
                            onMenuOpenHandler(!menuOpenContext)
                        }}></div>
                    </div>
                </Container>

            </header>

            <div className={`navigation-menu js-navigation-menu ${menuOpen ? 'is-active' : ''}`} >
                <div className="menu-wrapper">
                    <div className="menu-content">
                        <ul className="menu-content-large">
                            <li >
                                <a href="#" className={`${menuOpen ? 'show-item' : 'hide-item'}`} style={{ animationDelay: '.4s' }}>Home</a>
                            </li>
                            <li>
                                <a href="#" className={`${menuOpen ? 'show-item' : 'hide-item'}`} style={{ animationDelay: '1s' }}>About</a>
                            </li>
                            <li>
                                <a href="#" className={`${menuOpen ? 'show-item' : 'hide-item'}`} style={{ animationDelay: '1.2s' }}>Contact</a>
                            </li>
                        </ul>
                        <ul className="menu-content-small">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="menu_first-slide"></span>
                <span className="menu_second-slide"></span>
            </div>
        </>
    )
}