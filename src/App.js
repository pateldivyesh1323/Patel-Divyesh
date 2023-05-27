import './App.css';
import Skills from './Components/Skills';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {

  const reveal =()=>{
    var reveals = document.querySelectorAll('.reveal');

    for(let i=0;i<reveals.length;i++)
    {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 70;
      if(revealTop<windowHeight - revealPoint){
        reveals[i].classList.add('active');
      }
      else
      {
        reveals[i].classList.remove('active');
      }
    }
  }

  return (
    <div className="App">
      <Navbar reveal={reveal}/>
      <Home reveal={reveal}/>
      <Skills reveal={reveal}/>
      <Projects />
    </div>
  );
}

export default App;
