import React from 'react'
import Layout from "../../Components/Layouts/Layout";
import "../../Styles/HomeStyle.css";
import  Section1 from './Section1';
import  Section2  from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
    <>
  <Layout>
  {/* Home section hero banner */}
   <Section1/>
             
   {/* Home section about */}
    <Section2/>   

    {/* Home section menu */}
    <Section3 />

    {/* Home section promotion */}
    <Section4 />
      {/* Home shop section  */}
      <Section5/>
     {/* Home blog section  */}
     <Section6/>
     {/* Home Contact us section */}
     <Section7/>
  </Layout>
  </>
  )
}

export default Home