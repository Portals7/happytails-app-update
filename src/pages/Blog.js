import React from 'react'
import "../App.css";
import {BlogContainer, BlogWrapper, BlogTitle, FirstBlog, ImageHolder, BlogText, BlogSmalltext} from './BlogElements'
/* import { Link, Route } from 'react-router-dom' */



function Blog() {
    return (
        <>
        <BlogContainer>
            <BlogWrapper>
                <BlogTitle>Blog page</BlogTitle>
                <FirstBlog>
                    <table><tbody>
                    <ImageHolder /></tbody>
                    <tbody>
                    <BlogText>Sponsored by Happy Dog</BlogText>
                    <BlogSmalltext>Happy day because 'happy dog' food sponsors this website! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo, nulla. Fusce quis ipsum. </BlogSmalltext>
                    </tbody>
                    </table>

                </FirstBlog>
                end of Blogs
                
            </BlogWrapper>
        </BlogContainer>
        </>
    )
}
export default Blog;

