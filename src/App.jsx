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
    left: '20px',
    backgroundColor: '#A37CF0',
    borderRadius: '50%',
    width: '55px',
    height: '55px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
  }}
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
    style={{ width: '28px', height: '28px' }}
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
