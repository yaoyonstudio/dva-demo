import React from 'react';
import styles from './Common.scss'

const AppHeader = ({title}) => {
  return (
    <div className={styles.AppHeader}>
      <h2>{title}</h2>
    </div>
  );
};

AppHeader.propTypes = {
};

export default AppHeader;
