import './App.css';
import icon from './cat.png'

function App() {
  return (
    <>
      <nav className="nav__container nav sticky content">
        <ul className="nav__container nav ul">
          <li><a className="links" href="home">Home</a></li>
          <li><a className="links" href="mews">Mews</a></li>
          <li><a className="links" href="contact">Contact</a></li>
          <li><a className="links" href="https://www.cats.org.uk/sponsor">About</a></li>
        </ul>
      </nav>

      <header className="header">
        <h1 className="header__title">Welcome to React!</h1>
      </header>

      <main>
        <div className="cards__wrapper">
          <div className="card">
            <h2 className="card__text card__header">Cindy Clawford</h2>
            <img className="card__image" src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="A cute tabby kitten"></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Mice</p>
            <p className="card__text">Birth Year: 2012</p>
          </div>

          <div className="card">
            <h2 className="card__text card__header">Little Miss Purrfect</h2>
            <img className="card__image" src="https://learnwebcode.github.io/json-example/images/cat-2.jpg" alt="A gray fluffy kitten"></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Wet food, dry food</p>
            <p className="card__text">Birth Year: 2016</p>
          </div>

          <div className="card">
            <h2 className="card__text card__header">El Taco</h2>
            <img className="card__image" src="https://i.imgflip.com/mh1vd.jpg" alt="A cat wearing a sombrero, drinking tequila"></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): tequila, bar snax</p>
            <p className="card__text">Birth Year: 1995</p>
          </div>

          <div className="card">
            <h2 className="card__text card__header">Mr Gwumpy</h2>
            <img className="card__image" src="https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg" alt="A grumpy cat, frowning angrily"></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Caviar</p>
            <p className="card__text">Birth Year: 1984</p>
          </div>
        </div>
      </main>

      <footer>
        <section className="nav__container footer">
          <ul className="footer__section ul">
            <li><a className="links" href="https://www.cats.org.uk/sponsor">About</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Belly Rubs</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Donate</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Cat Nip</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Customers</a></li>
          </ul>
          <ul className="footer__section ul">
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Resources</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Dogs</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Blog</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">eBooks</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Revenge</a></li>
          </ul>
          <ul className="footer__section ul">
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Contact</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Help</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Meow</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Mice</a></li>
          </ul>
          <ul className="footer__section ul">
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Ts &amp; Cs</a></li>
            <li><a className="links" href="https://www.cats.org.uk/sponsor">Privacy Policy</a></li>
            <li className="links">&copy; 2021 TR Inc.</li>
            <i><img className="icon" src={icon} alt="A ginger cat silhouette" /></i>
          </ul>
        </section>
      </footer>
    </>
  );
}

export default App;
