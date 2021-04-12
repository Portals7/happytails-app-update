import styled from 'styled-components'
import banner from "../pages/images/aboutpic.png"
import banner2 from "../pages/images/aboutpic2.png"

export const AboutContainer = styled.div`
height: 900px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #e5e5e5;
border-radius: 10px;

@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`


export const AboutWrapper = styled.div`
max-width: 1500px;


margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap: 16px;
padding: 0 50px;
color: red;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}`

export const ServicesCard = styled.div`
background-color:white;
display: flex;
flex-direction; column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
width:800px;
max-height: 600px;
padding: 30px;

box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    width:500px;
    
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    width:300px;
    margin-top:20px;
}
@media screen and (max-width: 480px) {
    margin-top:-900px;

}`



export const ServicesH1 = styled.h1`
font-size: 4rem;
color: red;
margin-bottom: 64px;
font-family: 'Dosis', sans-serif;

@media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top:50px;
}
@media screen and (max-width: 1000px) {

font-size:1.8rem;
}
`

export const ServicesH2 = styled.h2`
font-size:1rem;
margin-bottom: 10px;
`
export const ServicesP = styled.p`
font-size:1rem;
text-align: center;
`

export const PicHolder = styled.div`
height:350px;
width:450px;
display: grid;


grid-gap: 16px;
padding: 0 50px;
background-image: url(${banner});


@media screen and (max-width: 1000px) {
    margin-top: 50px !important;
    grid-template-columns: 1fr 1fr;

}

@media screen and (max-width: 768px) {
    display:none;
    
}`

export const PicHolder2 = styled.div`
height:350px;
width:390px;
display: grid;


grid-gap: 16px;
padding: 0 50px;
background-image: url(${banner2});


@media screen and (max-width: 1000px) {
    margin-top: 50px !important;
    grid-template-columns: 1fr 1fr;

}

@media screen and (max-width: 768px) {
    display:none;
    
}`



export const AboutText = styled.div`
border-radius: 15px;
display:flex;
border:dotted;
color:red;
width: 400px;
height: 350px;
padding: 30px ;
font-size:1rem;
text-align:left;
margin-top:0px;
font-size: 1.2rem;
font-family: 'Dosis', sans-serif;

@media screen and (max-width: 1000px) {
    width:245px;
    height:450px;
}
@media screen and (max-width: 480px) {
    font-size: 1rem;
    width:300px;
    height:270px;
    margin-top:-200px;
}

`

export const BlankSpace = styled.div`

height: 50px;
`