// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
// import {Grid} from 'react-mdl';
import {Container, Row, Col} from 'react-bootstrap';
import formSpree from '../formSpree';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section id="contact">
         <div className="contact-bg" style={{width:'100%', margin:'auto'}}>
           <Container className="contact">
             <Row>
               <Col sm={4}>
                  <h1>
                    Get 
                    <br />
                    In 
                    <br />
                    Touch
                  </h1>
               </Col>
               <Col sm={8}>
                  <div className="contact-form">
                    <form
                        onSubmit={this.submitForm}
                        action={formSpree.form}
                        method="POST"
                        className="contact-input"
                      >
                        {/* <!-- add your custom form HTML here --> */}
                        <label>Email:</label>
                        <br />
                        <input className="contact-input" type="email" name="email" />
                        <br />
                        <label>Message:</label>
                        <br />
                        <textarea className="contact-input" type="text" name="message" />
                        <br />
                        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="contact-input">Submit</button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </form>
                  </div>
               </Col>
             </Row>
           
           </Container>
         </div>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}