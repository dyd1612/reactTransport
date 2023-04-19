
import './App.css';
import Banner from './Component/Banner';
import HeaderNav from'./Component/HeaderNav'
import Services from './Component/Services'
import AboutUs from './Component/About'
import Contact from './Component/Contact';
import CustomerLoin from './Component/CustomerContainer/CustomerLoin';
import Loction from './Component/Loction';

function App() {
  return (
    <>
    <HeaderNav/>
    <Banner/>
    <AboutUs/>
    <Services/>
    <CustomerLoin/>
    <Contact/>
    <Loction/>
    </>
  )
}

export default App;
