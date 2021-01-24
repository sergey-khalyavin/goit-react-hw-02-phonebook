import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, id, number, onRemove }) => {
  return (
    <li key={id} className={styles.item}>
      <p>
        {name}: {number}
      </p>
      <section className={styles.section__btn}>
        <button type="button" onClick={onRemove}>
          Delete
        </button>
      </section>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
