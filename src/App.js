import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/* <Message/>
        <Greet name="Bruce" heroName="Batman"> 
          <p>This is children</p>
       </Greet>
       <Welcome name="Bruce" heroName="Batman"/>
       <Greet name="Clark" heroName="Superman"> 
        <button> Action </button>
       </Greet>
       
       <Greet name="Diana" heroName="Wonder woman"/>
       <Welcome name="Clark" heroName="Superman"/>
       <Welcome name="Diana" heroName="Wonder woman"/> */}
       <FunctionClick/>
       <ClassClick/>
      </header>
    </div>
  );
}

export default App;
