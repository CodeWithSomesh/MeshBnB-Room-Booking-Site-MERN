import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="mt-4 grow flex flex-col items-center justify-center mb-32">
      <h1 className="text-4xl text-center mb-4">Login</h1>
      <form className="max-w-md mx-auto">
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button className="primary">Login</button>
        <Link to={'/register'}></Link>
      </form>
    </div>
  )
}

export default LoginPage