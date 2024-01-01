import logo from './logo.svg';
import './App.css';
import Display from './component/Display';
import AlphabetButton from './component/AlphabetButton';
import { Provider } from 'react-redux';
import store from './reduxState/store'
import MainPage from './page/MainPage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <MainPage/>
      </Provider>
    </div>
  );
}

export default App;
