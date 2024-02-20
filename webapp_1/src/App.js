import './background.css';
import Welcometxt from './components/welcome';
import Propagation from './components/stopropagation';


function App() {
  return (
    <div className="bg">
      <h3>My First Web App</h3>
      <Welcometxt name="Isaipriya" age="23" city="Trichy"/>
      <Propagation />
      <button onClick= "handleHeaderClick()">Propagation Link</button>

    </div>
  );
}

export default App;
