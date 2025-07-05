import PropTypes from 'prop-types';
import styles from './Description.module.css';

function Description({ title, text }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

Description.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Description;
