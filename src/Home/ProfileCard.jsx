import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GitHubCalendar from "react-github-calendar";
import "./ProfileCard.css";

const ProfileCard = () => {
    const { profile, error } = useSelector((state) => state.github);

    console.log(profile)

    const navigate = useNavigate();

    if (!profile) return null;

    const handleViewProjects = () => {
        navigate(`/${profile.login}/projects`);
    }

    return (
        <div className="profileCard">
            {/* Muestra la información del perfil */}
            <div className='profileContainer'>
                <div className='profileImageName'>
                    <img className='profileImage' src={profile.avatar_url} alt={profile.name} />
                    <h2 className='profileName'>{profile.name || "No Name Provided"}</h2>
                </div>
                <div className='profileDetails'>
                    <p className='profileUser'>Username: {profile.login}</p>
                    <p className='profileBio'>{profile.bio || "No bio available"}</p>
                    <div className='profileLinks'> 
                        <a className='profileURL' href={profile.html_url} target="_blank" rel="noopener noreferrer">
                            Ver Perfil
                        </a>
                        <button className='btn-secondary' onClick={handleViewProjects}>
                            Ver Proyectos
                        </button>
                    </div>
                </div>
            </div>

            {/* Muestra el calendario de actividad de GitHub */}
            <div className='githubProfileStats'>
                <GitHubCalendar
                    username={profile.login}
                    blockSize={15}
                    blockMargin={5}
                    color="#c084f5"
                    fontSize={16}
                />
            </div>

            {/* Muestra un mensaje de error si no se encuentran repositorios */}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default ProfileCard;
