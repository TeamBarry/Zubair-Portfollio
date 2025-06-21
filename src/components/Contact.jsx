import React from 'react'
import { useState , useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'; 

import { EarthCanvas } from './canvas'
import { SectionWrapper  } from '../hoc'
import { slideIn } from '../utils/motion'
import { styles } from '../styles'


const Contact = () => {
 const formRef = useRef();
const [form , setForm ] = useState({ 
  name : "",
  email : "",
  message : "",
});
 
const [loading, setLoading] = useState(false);

const handleChange = (e) =>{
    const { name , value } = e.target;

    setForm({ ...form , [name]: value })
}

const handleSubmit = (e) =>{ 

         e.preventDefault();

// template_o0kyhjm
// 
// zBv6BwoyaAfsb-7os
         emailjs.send(
          'service_3323goa',
          'template_4bo5xqn',
          {
            from_name : form.name,
            to_name : 'Barry',
            customer_email : form.email,
            from_email : 'zubairzafar596@gmail.com',
            to_email : form.email,
            message : form.message,

          },
          'hdYsjWZbDbAwo9j-_'
         )
         .then(()=>{
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name : '',
            email : '',
            message : "",          })
         } , (error)=>{
             setLoading(false)

             console.log(error);

             alert('Something went wrong.')
         }
        )
}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden' >
<motion.div variants={slideIn('left' , "tween", 0.2 , 1 )}
className='flex-[0.75] bg-black-100 p-8 rounded-2xl '
>
<p className={styles.sectionSubText}>Get in Touch</p>
<h3 className={styles.sectionHeadText}>Contact.</h3>

 <p style={{ marginBottom: "10px" }}>
    Feel free to reach out for project inquiries, collaborations, or just to say hello!
  </p>

  <div style={{ marginTop: "30px", lineHeight: "2" }}>
    <p><strong>Email:</strong> <a href="mailto:zubair@teambarry.blog" style={{ color: "#ffffff", textDecoration: "underline" }}>zubair@teambarry.blog</a></p>
    <p><strong>WhatsApp:</strong> <a href="https://wa.me/+923134503611" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", textDecoration: "underline" }}>+92 3134503611</a></p>
</div>
{/* 
<div style={{ backgroundColor: "#110d26", color: "#ffffff", padding: "50px 20px", fontFamily: "sans-serif" }}>
  <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#A37CF0" }}>📞 Contact Me</h2>

  <p style={{ marginBottom: "10px" }}>
    Feel free to reach out for project inquiries, collaborations, or just to say hello!
  </p>

  <div style={{ marginTop: "30px", lineHeight: "2" }}>
    <p><strong>Email:</strong> <a href="mailto:zubair@teambarry.blog" style={{ color: "#ffffff", textDecoration: "underline" }}>zubair@teambarry.blog</a></p>
    <p><strong>WhatsApp:</strong> <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", textDecoration: "underline" }}>+92 300 1234567</a></p>
    <p><strong>Location:</strong> Lahore, Pakistan (Available for Remote Work)</p>
    <p><strong>Working Hours:</strong> Mon – Sat | 10:00 AM – 7:00 PM (PKT)</p>
  </div>

  <div style={{ marginTop: "40px" }}>
    <h3 style={{ color: "#A37CF0", fontSize: "24px", marginBottom: "10px" }}>📬 Send Me a Message</h3>
    <form style={{ maxWidth: "500px" }}>
      <input type="text" placeholder="Your Name" required style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "5px", border: "none", backgroundColor: "#1a132f", color: "#ffffff" }} />
      <input type="email" placeholder="Your Email" required style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "5px", border: "none", backgroundColor: "#1a132f", color: "#ffffff" }} />
      <textarea placeholder="Your Message" rows="5" required style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "5px", border: "none", backgroundColor: "#1a132f", color: "#ffffff" }}></textarea>
      <button type="submit" style={{ backgroundColor: "#A37CF0", color: "#ffffff", padding: "12px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Send Message
      </button>
    </form>
  </div>
</div>

 */}


 
 
<form action="" ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8' >

<label htmlFor="" className='flex flex-col ' >
  <span className='text-white font-medium mb-4 ' > Your Name </span>
  <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" 
  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
</label>
<label htmlFor="" className='flex flex-col ' >
  <span className='text-white font-medium mb-4 ' > Your Email </span>
  <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" 
  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
</label>
<label htmlFor="" className='flex flex-col ' >
  <span className='text-white font-medium mb-4 ' > Your Message</span>
  <textarea rows='7'  name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" 
  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
</label>
 
<button type='submit' className='bg-tertiary py-8 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ' >
{loading ? 'Sending...' : 'Send' }
</button>
  
</form>



 
</motion.div>
<motion.div 
variants={slideIn ('right' , "tween" , 0.2 , )}
className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] '
>
<EarthCanvas/>
</motion.div>


    </div>
  )
}

export default SectionWrapper(Contact , "contact")
