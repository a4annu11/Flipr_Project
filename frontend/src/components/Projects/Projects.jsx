import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get("/api/projects");
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">Our Projects</h2>
        <div className="projects-slider">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              <img
                src={project.imageUrl}
                // src={bigImg}
                alt={project.name}
                className="project-image"
              />
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <button className="project-button">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
