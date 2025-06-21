import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import  {services} from '../constants'
import { fadeIn , textVariant} from '../utils/motion'
import { p } from 'framer-motion/client'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({index , title , icon})=>{
  return(


    <Tilt className={'xs:w-[250px] w-full '} >
      <motion.div variants={ fadeIn('right', 'spring' , 0.5 * index , 0.75) } 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >
        <div
        options={{
          max: 45,
          scale:1,
          speed: 450
        }}
         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
<img src={icon} className='w-16 h-16 object-contain' alt="" />
<h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
        </div>
        
      </motion.div>
       
    </Tilt>
     
  )
}

const About = () => {
  return (
<>
<motion.div  variants={textVariant()} >
       <p className={styles.sectionSubText} > 
        Introduction
       </p>
       <h2 className={styles.sectionHeadText} >
        Overview
       </h2>
</motion.div>

<motion.p  variants={("" , "" , 0.1 , 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >
{/*      I'm a skilled software developer with experience in JavaScript , and expertise in frameworks like React , Node.js. I'm a quick learner and collaborate closely with clients to create efficient , scalable, and user-friendly solutions that solve real-world problems. Lets work together to bring tour ideas to life!   */}
I'm a full stack web developer with a passion for building fast, responsive, and scalable web applications.  
With a degree in Computer Science and professional training from UET Lahore, I specialize in both frontend and backend development using the MERN stack (MongoDB, Express, React, Node.js).

As the founder of Team Barry, I collaborate with clients and startups to deliver clean code, modern UI, and real-world solutions — from custom dashboards to full-featured business platforms.

🚀 Let’s bring your ideas to life with clean, efficient, and future-ready code.
</motion.p>
<div className='mt-20 flex flex-wrap gap-10' >
       { 
        services.map((service , index)=>(

      <ServiceCard key={service.title} index={index} {...service}  />
        ))
       }
</div>

</>
  )
}

export default SectionWrapper (About , 'about' )
