import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>

<Navbar title = "TextBuilder"/>
<div className='container my-3'>
<Textform heading= "Enter your Query"/>
</div>
    </>
  
  );
}

export default App;
