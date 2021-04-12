import React from 'react';
import "../App.css";
import { AboutContainer, AboutWrapper, ServicesCard, ServicesH1, PicHolder,PicHolder2, AboutText, BlankSpace  } from '../pages/AboutElements';

function Aboutus() {
    console.log("about us")

    
    return (

        <div className="wrapper">
            <h1 className="pagetitle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', color: 'red' }}>
                About page</h1>
            <div class="wrapper2">
                
                
                    <AboutContainer>
                        <AboutWrapper>
                            
                            <ServicesCard >
                            <PicHolder />
                                <ServicesH1>
                                Platform for Shelters
                                </ServicesH1>
                                </ServicesCard>
                                <AboutText><b> Give the dogs the attention they deserve and post their profile on Happytails! Go to the contact page to upload a picture and description. His/her profile will be shown on the adopt page after reviewing the application. Contact us for more information regarding this.
                                </b>
                              
                                </AboutText>
                                <BlankSpace />
                                <ServicesCard>
                            <PicHolder2 />
                                <ServicesH1>
                                Adopt a dog
                                </ServicesH1>
                                </ServicesCard>
                                
                               
                               
                                


                            

                        </AboutWrapper>
                        
                    </AboutContainer>
                </div>
                <div class="icons">
                    <a href="www.google.be"><i class="fa fa-twitter"></i></a>
                    <a href="www.google.be"><i class="fa fa-youtube-play"></i></a>
                    <a href="www.google.be"><i class="fa fa-paper-plane"></i></a>
                    </div>
            


        </div>
    )
}

export default Aboutus

