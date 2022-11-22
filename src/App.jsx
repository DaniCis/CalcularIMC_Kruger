import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header titulo='Indice de Masa Corporal'/>
      <div className='contenido'>
        <Card />
      </div>
    </div>
  );
}

export default App;
