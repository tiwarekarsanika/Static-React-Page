export default function Header(){
    return(
        <header>
            <nav className="nav">
                <img src={require('./reactLogo.png')} alt="React Logo" width="80px" height="70px" id="logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

