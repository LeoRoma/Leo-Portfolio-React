// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import {Grid} from 'react-mdl';
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
         <div style={{width:'100%', margin:'auto'}}>
           <Grid>
           <div className="contact">
            <form
                onSubmit={this.submitForm}
                action={formSpree.form}
                method="POST"
                className="contact-input"
              >
                {/* <!-- add your custom form HTML here --> */}
                <label>Email:</label>
                <input className="contact-input" type="email" name="email" />
                <label>Message:</label>
                <input className="contact-input" type="text" name="message" />
                {status === "SUCCESS" ? <p>Thanks!</p> : <button className="contact-input">Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
           </Grid>
         
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