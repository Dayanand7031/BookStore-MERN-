import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
   <>
   <div className=''>
   <div className="flex h-screen items-center justify-center">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"
       className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Signup</h3>
    {/* email */}
   <div className='mt-4 space-y-5'>
   <div className="space-y-2">
      <span>Name</span>
      <br />
      <input type='text'
      placeholder='Enter your Name'
      className='w-80 px-3 border rounded-md outline-none dark:text-black'
      {...register("name", { required: true })}
      />
       <br />
       {errors.name && <span className='text-red-600'>This field is required</span>}
    </div>
    
   <div className="space-y-2">
      <span>Email</span>
      <br />
      <input type='email'
      placeholder='Enter your Email'
      className='w-80 px-3 border rounded-md outline-none dark:text-black' 
      {...register("email", { required: true })}
      />
       <br />
       {errors.email && <span className='text-red-600'>This field is required</span>}
    </div>
    {/* password */}
    <div className='space-y-2'>
      <span>Password</span>
      <br />
      <input type='password'
      placeholder='Enter your Password'
      className='w-80 px-3 border rounded-md outline-none dark:text-black' 
      {...register("password", { required: true })}
      />
       <br />
       {errors.password && <span className='text-red-600'>This field is required</span>}
    </div>
   <div className='flex justify-between'>
   <button className='px-3 py-2 bg-pink-500 rounded-md hover:bg-pink-700'>Signup</button>
   <p>Have Account? 
    <button className='text-blue-500 underline cursor-pointer'
   onClick={()=> document.getElementById("my_modal_3").showModal()}>
    Login</button>
    <Login />
    </p>
   </div>
   
   </div>
   </form>
  </div>
</div>
   </div>
   </>
  );
}

export default Signup;
