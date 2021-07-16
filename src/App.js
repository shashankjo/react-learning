import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EvenBind from './components/EvenBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import { Namelist } from './components/NameList';
import { Stylesheets } from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

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
       {/* <FunctionClick/>
       <ClassClick/> */}
       {/* <EvenBind/> */}
       {/* <ParentComponent /> */}
       {/* <UserGreeting/> */}
       {/* <Namelist /> */}
       {/* <Stylesheets primary = {true} /> */}
       <Inline />
       <h1 className='error'> Error </h1>
       <h1 className={styles.success}> Success </h1>
      </header>
    </div>
  );
}

export default App;
