import React, { useState } from 'react'
import "./footer.scss"
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BusinessIcon from '@mui/icons-material/Business';

function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = () => {
    console.log("submit", email)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setEmail(event.target.value)
  }
  return (
    <div className='footer'>
        <div className='footer__info'>
          <h3>How many % you know about the World?</h3>
          <ul>
            <li>View the world</li>
            <li>Regions</li>
            <li>Continents</li>
            <li>Oceans</li>
          </ul>
        </div>

        <div className='footer__contact' id="contact">
          <p>Sending us your email, we always ready to clean up your questions</p>
          <div className='footer__contact__sendEmail'>
            <input type="email" onChange={handleChange} value={email}/>
            <SendIcon onClick={handleSubmit} className="footer__contact__sendEmail__icon"/>
          </div>
          <p className='footer__contact__copyRight'>Copyright © 2022 TramTran</p>
        </div>

        <div className='footer__socialIcons'>
          <GitHubIcon className='footer__socialIcons__icon'/>
          <LinkedInIcon className='footer__socialIcons__icon'/>
          <BusinessIcon className='footer__socialIcons__icon'/>
        </div>
    </div>
  )
}

export default Footer