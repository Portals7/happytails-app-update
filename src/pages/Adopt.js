import React from 'react'

import { Dogs } from "../dogs"


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
