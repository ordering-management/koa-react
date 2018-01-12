import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config'

class home extends PureComponent {
  render() {
    return <div>home{renderRoutes(this.props.route.routes)}</div>;
  }
}

export default home;
