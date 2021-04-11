import './App.css';
import Main from './Components/MainComponent'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './Redux/configureStore';


const store = configureStore();

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
