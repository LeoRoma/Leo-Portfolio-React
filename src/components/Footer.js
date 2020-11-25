import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="footer" style={{margin:"auto", width:"100%", background:"black", textAlign:"center"}}>
               <span style={{color:"white"}}>&#64; All rights reserved</span>
            </div>
        )
    }
}

export default Footer;