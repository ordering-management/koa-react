import styles from './index.less';

import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Button, Table, Card } from 'antd';

const FormItem = Form.Item;

class CustomerList extends PureComponent {

  handleFormReset() {
    const { form } = this.props;
    form.resetFields();
  }

  // 通过查询按钮查询
  handleSearch(e) {
    e.preventDefault();
    this.doSearch(1)
  }

  doSearch(current) {
    const { dispatch, pageSize, form } = this.props;
    dispatch({
      type: 'customer/fetchCustomer',
      payload: {
        'name': (form && form.getFieldValue('name')) || '',
        'phone': (form && form.getFieldValue('phone')) || '',
        'pageNo': current,
        'pageSize': pageSize,
      }
    })
  }

  renderForm() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={(e) => this.handleSearch(e)} layout="inline">
        <Row gutter={24}>
          <Col md={8} sm={24} className={styles.formItemWrapper}>
            <FormItem label="客户姓名">
              {getFieldDecorator('name')(
                <Input placeholder="请输入" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24} className={styles.formItemWrapper}>
            <FormItem label="联系方式">
              {getFieldDecorator('phone')(
                <Input placeholder="请输入" />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <span className={styles.submitButtons}>
              <Button type="primary" loading={this.props.customerLoading} htmlType="submit">查询</Button>
              <Button style={{ marginLeft: 8 }} onClick={() => this.handleFormReset()}>重置</Button>
            </span>
          </Col>
        </Row>
      </Form>
    )
  }

  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'smingcheng',
        width: 100,
        fixed: 'left'
      },
      {
        title: '联系方式',
        dataIndex: 'sshouji',
      }, {
        title: '主题',
        dataIndex: 'hystatusname',
      }]
    return <Card>
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          {this.renderForm()}
        </div>
        <div className={styles.tableListOperator}>
          <Button icon="plus" type="primary">新建</Button>
        </div>
        <Table rowKey={(record) => record.sid}
               scroll={{ x: 1300 }}
               columns={columns}
               loading={false}
               dataSource={false} />
      </div>
    </Card>;
  }
}
//
// @Form.create()
export default Form.create()(CustomerList);
