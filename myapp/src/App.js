import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

// import Textform from './components/Textform';


function App() {
  return (
    <>

      <Navbar title="TextBuilder" />
      <div className='container my-3'>
        {/* <Textform heading= "Enter your Query"/> */}
        <About/>
      </div>
    </>

  );
}

export default App;
