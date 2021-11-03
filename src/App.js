import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <main>
        <div className="cards__wrapper">

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

     <Footer />
    </>
  );
}

export default App;
