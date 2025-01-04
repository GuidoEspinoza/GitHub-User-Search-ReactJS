import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const githubSlice = createSlice({
    name: "github",
    initialState: {
        profile: null,
        repos: [],
        error: "",
    },
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        setRepos: (state, action) => {
            state.repos = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearData: (state) => {
            state.profile = null;
            state.repos = [];
            state.error = "";
        },
    },
})

export const { setProfile, setRepos, setError, clearData } = githubSlice.actions;

export const fetchGithubProfile = (username) => async (dispatch) => {
    try {
        const { data:profile } = await axios.get(`https://api.github.com/users/${username}`)
        dispatch(setProfile(profile));

        const { data:repos } = await axios.get(profile.repos_url);
        dispatch(setRepos(repos));

        dispatch(setError(""));
    } catch (error) {
        dispatch(setProfile(null));
        dispatch(setRepos([]));
        dispatch(setError("User not found. Please try again."));
    }
}

export default githubSlice.reducer;