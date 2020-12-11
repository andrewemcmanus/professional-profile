import { Link } from 'react-router-dom';

function NavBar () {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </ul>
  )
}


export default NavBar;
