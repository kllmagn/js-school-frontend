import { Header } from './Header';
import { Main } from './Main';
import styles from './App.module.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';

function App() {
 
  return (
    <div className={styles.app}>
    <Provider store={store}>
      <Header />
      <Main />
      </Provider>
    </div>
  );
}

export default App;
