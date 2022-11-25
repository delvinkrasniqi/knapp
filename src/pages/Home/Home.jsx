import { useState } from "react";
import { useEffect } from "react";
import { Container } from "../../components/Container/Container"
import { HomeService } from "../../services/HomeService";
import { Link } from "react-router-dom";
import "./home.css";

import { motion } from "framer-motion"

export const Home = () => {

    const [homeData, sethomeData] = useState({});
    const [projects, setProjects] = useState([]);

    const getHomeData = async () => {
        let data = await HomeService.getAllData();
        console.log(data);

        if (data) {
            sethomeData(data);
        }
    }

    const getProjects = async () => {
        let response = await HomeService.getAllProjects();
        console.log(response);
        let projectsChunk = [];
        const chunkSize = 5;
        if (response) {
            if (response.length >= 5) {
                for (let i = 0; i < response.length; i += chunkSize) {
                    const chunk = response.slice(i, i + chunkSize);
                    // do whatever
                    projectsChunk.push(chunk);
                }
                setProjects(projectsChunk);
            }
            else {
                setProjects(response);
            }
        }


    }
    useEffect(() => {
        getHomeData();
        getProjects();
    }, [])

    useEffect(() => {
        console.log(homeData)
    }, [homeData])

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    return (
        <section className="home-wrapper">
            <Container>
                <div className="intro" id="agency">
                    <div className="grid">
                        <div className="column">
                            <motion.span animate={{ opacity: 1 }} initial={{opacity: 0 }} transition={{ delay: 0.5 }} className="small-heading text-uppercase">{homeData && homeData?.acf?.subtitle}</motion.span>
                            <motion.h2  animate={{ opacity: 1 }} initial={{opacity: 0 }} transition={{ delay: 1 }} className="title merriweather" dangerouslySetInnerHTML={ {__html: homeData?.acf?.title} }></motion.h2>
                        </div>
                        <div className="column">
                            <motion.p animate={{ opacity: 1 }} initial={{opacity: 0 }} transition={{ delay: 1.5 }}>{homeData && homeData?.acf?.foreword}</motion.p>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="story" style={{backgroundImage: `url(${homeData?.acf?.video})`}}>

            </div>
            <div className="services" id="services">
                <Container>
                    <div className="grid">
                        <div className="column">
                            <span className="small-heading text-uppercase">{homeData && homeData?.acf?.services_subtitle}</span>
                            <h2 className="title merriweather">{homeData && homeData?.acf?.services_title}</h2>
                        </div>
                        <div className="column">
                            <p>{homeData && homeData?.acf?.services_foreword}</p>
                        </div>
                    </div>
                    <ul className="services-list">
                        {homeData && homeData?.acf?.services_list && homeData?.acf?.services_list.map((item, index) => (
                            <li key={`${index}`}><p className="text-uppercase">{item.service}</p></li>
                        ))}

                    </ul>
                </Container>
            </div>
            <div className="projects" id="projects">
                {projects && projects.map((group, index) => (
                    <div key={index} className={`projects-row ${index % 2 == 0 ? 'projects-row--even' : 'projects-row--odd'}`}>
                        {group.map((el, index) => (
                            
                                <Link key={index} to={`/project/${el.id}`} className="project-item" style={el.featured_img_src ? { backgroundImage: `url(${el.featured_img_src})` } : {}}>
                                    <div className="inner-content">
                                        <div className="project-info">
                                            <span className="project-type small-heading text-uppercase">{el.terms ? el.terms[0].name : ''}</span>
                                            <h3 className="project-title merriweather">{el.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                          
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}