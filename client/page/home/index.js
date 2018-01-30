import styles from  './index.less';

import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Layout, Menu, Icon, Button, Tabs } from 'antd';
import { connect } from 'react-redux';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class home extends Component {

  constructor(props) {
    super(props);

    props.dispatch({
      type: 'system/fetchMenu'
    })
  }

  renderMenu(menus) {
    return menus.map((item, index) => {
      const title = <span>{item.iconType && <Icon type={item.iconType} />}<span>{item.name}</span></span>
      if (item.items && item.items.length > 0) {
        return <SubMenu key={index} title={title}>
          {this.renderMenu(item.items)}
        </SubMenu>
      } else {
        return <Menu.Item key={index}>{title}</Menu.Item>
      }
    });
  }

  handleMenuClick(e) {
    const { dispatch } = this.props;
    dispatch({
      type: 'system/menuClick',
      payload: e.keyPath
    });
  }

  onTabChange(activeKey) {
    const { dispatch } = this.props;
    dispatch({
      type: 'system/tabChange',
      payload: activeKey
    });
  }

  onTabEdit(targetKey, action) {
    console.log(targetKey);
    console.log(action);
  }

  render() {
    const { tabs, tabActiveKey, menu, match } = this.props;
    return <Layout>
      <Sider
        trigger={null}
        collapsible
        width={256}>
        <div className={styles.logo}>
          <h1>Ant Design</h1>
        </div>
        <Menu
          onClick={(e) => this.handleMenuClick(e)}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          {this.renderMenu(menu)}
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Tabs type="editable-card"
                hideAdd
                onEdit={(targetKey, action) => this.onTabEdit(targetKey, action)}
                activeKey={tabActiveKey}
                onChange={(activeKey) => this.onTabChange(activeKey)}>
            {tabs && tabs.map((item) => <TabPane tab={item.name} key={item.key} closable={! item.hideClose} />)}
          </Tabs>
        </Header>
        <Content style={{ minHeight: '280px' }}>{renderRoutes(this.props.route.routes)}</Content>
        <Footer></Footer>
      </Layout>
    </Layout>;
  }
}

function matchStateToProps(state) {
  const system = state.get('system');
  return {
    menu: system.get('menu'),
    tabs: system.get('tabs'),
    tabActiveKey: system.get('tabActiveKey')
  };
}

export default connect(matchStateToProps)(home);
