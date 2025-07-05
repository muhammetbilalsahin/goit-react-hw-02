import PropTypes from 'prop-types';
import styles from './Notification.module.css';

function Notification({ message }) {
  return <p className={styles.message}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
