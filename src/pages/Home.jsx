import { useState, useEffect} from 'react';

// import {BsChevronDoubleLeft, BsChevronDoubleRight} from "react-icons/bs"
import axios from 'axios'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const Home = () => {

const [posts, setPosts] = useState([]);
const fetchData = async () => {
  const { data } = await axios.get("https://jotham-gallery-backend.onrender.com/api/allphotos");
  setPosts(data);
};
// Trigger the fetchData after the initial render by using the useEffect hook
useEffect(() => {
  fetchData();
}, []);

  return (
    <div className='w-full '>
      <NavBar />
      <div className="w-96 mx-auto md:w-auto flex-col justify-center items-center ">
      {/* <h1 className="text-center font-bold text-2xl p-10">Welcome to Jotham's Gallery</h1> */}
            {/* <li className="text-center list-none pt-2"><Link className=" p-3 bg-blue-700 rounded-md" to="/auth">Add Media</Link></li> */}
      <div className=" block md:w-[80%] mx-auto bg-gray-100 ">
        <div className="mx-auto py-2"> 
          <div className="relative  w-100 md:columns-3">
            {/* <BsChevronDoubleLeft className="absolute top-0 left-0 my-2 ml-5 text-blue-900"/>
            <BsChevronDoubleRight className="absolute top-0 right-0 my-2 mr-5 text-blue-900" /> */}
            {posts.map((post) => (
              <div key={post.id} className='w-86 h-[300px] shadow roun '>
                <figure>
                <img src={post.photo} alt=""  className=" w-96 h-[300px] py-5 object-cover "/>
                </figure>
                <figcaption>
                <p className='text-center'>{post.desc}</p>
                </figcaption>
              </div>
            ))}
          </div>
        </div>
        

      </div> 
    </div>
    <Footer className={"footer"}/>
    </div>
  )
}

export default Home