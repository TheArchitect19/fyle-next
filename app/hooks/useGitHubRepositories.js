// useGitHubRepositories.js

import { useState, useEffect } from 'react';

const useGitHubRepositories = (username, page = 1, perPage = 6) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRepositories = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setRepos(data);
                } else {
                    console.error('Failed to fetch repositories:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
            setLoading(false);
        };

        if (username) {
            fetchRepositories();
        }

        // Cleanup function to cancel the fetch if the component unmounts or the username changes
        return () => {
            setRepos([]);
        };
    }, [username, page, perPage]);

    return { repos, loading };
};

export default useGitHubRepositories;
