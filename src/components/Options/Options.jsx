import PropTypes from 'prop-types';
import styles from './Options.module.css';

function Options({ options, onLeaveFeedback, onReset, hasFeedback }) {
  return (
    <div className={styles.container}>
      {options.map(option => (
        <button
          key={option}
          className={styles.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
      {hasFeedback && (
        <button className={styles.reset} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  hasFeedback: PropTypes.bool.isRequired,
};

export default Options;
