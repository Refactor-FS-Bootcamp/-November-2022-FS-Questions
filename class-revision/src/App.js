import './App.css';
import ParentLifecycle from './components/ParentLifecycle';
// import Greetings from './components/Greetings';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greetings lang="JavaScript">Language of the Web</Greetings>
      <Greetings lang="Golang" />
      <Greetings lang="Swift">Language for iOS apps</Greetings>
      <hr />
      <Welcome name="Nabendu" />
      <Welcome name="Mousam">CSS Trainer</Welcome>
      <Welcome name="Hari">JS Trainer</Welcome> */}
      <ParentLifecycle />
    </div>
  );
}

export default App;
