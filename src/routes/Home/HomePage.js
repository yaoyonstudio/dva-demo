import React from 'react';
import { connect } from 'dva';
import MainLayout from '../../components/layout/MainLayout'
import styles from './HomePage.scss';

const HomePage = ({example, dispatch}) => {
  return (
    <MainLayout title="首页">
      <div className={styles.Home}>
        <h1>Home Page</h1>
      </div>
    </MainLayout>
  );
}

HomePage.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    main: state.main
  }
}

export default connect(mapStateToProps)(HomePage);
