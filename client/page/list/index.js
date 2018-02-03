import styles from './index.less';
import React, { PureComponent } from 'react';
import { Table, Button, Card } from 'antd';
import { connect } from 'react-redux';

class List extends PureComponent {
  constructor(props) {
    super(props);

    props.dispatch({
      type: 'list/initList',
      payload: props.match.params.key
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.key !== this.props.match.params.key) {
      this.props.dispatch({
        type: 'list/initList',
        payload: newProps.match.params.key
      });
    }
  }

  actionButtonClick(item) {
    this.props.dispatch({
      type: 'list/actionClick',
      payload: item,
      key: this.props.match.params.key
    })
  }

  render() {
    const { cache, dispatch, match } = this.props;
    if (! cache) {
      return null;
    }
    const key = parseInt(this.props.match.params.key);
    const paginationProps = {
      current: 1,
      pageSize: 10,
      total: 100,
    };

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      selectedRowKeys: cache.get('selectedRowKeys'),
      onChange: (selectedRowKeys, selectedRows) => {
        dispatch({
          type: 'list/rowSelectionChange',
          payload: {
            key: match.params.key,
            selectedRowKeys,
            selectedRows
          }
        });
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
      }),
    };

    return <Card style={{ margin: '20px 30px' }}>
      <div className={styles.tableList}>
        <div className={styles.tableListOperator}>
          <Button.Group>
            {
              cache.get('actions').map((item, index) => <Button key={index} onClick={() => this.actionButtonClick(item)}>{item.title}</Button>)
            }
          </Button.Group>
        </div>
        <Table rowKey={(record, index) => index}
               scroll={{ x: 1300 }}
               columns={cache.get('table_columns')}
               dataSource={cache.get('data') || []}
               pagination={paginationProps}
               rowSelection={rowSelection} />
      </div>
    </Card>;
  }
}

function matchStateToProps(state, props) {
  const listCache = state.get('listCache');
  return {
    cache: listCache.get(props.match.params.key)
  }
}

export default connect(matchStateToProps)(List);
