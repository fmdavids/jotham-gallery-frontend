// import React, { useState } from 'react'

// const auth = () => {
//   const [isAuth, setIsAuth ] = useState('')
//   return (
//     <form>
//       <input type="email" />
//       <input type="submit" />
//     </form>
//   )
// }

// export default auth


import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import axios from "axios"

const Auth = () => {

  const allowedEmail = "fmproade@gmail.com";
  // const allowedPassword = "fmproade@gmail.com";
  
  const [isAuth, setIsAuth] = useState("");
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.getItem("email") // not work as wished, implement jwt. annoying to submit email each time
    if(isAuth ===allowedEmail  ) {
      localStorage.setItem( "email", isAuth)
      navigate("/addimage")
    }else{
      navigate('/notAllowed')
    }
  }
 

  // const handleSubmit = async (e) => {
  //   e.prevantDefault();
  //   try {
  //   const postRegister = await axios.post(`http://localhost:5000/user/register`, {
  //     firstName: input.firstName,
      
  //   })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  return (
    <div>
        <div className="min-h-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div> 
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
          </div>
          <form >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className='pb-0'>
                <label htmlFor="email-address" className="sr-only">
                  Enter Your Email
                </label>
                <input
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 my-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="email"
                  value={isAuth}
                  onChange={(e) => setIsAuth(e.target.value)}
                />
                <input type="submit" onClick={handleSubmit}/>
              </div>
              </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Auth




