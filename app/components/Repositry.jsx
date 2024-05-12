"use client"

import { useState, useEffect } from 'react'
import useGitHubRepositories from '../hooks/useGitHubRepositories';
import Link from 'next/link';

const Repositry = ({ username }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { repos, loading } = useGitHubRepositories(username, currentPage);
    console.log(repos);
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <h2>Repositories for <span className='text-blue-500 uppercase'>{username} </span>:</h2>
            {loading && <p>Loading...</p>}
            
                <div className='flex flex-wrap'>
                {repos.map(repo => (
                    <div  key={repo.id} className='w-1/2'>
                        <div  className='w-[35rem] h-[10rem] border-solid border-2 border-black m-2 p-2'>
                            <Link href={repo.html_url} className=' text-blue-500 uppercase font-extrabold'>{repo.name}</Link>
                            <p>Description: </p>
                            {repo.description===null ?
                                <div className=''>No Description</div> :

                                <div>{repo?.description}</div>
                            }
                         </div>
                    </div>
                        
                    // </div>
                    // <div key={repo.id} className='w-[20rem] h-[10rem] border-solid border-2 border-black m-2'>
                        
                ))}
                </div>
            
            <button className="bg-blue-700 text-white p-3 ml-2 rounded-full" onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
            <button className="bg-blue-700 text-white p-3 ml-2 rounded-full" onClick={nextPage}>Next Page</button>
        </div>
    )
}

export default Repositry