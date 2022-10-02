import React from 'react'
import Textbox from '../Textbox'
import Button from '../Button'

const LoginPage = () => {
  return (
    <div className="login_page">
        <form action="http://127.0.0.1:8080/login" method="post">
            <Textbox type="text" placeholder="E-Mail" />
            <Textbox type="password" placeholder="Password" />
            <Button type="submit" value="Login"/>
        </form>
    </div>
  )
}

export default LoginPage;