function Navbar() {
    return (
        <nav className="nav__container nav sticky content">
            <ul className="nav__container nav ul">
                <li><a className="links" href="home">Home</a></li>
                <li><a className="links" href="mews">Mews</a></li>
                <li><a className="links" href="contact">Contact</a></li>
                <li><a className="links" href="https://www.cats.org.uk/sponsor">About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;