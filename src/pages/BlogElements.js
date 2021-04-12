import styled from 'styled-components'
import blog from '../pages/images/blog.png';

export const BlogContainer = styled.div`
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
export const BlogWrapper = styled.div`
max-width: 1500px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr;
align-items:center;
text-align:center;
grid-gap: 16px;
padding: 0 50px;


@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 
}
@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}`

export const BlogTitle = styled.h1`
font-size: 3rem;
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

export const FirstBlog = styled.div`
width: 1000px;
height: 400px;
border-radius: 10px;
grid-template-columns: 1fr 1fr;
background-color:white;
border:none;

@media screen and (max-width: 480px) {
    width:400px;
    height:800px;
}
`

export const ImageHolder = styled.div`
width:350px;
height:400px;
margin-left: -340px;

grid-gap: 16px;
padding: 0 50px;
background-image: url(${blog});


@media screen and (max-width: 1000px) {
     grid-template-columns: 1fr 1fr;

}

@media screen and (max-width: 768px) {
margin-left: 0px;
margin-top: 0px !important;
}`

export const BlogText = styled.h1`
width: 300px;
height: 100px;
margin-top:30px;
border-radius: 10px;
background-color:white;
color:red;

@media screen and (max-width: 480px) {
    
    width:310px;
    margin-top:400px;
    margin-left: -330px;

}`


export const BlogSmalltext = styled.p`
width: 200px;
height: 100px;
margin-top:30px;
margin-left:50px;
text-align:left;
border-radius: 10px;
background-color:white;
color:red;

@media screen and (max-width: 480px) {
    
    width:310px;
    margin-top:400px;
    margin-left: -330px;

}`