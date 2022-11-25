import { useRef, useEffect } from "react";
import { Container } from "../Container/Container"
import "./footer.css";
import 'boxicons'
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { useState } from "react";

export const Footer = (props) => {
    const {onFooterHeightHandler} = useContext(ThemeContext)
    const footerRef = useRef(null);
    const [footerBackText, setFooterBackText] = useState('KNAPP');


    const onFooterbackTextHandler = () => {
        // if(footer)
    }
    useEffect(()=>{
        console.log(footerRef.current.offsetHeight)
        onFooterHeightHandler(footerRef.current.offsetHeight)
    },[footerRef])

    useEffect(()=>{
        console.log({footerBackText})
    },[footerBackText])


    return (
        <footer ref={footerRef}>
            <span id="footer-backtext">{footerBackText}</span>
            <Container>
                <div className="footer-inner">
                    <div className="footer-top">
                        <h2>KNAPP</h2>
                    </div>
                    <div className="footer-middle">
                        <ul className="footer-menu">
                            <li onMouseOver={()=>setFooterBackText('HOME')} onMouseLeave={()=>{setFooterBackText('KNAPP')}}>
                                <a href="#" >Home</a>
                            </li>
                            <li  onMouseOver={()=>setFooterBackText('ABOUT')} onMouseLeave={()=>{setFooterBackText('KNAPP')}}>
                                <a href="#">About</a>
                            </li>
                            <li  onMouseOver={()=>setFooterBackText('SERVICES')} onMouseLeave={()=>{setFooterBackText('KNAPP')}}>
                                <a href="#">Services</a>
                            </li>
                            <li  onMouseOver={()=>setFooterBackText('CONTACT')} onMouseLeave={()=>{setFooterBackText('KNAPP')}}>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                        <ul className="footer-socials">
                            <li>
                                <a href="">
                                <box-icon type='logo' name='facebook' color="white"></box-icon>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                <box-icon name='twitter' type='logo' color="white"></box-icon>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                <box-icon name='linkedin' type='logo'color="white" ></box-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <p className="copyright-text">©2022 dopamineads. All rights reserved</p>
                        <a href="#" className="powered-text">dopamine.</a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}