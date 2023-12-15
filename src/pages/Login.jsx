import React from 'react'
import '../style/Login.css'

export default function Login() {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* <!-- Tabs Titles --> */}

        {/* <!-- Icon --> */}
        <div className="fadeIn first">
          <h1>Login</h1>
        </div>

        {/* <!-- Login Form --> */}
        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

      </div>

    </div>


  )
}
