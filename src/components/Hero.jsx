import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'



const Hero = () => {

 const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <section className='relative w-full h-screen mx-auto' >
{/*       <div className={`${styles.paddingX}  absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `} >
        <div className='flex flex-col justify-center items-center mt-5 ' >
<div className='w-5 h-5 rounded-full bg-[#915eff]'  />
<div className='w-1 sm:h-80 h-40 violet-gradient ' />
        </div>
<div>
  <h1 className={`${styles.heroHeadText} text-white `} >Hi I'm <span className='text-[#914eff]' >Zubair Zafar</span></h1>
<p  className={`${styles.heroSubText} mt-2 text-white-100 `}>
  I develop  visuals, user <br className='sm:block hidden' /> interfaces and web application <br className='sm:block hidden' />
 and the founder of <span className='text-[#914eff]' >Team Barry</span>.     </p>

</div>
 
      </div>
 */}

       <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Left side - Your existing content */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className="text-[#914eff]">Zubair Zafar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop visuals, user <br className="sm:block hidden" />{" "}
            interfaces and web application <br className='sm:block hidden' />
 and the founder of <span className='text-[#914eff]' >Team Barry</span>.
          </p>
        </div>

        {/* Right side - Your profile image (shifts to bottom on mobile) */}
        {!isMobile && (
          <div className="relative w-64 h-64 ml-8 group">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#915eff]/30 transition-all duration-500 group-hover:border-[#915eff]/70">
              {/* <img
                src={person} // Replace with your image
                alt="Barry"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              /> */}

              {/* Image with subtle filters */}
              <img
                src={person}
                alt="barry"
                className="w-full h-full object-cover 
        brightness-95 contrast-105 saturate-110 
        transition-all duration-500 
        group-hover:brightness-100 group-hover:contrast-110 group-hover:saturate-115
        group-hover:scale-105"
              />

              {/* Subtle overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#915eff10] to-[#915eff03] opacity-70 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full border-[3px] border-[#915eff30] group-hover:border-[#915eff60] transition-all duration-500"></div>

              {/* Optional subtle shine effect */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-[#ffffff20] to-transparent opacity-30 group-hover:opacity-50 group-hover:animate-shine transition-all duration-700"></div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-full bg-[#915eff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        )}
      </div>

      {/* Mobile view - Image at bottom */}
      {isMobile && (
        <div className="absolute bottom-[130px] left-0 right-0 flex justify-center">
          <div className="relative w-48 h-48 group">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#915eff]/30">
              <img
                src={person} // Replace with your image
                alt="Barry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}




      
{/* <ComputersCanvas/> */}
<div className='absolute  xs:bottom-10 bottom-32 w-full flex justify-center items-center '  > 
<a href="#about ">
  <div className='w-[]35px h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2' >
 
 <motion.div 
 animate={
  {
    y: [0,24,0]
  }
 }
transition={{
  duration:1.5,
  repeat:Infinity,
  repeatType:'loop'
}}
className='w-3 h-3 rounded-full bg-secondary mb-1'

 />

  </div>
</a>

</div>

    </section>
  )
}

export default Hero
