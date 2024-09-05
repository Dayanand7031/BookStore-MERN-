import React from 'react';
import book from '../../public/book.jpg';
function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex  flex-col md:flex-row my-10'>
                {/* left */}
                <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-12'>

                        <h1 className='text-4xl font-bold'>
                            Hello , welcomes here to learn something<span className='text-pink-500'> new everyday!!!</span>
                        </h1>
                        <p className=' text-xl '>Discover a world of knowledge and imagination at our bookstore. From timeless classics to modern bestsellers, find your next great read. Enjoy cozy spaces, personalized recommendations, and endless literary adventures </p>

                        <div className=''>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Enter your Email to login" />
                            </label>
                        </div>
                        <button className='bg-pink-600 text-white px-3 py-1 border rounded-md'>Get Started</button>

                    </div>
                </div>


                {/* right */}
                <div className='order-1 w-full md:w-1/2  mt-12 md:mt-32 px-3'>
                    <img src={book} alt='book' />
                </div>
            </div>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-6 space-y-4'>
                <h1 className='text-2xl font-bold'>Free Offered Courses</h1>
                <p className='text-xl'>Explore a variety of free courses at our bookstore, ranging from literature and arts to business and technology.
                     Enhance your skills with expert-led classes available in-store or online. Learn today!</p>
            </div>
        </>

    );
}

export default Banner;
