
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Header from './components/Header';
import Textform from './components/Textform';
import {
BrowserRouter as Router,
Route,
Routes
} from 'react-router-dom'

function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
  }, 1500);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }
  
const toggleMode =(cls)=>{
  removeBodyClasses();
  document.body.classList.add('bg-'+cls)
  if (mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="#001d3a";
    showAlert('Dark mode has been Enabled','success');

    // document.title="TextUtils - Dark Mode";

    // setInterval(() => {
    //   document.title="Great Work"
    // }, 2000);
    // setInterval(() => {
    //   document.title="Good Job"
    // }, 1500);
   
  }
  
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert('Light mode has been Enabled','success');
    
    // document.title="TextUtils - Light Mode";
  }
}



  return (
    <div >
      <Router>
      <Header logoName="MyApp" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <Routes>
        <Route exact path='/about' element={<About mode={mode} />} />
          <Route exact path='/' element={<Textform showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode} homeName="Home" />} />
      </Routes>
       </div>
       </Router>
    </div>
  );
}

export default App;
