import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setdata] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/shravanksubrahmanya')
    //         .then(response => response.json())
    //         .then(data => {
    //             setdata(data)
    //             console.log(data);
    //     })
    // }, [])

    const userData = useLoaderData()

  return (
    <div className="flex items-center p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto mt-10">
    {/* Avatar Section */}
    <div className="flex-shrink-0">
      <img
        src={userData.avatar_url} // Dynamic Avatar from API
        alt={`${userData.login}'s avatar`}
        className="w-24 h-24 rounded-full border-2 border-gray-300"
      />
    </div>

    {/* Information Section */}
    <div className="ml-6">
      <h3 className="text-lg font-semibold text-gray-800">{userData.name || 'Unknown User'}</h3>
      <p className="text-sm text-gray-600">{userData.bio || 'No Bio Available'}</p>
      <div className="mt-4 flex space-x-3">
        <a
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
        >
          View Profile
        </a>
        <button
          onClick={() => alert('Message Feature Coming Soon!')}
          className="px-6 py-2 border border-blue-500 text-blue-500 font-medium rounded-md hover:bg-blue-50"
        >
          Message
        </button>
      </div>
    </div>
  </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shravanksubrahmanya')
    return response.json()
}