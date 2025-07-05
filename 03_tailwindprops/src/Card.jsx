import React from 'react'

function Card({username = "Guest"}) {
    console.log(username);
    
  return (
    <>
    <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://imgs.search.brave.com/txDBETqV2WQbjP8eXPW48mZiNmtn_Ox261WN_EtGhNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJlZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9jb2xsZWN0/aW9ucy9tZWRpdW0v/MTAwMC9FdmVyZ3Jl/ZW4tVHJlZXMud2Vi/cA" />
  </div>
  <div className="flex items-center">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
  </>
  )
}

export default Card