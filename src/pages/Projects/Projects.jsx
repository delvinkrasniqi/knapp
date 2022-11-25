import { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import { ProjectService } from "../../services/ProjectService";
export const Projects = () => {

    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        let response = await ProjectService.getAll({});
        console.log(response);
        setProjects(response);
    }

    useEffect(() => {
        getProjects();
    }, [])
    return (
        <Container>
            {projects && projects.map(el => (

                <>
                    <p>{el.title.rendered}</p>
                    <p>{el.content.rendered}</p>
                </>
            ))}
        </Container>
    )
}