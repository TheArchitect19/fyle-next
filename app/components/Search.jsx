"use client"

import { useState } from 'react';
import './styles.css';
import Repositry from './Repositry';
import Profile from './Profile';

const Search = () => {
    const [profile, setProfile] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setSubmitted(false);
        setProfile(e.target.value);
        e.preventDefault();
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className=' flex w-1/3 mt-4 items-center justify-center border-slate-950 gap-2 mb-2'>
                <input
                    type="text"
                    className="w-[40rem] h-[3rem] rounded-full p-2 outline-none border-2 "
                    placeholder="Search User..."
                    value={profile}
                    onChange={handleChange}
                />
                <button className='bg-blue-700 text-white p-2 rounded-3xl' onClick={handleSubmit}>Submit</button>
                {/* <span className="left-pan"><i className="fa fa-microphone"></i></span> */}                
            </div>
            {submitted && <Profile username={profile} />}
            {submitted && <Repositry username={profile} />}
        </div>
    );
};

export default Search;
