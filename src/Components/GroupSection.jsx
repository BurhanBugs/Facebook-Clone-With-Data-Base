import React from 'react'

const GroupSection = () => {
    return (
        <>
            <div>
                <h2 className='text-slate-500 font-semibold  text-lg'>Group Chats</h2>
            </div>

            <div className="flex mt-3 items-center cursor-pointer transition-all duration-300 p-1 rounded-lg hover:bg-slate-200 gap-3">
                <div className="plusicon bg-slate-200 p-2 rounded-full">
                    <img className='w-4' src="src\assets\icons8-plus-50.png" alt="" />
                </div>
                <div className="text">
                    <h3 className='font-semibold'>Create Group Chat</h3>
                </div>
            </div>
        </>
    )
}

export default GroupSection
