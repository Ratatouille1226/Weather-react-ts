import styles from './app.module.css';
import { Widget } from './components/widget/Widget';

function App() {

  return (
      <div className={styles.app}>
        <Widget />
      </div>
  )
}

export default App
