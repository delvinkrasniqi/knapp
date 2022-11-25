import { createContext, useState } from "react";

const ThemeContext = createContext(null);


export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState('light');
    const [footerHeight, setFooterHeight] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const [showPreloader, setShowPreloader] = useState(false);

    const onFooterHeightHandler = (val) => {
        setFooterHeight(val)
    }
    const onShowPreloaderHandler = () => {
        setShowPreloader(true);
    }

    const onMenuOpenHandler = (value) => {
        setMenuOpen(value);
    }

    let params = {
        theme,
        setTheme,
        footerHeight,
        onFooterHeightHandler,
        showPreloader,
        onShowPreloaderHandler,
        menuOpen,
        onMenuOpenHandler
    }
    return (
        <ThemeContext.Provider value={params}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
