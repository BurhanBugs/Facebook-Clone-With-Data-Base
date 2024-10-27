
import { useState } from 'react';
import * as React from 'react';
import FileUpload from './FileUpload';

const CreatePost = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };


    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="relative">
                <div onClick={handleOpenModal} className="createpost  cursor-pointer mx-auto w-[100%] lg:w-[80%]">
                    <div className="createPostCard p-3 shadow-sm border-slate-300 border rounded-lg w-full h-36 bg-white">
                        <div className="whatsmind w-full h-1/2 items-center justify-center flex">
                            <div className="ProfilePic">
                                <img className='w-10 h-10 rounded-full object-cover' src="src\assets\icons8-male-user-48.png" alt="Profile Pic" />
                            </div>
                            <div className="whatmindinput w-[90%] ">
                                <input className='  placeholder:text-slate-700 h-10  focus:outline-none border rounded-full p-3  w-full bg-slate-200' type="text" placeholder="what on your mind," />
                            </div>
                        </div>
                        <hr className='mt-3 mx-auto w-[90%]  bg-slate-200' />
                        <div className="videosicons hidden md:flex items-center justify-around w-full">
                            <div className="icons hover:bg-slate-200 cursor-pointer rounded-lg m-2 p-1 gap-2 font-semibold text-slate-500 w-[33%] flex justify-center items-center">
                                <img className='w-9 cursor-pointer' src="src\assets\video.png" alt="" />
                                <span>Live Video</span>
                            </div>
                            <div className="icons hover:bg-slate-200 cursor-pointer rounded-lg m-2 gap-2 p-1 font-semibold text-slate-500 w-[33%] flex justify-center items-center">
                                <img className='w-9 cursor-pointer' src="src\assets\image-gallery.png" alt="" />
                                <span>Photo/Video</span>
                            </div>
                            <div className="icons hover:bg-slate-200 cursor-pointer rounded-lg m-2 gap-2 p-1 font-semibold text-slate-500 w-[33%] flex justify-center items-center">
                                <img className='w-9 cursor-pointer' src="src\assets\blink.png" alt="" />
                                <span>Feelings/activiy</span>
                            </div>

                        </div>
                        <div className="ClickToCreatePost md:hidden">
                            <button className='w-full h-10 font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded-full transition-all duration-300'>Create Post</button>
                        </div>
                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 w-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white scrollbar scrollbar-thin scrollbar-hidden overflow-y-scroll rounded-lg p-6 w-96 h-96 relative shadow-lg animate-fadeIn">

                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                                onClick={handleCloseModal}>
                                X
                            </button>

                            <div className="heading text-center">
                                <h1 className='font-bold text-xl'>Create Post</h1>
                            </div>

                            <hr className='mt-3 mx-auto w-[100%] h-[2px]  bg-slate-200' />

                            <div className="title mt-6">
                                <div className="fileinput">
                                    <FileUpload />
                                </div>
                            </div>



                        </div>
                    </div>
                )}


            </div>
        </>
    )
}

export default CreatePost
