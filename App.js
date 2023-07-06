import React from 'react';
import Img1 from './images/ux.jpg';
import Paris from './images/project.jpg';
import Egypt from './images/front.jpg';
import Cent from './images/eric.jpg';
import { FaLinkedin, FaGithubSquare, FaTwitter, FaEnvelope, FaInstagram, FaPhoneAlt } from 'react-icons/fa';


function App() {
  return (
    <div className='bg-white h-screen w-screen'>
      <nav className=' fixed flex justify-between  items-center bg-black w-screen'>
        <h1 className='text-white font-bold mx-5 '>PORTFOLIO.</h1>
        <ul className='flex item-center gap-[3vw]'>
          <li className='text-white font-bold hover:bg-gray-700 rounded border-none px-7 py-1'>Home</li>
          <li className='text-white font-bold hover:bg-gray-700 px-5 py-1 rounded'>About</li>
          <li className='text-white font-bold  hover:bg-gray-700 px-5 py-1 rounded'>Skills</li>
          <li className='text-white font-bold  hover:bg-gray-700 px-5 py-1 rounded'>Blog</li>
          <li className='text-white font-bold  hover:bg-gray-700 px-5 py-1 rounded'>Experiences</li>
          <li className='text-white font-bold px-3 hover:bg-gray-700 rounded '>Contact</li>
        </ul>
        <button className='bg-gray-50 border  rounded border-blue-700 px-8  mx-16 my-2 hover:bg-blue-900 text-black'>Get started</button>
      </nav>


      <div className=' flex flex-nowrap hover:border border-b-2 border-black '>
        <div className='my-12 mx-5 hover:translate-y-6'>
          <h1 className='font-bold text-blue-900 text-2xl my-6'>
            HELLO, MY NAMES IS </h1>
          <h2 className='my-5 text-green-900 font-bold text-3xl'>Eric Serugo</h2>
          <p className='font-bold text-blue-900 text-lg'>SOFTWARE DEVELOPER</p>
        </div>
        <div className='mx-40'>
          <img src={Cent} alt='' className='w-80 my-12 h-80 rounded-lg hover:translate-x-6' />
        </div>
      </div>

      <div className='flex justify-center my-8 items-center'>
        <h1 className='text-2xl text-blue-900 font-bold'><u>ABOUT ME</u></h1>
      </div>
      <div className='hover:translate-x-6'>
        <p className='text-lg mx-5 font-bold text-black'><span className='text-2xl text-blue-900'>My name is Eric Serugo</span> Am highly
          efficient software developer with over 1 year of experience and proven expertise in
          full-stack development, with a main focus on Front-end development.<br /> I am skilled at writing clear, concise, and well-tested code that is easier to maintain and debug.
          <br />I had experience working with both small and large teams across multiple projects and companies.<br /> <span className='text-2xl text-blue-900'> I am able to work independently in remote locations or office environments.</span></p>

      </div>
      <div className='flex justify-center my-8 items-center'>
        <button className='bg-sky-500 px-12 py-2  rounded-lg hover:bg-sky-700 '>Read more</button>
      </div>


      <div className='flex justify-center items-center '>
        <h1 className='font-bold text-blue-900 text-5xl'>Get in touch with me for <br />more information</h1>
      </div>
      <div className='flex justify-center items-center my-2 text-gray-700'>
        <p className='font-bold  text-green-900'>If you need help or You have problem, Feel free to text me!!</p></div>


      <div className='grid grid-cols-3  '>
        <div className='border border-none w-2/3 mx-5 bg-white '>
          <img src={Img1} alt='' className='w-48 mx-10 my-2  rounded-lg hover:-translate-y-4' />

        </div>

        <div className='border border-none w-2/3 bg-slate-100 bg-white '>
          <img src={Paris} alt='' className='w-48 mx-10 my-2 h-100px rounded-lg hover:-translate-y-4' />

        </div>

        <div className='border border-none w-2/3 bg-slate-100 bg-white'>
          <img src={Egypt} alt='' className='w-60 mx-10 my-2 h-32 rounded-lg hover:-translate-y-4 ' />

        </div>


      </div>
      <div className='grid grid-cols-3 bg-slate-300 '>
        <div className='border border-none w-2/3 mx-10 bg-white hover:bg-blue-100 rounded-lg '>
          <h1 className='mx-7 font-bold text-blue-900 my-5'>UI/UX Designer</h1>
          <p className='mx-7 text-gray-500'>Ericserugo60@gmail.com</p>
          <p className='mx-7'>+250-783-374-085</p>
          <button className='border border-blue-900 hover:bg-gray-300 px-10 mx-7 rounded  font-bold text-blue-900 my-5'>Explore More</button>
        </div>

        <div className='border border-none w-2/3 bg-slate-100 bg-white mx-5 hover:bg-blue-100 rounded-lg  '>
          <h1 className='mx-7 font-bold text-blue-900 my-5 '>PROJECT MANAGEMENT/ANALYSIS</h1>
          <p className='mx-7 text-gray-500'>Ericserugo60@gmail.com</p>
          <p className='mx-7'>+250-783-374-085</p>
          <button className='border border-blue-900 px-10 mx-7 hover:bg-gray-300  rounded  font-bold text-blue-900'>Explore More</button>
        </div>

        <div className='border border-none w-2/3 bg-slate-100 bg-white mx-5 hover:bg-blue-100 rounded-lg'>
          <h1 className='mx-7 font-bold text-blue-900 my-5'>FRONT-END/BACK-END DEVELOPER</h1>
          <p className='mx-7 text-gray-500'>Ericserugo60@gmail.com</p>
          <p className='mx-7'>+250-783-374-085</p>
          <button className='border border-blue-900 hover:bg-gray-300 px-10 mx-7 rounded  font-bold text-blue-900'>Explore More</button>
        </div>
      </div>

      <div className='bg-black  text-sky-500 w-screen divide-y divide-gray-800 my-5  '>
        <div>
          <h1 className='flex justify-center text-4xl text-white font-bold py-2'>SOCIAL MEDIA</h1>
        </div>
        <div className='flex justify-center items-center'>
          <ul className='flex item-center gap-[20vw] my-5'>
            <li className='font-bold'><a><FaLinkedin className='my-1 mx-1 text-sky-500 text-4xl' /> Linkedin</a></li>
            <li className='font-bold'><FaGithubSquare className=' my-1 mx-1 text-4xl text-sky-500' />Eric Serugo/E2RIC</li>
            <li className='font-bold'><FaTwitter className='text-sky-500 my-1 mx-1 text-4xl   ' />@Serugo Eric 250</li>
          </ul>
        </div>
        <div className='flex justify-center items-center'>
          <ul className='flex item-center gap-[20vw] my-5'>
            <li className='font-bold'><a><FaEnvelope className='my-1 mx-1 text-sky-500 text-3xl ' /> Ericserugo60@gmail.com</a></li>
            <li className='font-bold'><FaInstagram className='text-sky-500 my-1 mx-1 text-4xl' />Serugo.Eric</li>
            <li className='font-bold'><FaPhoneAlt className='text-sky-500 my-1 mx-1 text-3xl ' />+250783374085</li>
          </ul>
        </div>
        <div className='flex justify-center '>
          <h1 className='text-white font-bold text-blue-500 text-3xl'>Contact Me</h1>
          <form className=' border border-gray-400 rounded-lg px-5 py-5 mx-4 my-5'>
            <input type='text' placeholder='Enter your names' className='mx-4 my-2 px-3 rounded-lg w-80 h-12 text-black' />
            <input type='text' placeholder='Ente your email' className='mx-4 my-2 px-3 rounded-lg w-80 h-12 text-black' /><br />
            <label className='text-xl font-bold mx-12 text-sky-500 '>Text Me!</label><br />
            <textarea placeholder='Message Me' className='w-80 mx-4 rounded-lg text-black' /><br />
            <button className='bg-sky-500 px-5 py-1 w-36 text-white font-bold rounded-lg mx-12 my-3 hover:bg-sky-700'>Send</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default App;
