import React from 'react'
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
// import {BsCloudPlus} from "react-icons/bs"
const AddImge = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const navigate = useNavigate()
  const handleSubmit = async (e) => {

    // navigate('/auth')

    e.preventDefault();
   
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("desc", desc);

      try {  
        // await axios.post("https://localhost/api/postphoto/", data, {     
        await axios.post("https://jotham-gallery-backend.onrender.com/api/postphoto/", data, {     
          headers: { "Content-Type": "multipart/form-data" }});
          navigate('/')
        } catch (err) {
          console.log(err)
        }
        // console.log(data)
    }
  };
  return (
    <div className='w-[600px] max-h-screen m-auto pt-20 md:flex justify-center '>
        <form onSubmit={handleSubmit} className='mx-auto p-3 pt-20  bg-slate-300' >
          <div className='w-[300px] mx-auto'>
          <h1 className='' htmlFor="photo">Add one Picture at A time
          </h1>
          {/* <BsCloudPlus /> */}
          <input name="photo" type="file" id='photo' className='' onChange={(e) => setFile(e.target.files[0])}/>
          </div>
          <label className='p-3' htmlFor="description">Description</label>
          <input className='p-1' name="desc" value={desc} id='description' type="text" placeholder='Tell Your Story' onChange={(e) => setDesc(e.target.value)} />
          <button type='submit' className='block p-2 mt-3 w-50 mx-auto bg-blue-400 rounded-lg' >Upload Image</button>
        </form>
          {file && (
            <div>
              <img className="w-[300px] md:w-[500px] p-3 bg-slate-300" src={URL.createObjectURL(file)} alt="" />
            </div>
      )}

    </div>
  )
}

export default AddImge