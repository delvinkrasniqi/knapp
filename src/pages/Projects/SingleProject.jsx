import React from 'react'
import { useEffect, } from 'react';
import { Container } from "../../components/Container/Container";
import { useParams } from "react-router-dom";
import { ProjectService } from '../../services/ProjectService';
import { useState } from 'react';
import "./single.css";

function SingleProject() {
  const { id } = useParams()
  const [project, setProject] = useState({});

  const getSingleProject = async () => {
    console.log(id)
    let response = await ProjectService.getSingleProject(id);
    console.log(response);
    if (response) {
      if (response.services && response.services.length > 0) {
        response.project_category = await ProjectService.getProjectCategory(response.services[0]);
      }
      setProject(response)

    }
  }

  useEffect(() => {
    getSingleProject();
  }, [])

  return (
    <section className="project-wrapper">
      <Container fluid>
        <div className="project-inner">


          <div className={`project-gallery`}>
            {project?.acf?.gallery.map((el, index) => (

              <div key={index} to={`/project/${el.id}`} className="project-item">
                <img src={el.url ? el.url : {}} alt="" />
              </div>

            ))}
          </div>
          <div className="project-content">
            <div className="project-images">
              {project?.acf?.images_row.map((el, index) => (
                <div key={index} className="row">
                  {el.images.map((img, idx) => (
                    <div className="img">
                      <img key={idx} src={img.image ? img.image : {}} alt="" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="details-sticky">
              <div className="details-wrapper">
                <div className="project-meta">
                  <span className="date">August 2022</span> | <span className='project-category'>{project?.project_category?.name}</span>
                </div>
                <h2 className='project-title'>{project?.title?.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: project?.content?.rendered }} className="project-description"></div>
                <span className="divider"></span>
                <div className="project-info">
                  {project?.acf?.project_legend.map(el => (
                    <div className="column">
                      <div className="info-title">
                        {el.info_title}
                      </div>
                      <div className="info-value">
                        {el.info_value}
                      </div>
                    </div>
                  ))}



                </div>
              </div>
            </div>
          </div>


        </div>
      </Container>

    </section>
  )
}

export default SingleProject