import { Link } from "react-router-dom"
export default function NavBar() {
  return (
    <div className=" w-full  bg-gray-200 mx-auto py-5 px-10">

    <div className=" flex  justify-between  ">
      <h1 className="bold">Baby Digital Album </h1>
      <ul>
      <li className="text-center list-none"><Link className=" p-3 bg-blue-700 rounded-md " to="/auth">Add Media</Link></li>
      </ul>
    </div>
    </div>
  )
}




