import React from 'react'
import photo from '../components/images/logo_happytails.png'
import { Dogs, HomePageHeader } from "../dogs"


function Adopt() {
    return (
        
        <div className="wrapper">
            <h1 className="pagetitle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', color: 'red' }}>
                Adopt page</h1>
            <Dogs />
           
            </div>
    )
}
export default Adopt;
