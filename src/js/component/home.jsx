import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import AboutUs from "./home components/aboutus.jsx"
import ContactUs from "./home components/contactus.jsx"
import Footer from "./home components/footer.jsx"
import HeroImage from "./home components/heroimage.jsx"
import Navbar from "./home components/navbar.jsx"
import Services from "./home components/services.jsx"
import MainContent from "./home components/maincontent.jsx"



//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<MainContent/>
			

			{/* <HeroImage/>
			<AboutUs/>
			<Services/>
			<ContactUs/>
			<Footer/> */}


		</div>
	);
};

export default Home;
