import React, { PureComponent } from 'react';

class Permission extends PureComponent {
  render() {
    const { children } = this.props;
    return <div>
      {children}
    </div>
  }
}

export default Permission;
