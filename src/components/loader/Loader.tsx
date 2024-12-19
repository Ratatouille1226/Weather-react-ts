import { Eclipse } from "react-loading-io";
import styles from './loading.module.css';

export const Loader = () => {

    return <Eclipse className={styles.loading} sixe={64} />
}