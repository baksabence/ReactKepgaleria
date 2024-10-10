import './App.css';
import { adatLISTA } from './adat.js';
import Kiskep from './galeria_komponensek/Kiskep.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <main className="App-main row">
        <div className="fokep">
          <h3>"Spring in Japan"</h3>
          <Kiskep adat = {{src: "./kepek/kep2.jpg", alt: "valahol Japánban"}} key = {0}/>
          <p>nagyon szépséges</p>
          <div className="kiemelt">
          <Kiskep adat = {{src: "./kepek/kep5.jpg", alt: "valahol Japánban"}} key = {1}/>
          </div>
          
        </div>

        <div className="galeria">
          {adatLISTA.map((elem, index) =>{
            return (<Kiskep adat = {elem} key={index} />)
          })}
        </div>
      </main>
      <footer>
        <p>Baksa Bence</p>
      </footer>
    </div>
  );
}

export default App;
