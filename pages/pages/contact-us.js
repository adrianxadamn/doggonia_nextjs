import React, { useRef } from 'react';
import { getPage } from '@/lib/shopify';
import Button from '@/components/button';
const ContactUsPage = ({pageData}) => {

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  
  const submitForm = async (e) => {
    e.preventDefault();

    fetch('/api/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        message: messageRef.current.value,
      })
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    });
  }

  return (
    <div className="basicPage">
      <h1>{pageData.title}</h1>
      <form onSubmit={(e) => submitForm(e)} className="form">
        <div className="input-group--wrapper">
          <div className="input-group">
            <input className="input" name="contact[name]" type="text" placeholder="Name" ref={nameRef} />
          </div>
          <div className="input-group">
            <input className="input" name="contact[email]" type="email" placeholder="Email" ref={emailRef} />
          </div>
        </div>
        <div className="input-group">
          <input className="input" name="contact[phone]" type="phone" placeholder="Phone Number" ref={phoneRef} />
        </div>
        <div className="input-group">
          <textarea className="textarea" name="contact[body]" placeholder="Message" ref={messageRef} />
        </div>
        <div className="form-submit-btn">
          <Button>Send</Button>
        </div>
      </form>
    </div>
  );
};

export async function getStaticProps() {
  const pageData = await getPage('contact-us');
  return {
    props: {
      pageData,
      handle: pageData.handle
    },
  }
}


export default ContactUsPage;