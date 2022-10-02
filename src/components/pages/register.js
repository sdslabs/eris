import React from 'react'
import Textbox from '../Textbox'
import Button from '../Button'

const RegistrationPage = () => {
  return (
    <div className="registration_page">
        <form action="http://127.0.0.1:8080/register" method="post">
            <Textbox type="text" placeholder="E-Mail" />
            <Textbox type="password" placeholder="Password" />
            <Textbox type="passwordC" placeholder="Re-Enter Password" />
            <Button type="submit" value="Register"/>
        </form>
    </div>
  )
}

export default RegistrationPage;