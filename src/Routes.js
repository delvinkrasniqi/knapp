import { Route, Routes } from "react-router-dom";
import { Projects } from "./pages/Projects/Projects";
import { Home } from "./pages/Home/Home";

const RoutesWrapp = () => {
    return (
        
        <>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
        </>
        
    )
}

