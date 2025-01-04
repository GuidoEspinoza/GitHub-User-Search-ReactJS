import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchGithubProfile } from '../slices/githubSlice';
import SearchBar from './SearchBar';
import ProfileCard from './ProfileCard';

const Home = () => {

    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const { profile, error } = useSelector((state) => state.github);

    const fetchProfile = (event) => {
        event.preventDefault();
        dispatch(fetchGithubProfile(username));
    };
    return (
        <div>
            <h1>Buscador de perfiles GitHub</h1>
            <SearchBar username={username} setUsername={setUsername} fetchProfile={fetchProfile} />
            {error && <p className="error">{error}</p>}
            <ProfileCard />
        </div>
    )
}

export default Home