"use client"

import React from 'react'
import useGitHubUser from '../hooks/useGithubUser';


const Profile = ({ username }) => {
    const { user, loading } = useGitHubUser(username);
    return (
        <div className=' w-[40rem] h-[15rem] border-double border-4 p-2'>

            {loading && <p>Loading user details...</p>}
            {user && (
                <div className="flex row">
                    <img className=" h-[12rem] w-[12rem] rounded-full border-double border-4 border-sky-500" src={user.avatar_url} alt={`${user.login}'s profile`} />
                    <div className=' p-9'>

                        <p className=' text-xl'>{user.name}</p>
                        <p>Username: {user.login}</p>
                        <p>Bio: {user.bio}</p>
                        <p>Followers: {user.followers}</p>
                        <p>Following: {user.following}</p>
                        {/* Add more user details as needed */}
                    </div>
                </div>
            )}
        </div>
    );

}

export default Profile