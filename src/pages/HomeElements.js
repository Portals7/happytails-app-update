import styled from 'styled-components'
import crown from '../pages/images/crown.png';


export const HomeContainer = styled.div`
height: 900px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

border-radius: 10px;

@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`
export const HomeWrapper = styled.div`
max-width: 1500px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr;
align-items:center;
text-align:center;
grid-gap: 16px;
padding: 0 50px;
color: red;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 
}
@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}`

export const HomeTitle = styled.h1`
font-size: 6rem;
color: red;
padding:30px;
font-family: 'Dosis', sans-serif;

@media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top:50px;
}
@media screen and (max-width: 1000px) {
font-size:3.8rem;
}
`

export const HomeTitle2 = styled.h2`
font-size: 2.5rem;
color: black;
margin-top:-50px;

@media screen and (max-width: 480px) {
    font-size: 2rem;

}
@media screen and (max-width: 1000px) {
font-size:2rem;
}
`

export const DogHolder = styled.div`
align-items:center;
text-align:center;
grid-gap: 16px;

`

export const ImageHolder = styled.div`
width:20px;
height:80px;
margin-left:230px;
grid-gap: 16px;
padding: 0 50px;
background-image: url(${crown});


@media screen and (max-width: 1000px) {
    margin-top: 50px !important;
    grid-template-columns: 1fr 1fr;
    background-image: url(${crown});
}

@media screen and (max-width: 768px) {
margin-left: 140px;
margin-top: 0px !important;
}`
