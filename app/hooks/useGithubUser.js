// useGitHubUser.js

import { useState, useEffect } from 'react';

const useGitHubUser = (username) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    console.error('Failed to fetch user details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
            setLoading(false);
        };

        if (username) {
            fetchUser();
        }

        // Cleanup function to cancel the fetch if the component unmounts or the username changes
        return () => {
            setUser(null);
        };
    }, [username]);

    return { user, loading };
};

export default useGitHubUser;
