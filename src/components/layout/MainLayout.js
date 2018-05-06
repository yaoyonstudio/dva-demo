import React from 'react';
import AppHeader from '../common/AppHeader'
import AppTabMenu from '../common/AppTabMenu'
import styles from './Layout.scss'

const MainLayout = ({title, children}) => {
  return (
    <div className={styles.MainLayout}>
      <AppHeader title={title} />
      <div className={styles.Main}>
        {children}
      </div>
      <AppTabMenu />
    </div>
  );
};

MainLayout.propTypes = {
};

export default MainLayout;
