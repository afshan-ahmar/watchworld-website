import React from "react"
const contact = () => {
  return (
    <div>
      <section className="Contact-Form">
        <h2 className="fade-in">Contact Us</h2>
        <form className='form-input'>
          <input type="text" placeholder="Full Name" required className='form-1'/>
          <input type="email" placeholder="Email Address" required/>
          <input type="text" placeholder="Phone Number"/>
          <textarea placeholder="Your Message" rows={5} required></textarea>
<button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default contact