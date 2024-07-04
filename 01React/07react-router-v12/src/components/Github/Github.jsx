import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ankitnarang-ai')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    //         .catch(err => console.log("Api Failed for github", err))
    // }, [])
    return (
        <>
            <div className='text-3xl font-bold  text-center bg-gray-600 text-white p-4'>Github Profile</div>
            <div className='flex flex-row items-center bg-gray-600 p-4'>
                <div>
                    <img width={300} src={data.avatar_url} alt="profile" />
                </div>
                <div className='text-3xl font-bold text-white p-4'>My Followers: {data.followers}</div>
            </div>
        </>
    )
}

export default Github

export const githubInfo = async () =>{
    const response = await fetch('https://api.github.com/users/ankitnarang-ai')
    const data = await response.json()
    return data
}
