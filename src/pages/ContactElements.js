import styled from 'styled-components'
import picture from '../pages/images/steps.png';
import picture2 from '../pages/images/steps2.png'

export const ContactContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: -50px;


@media screen and (max-width: 768px) {
    height: 1100px;
    margin-top: 0px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
    margin-top: 0px;
}
`


export const ContactWrapper = styled.div`
max-width: 1500px;

margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap: 16px;
padding: 0 50px;
color: blue !important;



@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 50px !important;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 50px !important;
    padding: 0 20px;
}`

export const FormContainer = styled.div`
max-width: 1500px;
width:1200px;

margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap: 16px;
padding: 0 50px;
color: blue !important;


@media screen and (max-width: 1000px) {
    margin-top: 50px !important;
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
}

@media screen and (max-width: 768px) {
    margin-top: 50px !important;
    grid-template-columns: 1fr;
    max-width: 350px;
    padding: 0 20px;
}`

export const ImageHolder = styled.div`
height:650px;
width:370px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap: 16px;
padding: 0 50px;
background-image: url(${picture});


@media screen and (max-width: 1000px) {
    margin-top: 50px !important;
    grid-template-columns: 1fr 1fr;
    background-image: url(${picture2});
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}`

export const TextHolder = styled.div`
height:100%
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap: 16px;
padding: 0 50px;



@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}`