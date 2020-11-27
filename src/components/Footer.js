import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="footer" style={{margin:"auto", width:"68%", background:"white", textAlign:"right"}}>
               <span style={{color:"black"}}>&#169; All rights reserved</span>
            </div>
        )
    }
}

export default Footer;