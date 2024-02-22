import React from "react"


const Footer  = () => {

 return (<div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'gray'}}> 
    <div style={{ fontSize: '32px', padding: '32px', marginLeft: '92px', marginRight: '92px'}}>
        <a  style={{textDecoration: 'none', color: 'black'}} href="https://www.google.com/">About</a>
    </div>
    <div style={{color: 'black', fontSize: '32px', padding: '32px', marginLeft: '92px', marginRight: '92px'}}>
        
        <a style={{textDecoration: 'none', color: 'black'}} href="https://www.lawyers.com/">Legal</a>
    </div>
    <div style={{color: 'black', fontSize: '32px', padding: '32px', marginLeft: '92px', marginRight: '92px'}}>
        <a style={{textDecoration: 'none', color: 'black'}} href="https://www.indeed.com/">Careers</a>
    </div>
    <div style={{color: 'black', fontSize: '32px', padding: '32px', marginLeft: '92px', marginRight: '92px'}}>
        <a style={{textDecoration: 'none', color: 'black'}} href="https://www.thephonebook.com">Contact</a>
    </div>
    </div>)
}    


export default Footer