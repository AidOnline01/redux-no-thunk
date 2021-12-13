import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increaseAsync } from './store/counter/api'; 

function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      {count}

      <div>
        <button onClick={() => dispatch({type: 'counter/increment', payload: 1})}>Add sync</button>
        <button onClick={() => increaseAsync()}>Add async</button>
      </div>
    </div>
  );
}

export default App;
