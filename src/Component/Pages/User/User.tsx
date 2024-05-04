import React, { useState } from 'react'

function User() {
  let data: string;
  let listData: any[] = [];
  const [showData, setShowData] = useState();

  const getData = async () => {
    const response = await fetch("https://api.github.com/users/defunkt");
    const data = await response.json();
    // listData = JSON.stringify(data);
    // setShowData(listData);
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {Array(18).fill(null).map((_:any, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={`https://s-media-cache-ak0.pinimg.com/originals/ca/e4/cb/cae4cb6fb1b862d151f69a1569910f2e.png`} alt={`Image ${index + 1}`} className="w-full h-48 object-cover rounded-t-md"/>
            <h5 className="text-lg font-bold mt-4">User {index + 1} Title</h5>
            <p className="text-gray-600">User {index + 1} description</p>
            <a href="#" className="text-blue-600 hover:text-blue-900 block mt-4">Learn More</a>
          </div>
        ))}
      </div>
    </>
  )
}
export default User;