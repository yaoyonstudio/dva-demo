import React from 'react';
import { connect } from 'dva';

function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
}

TestPage.propTypes = {
};

export default connect()(TestPage);
