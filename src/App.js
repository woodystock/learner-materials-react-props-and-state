import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

// step 1
import { cats } from './data/cat-data'

// step 2
import CatCard from './components/CatCard'

function App() {

  console.log(cats)
  return (
    <>
      <Navbar />
      <Header props={cats}/>

      <main>
        <div className="cards__wrapper">

          {cats.map(cat => {
            return (
              <CatCard {...cat}/>
            )
          })}

        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
