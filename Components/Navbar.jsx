import { Link } from "react-router-dom"

function Navbar () {
    return (
        <div id="navbar">
        {/* navigation here  */}
       <Link to = "/blue">Blue</Link>
       <Link to = "/red">Red</Link>
       <Link to = "/">Home</Link>
     </div>
    )
}

export default Navbar