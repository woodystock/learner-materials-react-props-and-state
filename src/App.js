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
            <h3 className="card__text card__header">Mr Gwumpy</h3>
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
