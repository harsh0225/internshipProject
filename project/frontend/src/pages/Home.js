
import bgvideo from '../assets/can4.mp4'
import imag from '../assets/homeLogo.svg'
import waiter from '../assets/waiter.svg';
import bbq from '../assets/bbq.svg';
import burger from '../assets/burger.svg';
import login from '../assets/login.png';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



function Home(props) {

  const setOrderData = props.setOrderData;
  const isLoggedIn = props.isLoggedIn;

  const navigate = useNavigate();

  const [data,setData] = useState();

  let count = 0;

  useEffect(() => {
      axios.get("http://localhost:8000/api/v1/getallitem")
      .then((res) => {
          console.log(res)
          setData(res.data.data);
          console.log(res.data.data)
      })
      .catch((error) => {
          console.log(error)
      })
  },[])

  function orderHandler(data) {
    if(!isLoggedIn)
    {
      navigate('/login')
      toast.error("you need to login")
    }
    else 
    {
      setOrderData(data)
    }
  }

  return (
    <div className=" flex flex-col justify-center items-center  w-11/12 mx-auto " >
      <div className=' w-screen relative'>
        <div className='h-[91%] overflow-hidden  z-[-1]  '>
          <video src={bgvideo} autoPlay loop muted className='opacity-20'/>
          <img src={imag} className='absolute top-[20%] left-[30%] w-[600px] invert'/>
          <div className='w-screen  border-[0.5px] border-white absolute b-0 '></div>
        </div>
      </div>
      <div>
          <section class="showcase my-[130px] ">
              <main class="container-min grid-1 text-center jc-ai-center">

                  <article className='flex flex-col gap-7'>
                      <h1 class=" text-orange-600 text-[35px]">__ Come and Dine __</h1>
                      <h6 class="md text-[25px]">with the finest</h6>
                  </article>
                  <article class=" flex flex-row mt-[50px] items-start gap-[50px]">
                      <div class=" flex flex-col  items-center gap-10 ">
                          <h4 class="md text-[20px]">Fresh Daily</h4>
                          <img src={waiter} loading="lazy"  alt=""/>
                          <p className=''>Savour the creamy goodness of Champion Fruit Cream. 
                          We bet, there's the goodness of cream in every bite!</p>
                      </div>
                      <div class=" flex flex-col  items-center gap-10 ">
                          <h4 class="md text-[20px]">Savoury & Creamy</h4>
                          <img src={bbq} loading="lazy" alt=""/>
                          <p>Sumptuous delicious food baked in our cafe with
                            curated ingredients and recipes curated ingredients and recipes.</p>
                      </div>
                      <div class=" flex flex-col items-center gap-10">
                          <h4 class="md text-[20px]">Good Food</h4>
                          <img src={burger} loading="lazy" alt=""/>
                          <p>Each and every day we strive to better serve our 
                            community, customers with food that's fresh, tasty and healthy.</p>
                      </div>
                  </article>
              </main>
            </section>
      </div>

      <div>
      <div className='flex flex-wrap gap-10 justify-center'>
      {
        data?.map((data) => {
          return (
            <section className="mx-auto my-2 max-w-[20rem] bg-richblack-700 rounded-[20px] overflow-hidden ">
        <div className="card">
          <div className="bg-image hover-overlay ripple relative" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </div>
          <div className="px-[20px] py-[20px]">
            <h5 className="font-bold text-[22px]"><a>{data.name}</a></h5>
            <ul className="list-none list-inside flex mb-0">
              <li className="inline-block">
                <p className="text-muted text-[14px]">Rating 4.5 (413)</p>
              </li>
            </ul>
            <hr className="my-4" />
            <ul className="list-none list-inside flex justify-evenly items-center">
              <p className='text-orange-600 text-[20px]'>₹{data.price}</p>
              <a href="#!" className="btn-link link-secondary p-1 mb-0"><button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <span onClick={() => orderHandler(data)}>Order Now</span>
            </button></a>
            </ul>
          </div>
        </div>
      </section>
          )
        })
      }
      </div>
      </div>

      <Footer/>

        
      </div>
  );
}

export default Home;
