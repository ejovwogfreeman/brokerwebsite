import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../css/Testimonials.css'
import img from '../assets/cryptobg.jpg'
import cryp1 from '../assets/cryimg1.jpg'
import cryp2 from '../assets/cryimg2.jpg'
import cryp3 from '../assets/cryimg3.jpg'
import cryp4 from '../assets/cryimg4.jpg'
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {
  return (
    <div className='testimonials-container'>
        <div className='owl-container'>
            <h2>WHAT PEOPLE SAY</h2>
            <OwlCarousel
            loop={true}
            items={1}
            responsiveRefreshRate={0}
            autoplay={true}
            smartSpeed={1000}
            autoplayTimeout={5000}
            autoplayHoverPause={true}
            // nav={true}
            // navText={
            //     [
            //         `<div class="prev"><</div>`, 
            //         `<div class="next">></div>`
            //     ]
            // }
            >
                <div>
                  <img  className="img" src= {img} style={{width: '200px', height: '200px', margin: 'auto'}} alt='graphics'/>
                  <h3>John Doe</h3>
                  <p>Business Analyst</p>
                  <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, eos quidem debitis assumenda molestiae tempora fugit totam labore qui consectetur est nihil asperiores ipsum reiciendis inventore aliquid temporibus perferendis quae tempore, laboriosam explicabo libero a! Praesentium, enim modi! Illum commodi dicta nesciunt quis quasi esse recusandae expedita, cumque quisquam itaque!
                  </p>
                </div> 
                <div>
                  <img  className="img" src= {img} style={{width: '200px', height: '200px', margin: 'auto'}} alt='graphics'/>
                  <h3>John Doe</h3>
                  <p>Business Analyst</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, eos quidem debitis assumenda molestiae tempora fugit totam labore qui consectetur est nihil asperiores ipsum reiciendis inventore aliquid temporibus perferendis quae tempore, laboriosam explicabo libero a! Praesentium, enim modi! Illum commodi dicta nesciunt quis quasi esse recusandae expedita, cumque quisquam itaque!
                  </p>
                </div> 
                <div>
                  <img  className="img" src= {img} style={{width: '200px', height: '200px', margin: 'auto'}} alt='graphics'/>
                  <h3>John Doe</h3>
                  <p>Business Analyst</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, eos quidem debitis assumenda molestiae tempora fugit totam labore qui consectetur est nihil asperiores ipsum reiciendis inventore aliquid temporibus perferendis quae tempore, laboriosam explicabo libero a! Praesentium, enim modi! Illum commodi dicta nesciunt quis quasi esse recusandae expedita, cumque quisquam itaque!
                  </p>
                </div> 
        </OwlCarousel>
        </div>
        <div className='payment'>
            <h2>PAYMENT METHOD WE ACCEPT</h2>
            <div className='cryp'>
              <img src={cryp1} alt="" />
              <img src={cryp2} alt="" />
              <img src={cryp3} alt="" />
              <img src={cryp4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials