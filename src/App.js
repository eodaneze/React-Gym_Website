import './App.css';
import './components/globel/Globel.css'


import { Build, Contact, Features, Footer, Gallery, Hero, Main, Navbar, Offers, Pricing, Services} from './components'

function App() {
  return (
     <div className='all-container'>
      
        <Navbar />
        <Hero />
        <Features />
        <Services />
        <Main />
        <Gallery />
        <Offers />
        <Build />
        <Pricing />
        <Contact />
        <Footer />
     </div>

   
  );
}

export default App;
