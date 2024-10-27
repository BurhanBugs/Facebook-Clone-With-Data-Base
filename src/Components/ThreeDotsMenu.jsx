import React, { useState } from 'react';

const ThreeDotsMenu = ({post}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handledelete = (id) => {
    console.log('handledelete per click hoya hai ',id)
  }
  

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="flex items-center p-2 rounded-full hover:bg-gray-200 focus:outline-none"
      >
        <span className="w-1 h-1 bg-gray-600 rounded-full mx-0.5"></span>
        <span className="w-1 h-1 bg-gray-600 rounded-full mx-0.5"></span>
        <span className="w-1 h-1 bg-gray-600 rounded-full mx-0.5"></span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
          <ul className="py-1">
            <li onClick={()=>handledelete(post.id)} className="px-4 py-2 text-gray-700 cursor-pointer font-semibold hover:text-blue-400 transition-all duration-300 hover:bg-gray-100">Delete Post</li>
            <li className="px-4 py-2 text-gray-700 cursor-pointer font-semibold hover:text-blue-400 transition-all duration-300 hover:bg-gray-100">Edit Post</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThreeDotsMenu;
