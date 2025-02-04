import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <div>OOPS! Seems like you're lost. Wanna go back to the home page?</div>
        <Link to="/">Home</Link>            
    </div>
  )
}

export default NotFound