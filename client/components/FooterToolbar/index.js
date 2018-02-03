import styles from  './index.less';
import React, { Component } from 'react';

export default class FooterToolbar extends Component {
  render() {
    const { children, extra, ...restProps } = this.props;
    return (
      <div
        className={styles.toolbar}
        {...restProps}
      >
        <div className={styles.left}>{extra}</div>
        <div className={styles.right}>{children}</div>
      </div>
    );
  }
}
