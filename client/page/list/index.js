import styles from './index.less';
import React, { PureComponent } from 'react';
import { Table, Button, Card } from 'antd';

const listMapping = {
  1: {
    table_columns: [
      {
        title: '姓名',
        dataIndex: 'smingcheng',
        width: 100,
        fixed: 'left'
      },
      {
        title: '会员号',
        dataIndex: 'sshouji',
      }, {
        title: '会员角色',
        dataIndex: 'hystatusname',
      },],
    actions: [
      { title: '审核', action: '/api/approve' }
    ],
    source: '/api/customers'
  },
  2: {
    table_columns: [
      {
        title: '姓名',
        dataIndex: 'smingcheng',
        width: 100,
        fixed: 'left'
      },
      {
        title: '推荐人',
        dataIndex: 'stuijianren',
      }],
    actions: [
      { title: '审核', action: '/api/approve' }
    ],
    source: '/api/customers'
  },
  3: {
    table_columns: [
      {
        title: '姓名',
        dataIndex: 'smingcheng',
        width: 100,
        fixed: 'left'
      },
      {
        title: '手机号',
        dataIndex: 'sshouji',
      }, {
        title: '会员角色',
        dataIndex: 'hystatusname',
      }],
    actions: [
      { title: '审核', action: '/api/approve' }
    ],
    source: '/api/customers'
  },
  4: {
    table_columns: [
      {
        title: '姓名',
        dataIndex: 'smingcheng',
        width: 100,
        fixed: 'left'
      },
      {
        title: '手机号',
        dataIndex: 'sshouji',
      }, {
        title: '会员角色',
        dataIndex: 'hystatusname',
      },{
        title: '手机号',
        dataIndex: 'sshouji',
      }, {
        title: '会员角色',
        dataIndex: 'hystatusname',
      },{
        title: '手机号',
        dataIndex: 'sshouji',
      }, {
        title: '会员角色',
        dataIndex: 'hystatusname',
      }],
    actions: [
      { title: '审核', action: '/api/approve' }
    ],
    source: '/api/customers'
  }
}

class home extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps.match.params.key);
  }

  render() {
    const key = parseInt(this.props.match.params.key);
    const paginationProps = {
      current: 1,
      pageSize: 10,
      total: 100,
    };
    return <Card style={{ margin: '20px 30px' }}>
      <div className={styles.tableList}>
        <div className={styles.tableListOperator}>
          <Button.Group>
            <Button>浏览</Button>
            <Button>增加</Button>
            <Button>修改</Button>
            {
              listMapping[key].actions && listMapping[key].actions.map((item, index) => <Button key={index}>{item.title}</Button>)
            }
          </Button.Group>
        </div>
        <Table rowKey={(record, index) => index}
               scroll={{ x: 1300 }}
               columns={listMapping[key].table_columns}
               dataSource={[]}
               pagination={paginationProps} />
      </div>
    </Card>;
  }
}

export default home;
