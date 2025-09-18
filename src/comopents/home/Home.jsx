import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar"
import Header from "../header/header";
// import Categories  from "../categery/Categery";
import Features from "../features/Features";
import HomeNavbar from "../navbar/HomeNavbar";
function Home(){
return <>
     <HomeNavbar/>
      <Header/>
{/*       <Categories/> */}
      <Features/>
      <Footer />
</>
}

export default Home;
