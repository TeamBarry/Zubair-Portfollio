import { BrowserRouter } from "react-router-dom"
import {About , Contact , Experience , Feedbacks , Hero ,Navbar ,Tech , Works , StarsCanvas} from './components'
 const  App = ()=> {


  return (
    <BrowserRouter>
   <div  className="relative bg-primary" >
     <div className="bg-hero-pattern bg-cover bg-no-repeat"
              style={{
                backgroundImage: 'url(/src/assets/herobg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
    
    >
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
