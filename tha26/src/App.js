import './App.css'
import { entername,enteremail } from './actions';
import {useSelector,useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.statesReducer)
  return (
    <div className="App">
    <h1>Input</h1>
     <input type="text" name="name" 
     placeholder="Enter your name"
     onChange={dispatch(entername())}/>

     <input type="email" name="email" 
     placeholder="Enter your email"
     onChange={dispatch(enteremail())}/>

     {state}
    </div>
  );
}

export default App;
