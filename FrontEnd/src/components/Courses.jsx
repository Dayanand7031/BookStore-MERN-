import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import {Link} from 'react-router-dom';

function Courses() {

  const [book, setBook]=useState([]);

  useEffect(()=>{
    const getBook = async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)
      }
      catch(error){
        console.log(error);
      }
    };
    getBook();
  },[])
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='pt-28 items-center justify-center text-center'>
        <h1 className=' text-2xl font-semibold md:text-4xl'>we're delighted to have you {" "}<span className='text-pink-500'>Here! :)</span></h1>
        <p className='mt-12'>Welcome to our bookstore, a haven for book lovers and curious minds alike. Whether you're searching for the latest bestseller, a classic novel, or a unique gift, we're here to assist you in finding exactly what you need. Take your time to explore our shelves, enjoy the cozy atmosphere, and don't hesitate to ask for recommendations. We're thrilled to be a part of your literary journey!</p>
        <Link to='/'>
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>

      <div className='mt-12 grid grid-col-1 md:grid-cols-4'>
     {
      book.map((item)=>(
        <Cards item={item} key={item.id} />
      ))
     }
      </div>
    </div>
   </>
  );
}

export default Courses;
