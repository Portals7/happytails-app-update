import React from 'react';
import "../App.css";
import {AboutContainer, AboutWrapper, ServicesCard, ServicesIcon, ServicesH1} from '../pages/AboutElements';

function Aboutus() {
    console.log("about us")

    const myelement = (
        <h1>testing</h1>
    );
    return (
        
        <div className="wrapper">
            <h1 className="pagetitle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', color: 'grey' }}>
                About page</h1>
                <div class="wrapper2">
  <h1>coming soon<span class="dot">.</span></h1>
  <p>Put some text here.</p>
  <div class="icons">
    <a href=""><i class="fa fa-twitter"></i></a>
    <a href=""><i class="fa fa-youtube-play"></i></a>
    <a href=""><i class="fa fa-paper-plane"></i></a>
    <AboutContainer>
        <AboutWrapper>
        
            <ServicesCard>
                    <ServicesH1>
                    <h1>Let's give this some content</h1>
                    </ServicesH1>
               
                
            </ServicesCard>
            
        </AboutWrapper>
        <h1>Let's give this some content</h1>
        </AboutContainer>
  </div>
 </div>

                
            </div>
    )
}

export default Aboutus

