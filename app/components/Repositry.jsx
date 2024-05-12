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
        <div className='flex flex-col justify-center items-center w-[90%]'>
            <h2>Repositories for <span className='text-blue-500 uppercase'>{username} </span>:</h2>
            {loading && <p>Loading...</p>}
            
                <div className='flex flex-wrap justify-center items-center'>
                {repos.map(repo => (
                    <div  key={repo.id} className='w-[45%]'>
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
            <div className='flex gap-2' style={{marginLeft:"-2%"}}>
            <button className="w-[8rem] bg-gray-200 text-black p-3  rounded-full" onClick={prevPage} disabled={currentPage === 1}>{"<-  "}Older</button>
            <button className="w-[8rem] bg-blue-700 text-white p-3  rounded-full" onClick={nextPage}>Newer{ "  ->"}</button>

            </div>
        </div>
    )
}

export default Repositry