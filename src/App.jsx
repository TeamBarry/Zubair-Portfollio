import { BrowserRouter } from "react-router-dom"
import {About , Contact , Experience , Feedbacks , Hero ,Navbar ,Tech , Works , StarsCanvas} from './components'
 const  App = ()=> {


  return (
    <BrowserRouter>
   <div  className="relative bg-primary" >
     <div className="bg-hero-pattern bg-cover bg-no-repeat" >
<a
  href="https://wa.me/+923134503611"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#110d26', // your theme color
    borderRadius: '50%',
    width: '55px',
    height: '55px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
    zIndex: 9999,
    transition: 'transform 0.3s ease',
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
    alt="WhatsApp"
    style={{ width: '28px', height: '28px', filter: 'brightness(1.8)' }}
  />
</a>
      <Navbar/>
      <Hero/>

    </div>
<About/>
<Experience/>
<Tech/>
<Works/>
<Feedbacks/>
<div className="relative z-0"  >
  <Contact/>
<StarsCanvas/>
</div>
   </div>
    </BrowserRouter>
  )
}

export default App
