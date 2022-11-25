import React, {
    useContext, useRef, useState,useEffect
} from "react";
import "./preloader.css";

export const Preloader = () => {

    const [playAnimation, setPlayAnimation] = useState(false);

    useEffect(() => {
        const onPageLoad = () => {
            setPlayAnimation(true);
        };

   
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            return () => window.removeEventListener('load', onPageLoad);
        }
       
    }, []);


    return (
        <div className={`preloader-container ${!playAnimation ? 'show-preloader': ''}`}>
            <p>Loading</p>
        </div>
    )
}