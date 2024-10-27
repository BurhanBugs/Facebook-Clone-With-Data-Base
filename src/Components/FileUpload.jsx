import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addposttoDB,  } from '../redux/slices/postSlice';
const FileUpload = () => {


  const [localFile, setLocalFile] = useState(null);
  const [localTitle, setLocalTitle] = useState('');
  const [ImageURl, setImageURl] = useState('');
  const dispatch = useDispatch();

   console.log('hlo file upload')

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log('handle file wala ', file.name)
    if (file) {
      setLocalFile(file);
    }
  };

  const handlePost = () => {
    
      
    if (localFile && localTitle) {
      let PostData = {
        localTitle,
        localFile,
        ImageURl,
      }
      
      dispatch(addposttoDB(PostData))
  
      setLocalFile("")
      setLocalTitle("")

      
      
    }
    else{
      alert("Please enter both title and file")
    }
    
  }
  

  

  return (
    <>
      <textarea
        placeholder="What's on your mind"
        value={localTitle}
        onChange={(e) => setLocalTitle(e.target.value)}
        className="mt-4 w-full p-2 border focus:outline-none rounded-lg resize-none"
        rows="2"
      />



      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex flex-col items-center">
          <div className="">
            <lord-icon
              src="https://cdn.lordicon.com/rszslpey.json"
              trigger="hover"
              colors="primary:#121331,secondary:#3080e8"
              style={{ width: 60, height: 60 }}>
            </lord-icon>
          </div>
          <h2 className=" text-lg font-semibold text-gray-700">Add Your Photos/Videos</h2>
        </div>

        <div className="mt-6">
          <label className="flex justify-center w-full p-4 text-blue-500 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer hover:bg-blue-50">
            <span className="text-sm">Click to upload Photos/Videos</span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              
            />
          </label>
        </div>


        {localFile && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
            <p className="text-sm text-green-600"> uploaded successfully:</p>
            <div className="mt-2 p-4 bg-white border border-gray-300 rounded-lg">
              <img
                src={localFile}
                alt="Uploaded file"
                className="max-w-full h-auto rounded-lg"
              />

            </div>
          </div>
        )}




        <button
          onClick={handlePost}
          className="mt-4 w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Post
        </button>
      </div>
    </>
  );
};

export default FileUpload;
