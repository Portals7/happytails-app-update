import React from 'react'
import {Card} from 'react-bootstrap';
import { HomeContainer, HomeWrapper, HomeTitle, HomeTitle2, ImageHolder, DogHolder } from "./HomeElements";
/* import { Link, Route } from 'react-router-dom' */
import dog from '../pages/images/dog.jpg';
import '../App.css'

function Home() {
    return (
        <>
            <HomeContainer>
                <HomeWrapper>
                    <HomeTitle>
                        Dog of the day
                    </HomeTitle>
                    <HomeTitle2> Waiting for a forever home</HomeTitle2>
                    <DogHolder>
                    <ImageHolder> 
                        
                    </ImageHolder>
                    </DogHolder>
              
                    <Card >
                            <Card.Img variant="top"  className="dogCard" src={dog} />
                            
                            <Card.Body>
                              <Card.Title className="Naam mb-0 text-danger font-weight-bold" >Juan</Card.Title>
                              <Card.Text className="Ras text-dark font-weight-bold"> Dog </Card.Text>
                              <Card.Text className="Geslacht text-dark Leeftijd"> reu- 8 jaar </Card.Text>
                              <p><button className="button" href="/Contact"><form className="test" action="/contact">
    <input type="submit" value="contact" />
</form></button></p>
                              

                            </Card.Body>
                              <Card.Footer className="Plaats" variant="danger" style={{textAlign:'center',}}> Gent </Card.Footer>                    
                          </Card>
           
           
               </HomeWrapper>
            </HomeContainer>
            </>
    )
}
export default Home;

