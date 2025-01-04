import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import "./Projects.css"; 

const Projects = () => {
    const { profile } = useSelector((state) => state.github);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/users/${profile.login}/repos`);
                setRepos(data);
                setError("");
            } catch (err) {
                setError("No se pudieron obtener los repositorios. Intenta de nuevo.");
            }
        };

        fetchRepos();
    }, [profile.login]);

    return (
        <div className="projects">
            <div className='projectsHeader'>
                <h2>Proyectos de <br /> {profile.name}</h2>
                <button className='btn-primary'>
                    <a href="/">Volver al buscador</a>
                </button>
            </div>
            {error && <p className="error">{error}</p>}
            {/* {repos && (
                <ul className="projectsList">
                    {repos.map((repo) => (
                        <li key={repo.id} className="projectsItem">
                            <p>{repo.name}</p>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                Ver Proyecto
                            </a>
                        </li>
                    ))}
                </ul>
            )} */}
            <h3>Página en desarrollo</h3>
        </div>
    );
};

export default Projects;
