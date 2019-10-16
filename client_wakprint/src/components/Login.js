import React from 'react'
import Navbar from './Navbar'
import { Redirect } from 'react-router-dom'

const Login = (props) => {
  const goToRedirect = () => {
    props.history.push("/register")
  }
  return (
    <div className="bg-gray-100" style={{ height: "100%", minHeight: "100vh" }}>
      <Navbar
        goTo="Daftar Disini"
        goToRedirect={() => goToRedirect()}></Navbar>
      <div className="sm:flex sm:pt-32 pt-24">
        <div className="sm:w-1/2 px-8 invisible sm:invisible md:visible">Img</div>
        <div className="sm:w-1/2 px-8">
          <div className="text-2xl font-medium text-gray-800 text-center">
            Masuk Mitra WakPrint
          </div>
          <form className="items-center">
            <label className="block text-md uppercase font-base text-gray-700 py-2">
              E-Mail
              <input
                type="text"
                name="email"
                id="email"
                className="w-full border-primary rounded-lg py-2 px-3" />
            </label>
            <label
              className="block text-md uppercase font-base text-gray-700 py-2">
              Kata Sandi
              <input type="password" name="password" id="password" className="w-full border-primary rounded-lg py-2 px-3" />
            </label>
            <div className="flex text-xs font-base text-gray-800 justify-center my-3">
              <p>Belum punya akun?</p>
              <a className="ml-1 text-primary"> Daftar</a>
            </div>
            <input
              type="submit"
              value="masuk"
              className="btn btn-primary uppercase text-lg text-medium w-full" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login