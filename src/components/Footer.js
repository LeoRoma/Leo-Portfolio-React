import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="footer" style={{margin:"auto", width:"100%", background:"white", textAlign:"center"}}>
               <span style={{color:"black"}}>&#64; All rights reserved</span>
            </div>
        )
    }
}

export default Footer;