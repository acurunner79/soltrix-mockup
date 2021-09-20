import React from 'react'
import '../styles/contact.css'

const Contact = () => {
    return (
        <div id="contact-main-container">
            <h1>Contact Page</h1>
            <form>
                <label className ="form-title">Name<br/>
                    <input className="form-input"
                        type="name"
                        name ="name"
                        placeholder=" (Required)">
                    </input>
                </label>
                    <br/>
                <label className ="form-title">Email<br/>
                    <input className="form-input"
                        type="email"
                        name="email"
                        placeholder=" (Required)">
                    </input>
                </label>
                    <br/>
                <label className ="form-title">Subject<br/>
                    <input className="form-input"
                        type="name"
                        name="subject"
                        placeholder=" (Required)">
                    </input>
                </label>
                    <br/>
                <label className ="form-title">Message<br/>
                    <textarea
                        id="message"
                        name="message"
                        placeholder=" How can we help you?">
                    </textarea>
                </label>
                    <br/>
                <button className="button">Submit</button><br/>
            </form>
        </div>
    )
}

export default Contact
