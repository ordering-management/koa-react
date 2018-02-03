import styles from './index.less';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FooterToolBar from '../../components/FooterToolbar';
import { Form, Row, Col, Input, Button, Icon, Card } from 'antd';

const FormItem = Form.Item;

class Edit extends PureComponent {
  constructor(props) {
    super(props);

    props.dispatch({
      type: 'edit/initEdit',
      payload: props.match.params.key
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.key !== this.props.match.params.key) {
      this.props.dispatch({
        type: 'edit/initEdit',
        payload: newProps.match.params.key
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { form, cache, match, dispatch, id } = this.props;
    form.validateFields((err, values) => {
      if (! err) {
        dispatch({
          type: 'edit/submit',
          payload: {
            url: cache.source + '/' + id,
            params: values
          },
          key: match.params.key
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { cache } = this.props;
    if (! cache) {
      return null;
    }

    return <div className={styles.editPage}>
      <Form>
        {
          cache.config.map((content, index) => <Card style={{ margin: '20px 30px' }} key={index}>
            <Row gutter={24}>
              {content.map((item, itemIndex) => <Col lg={8} md={12} sm={24} className='formItemWrapper' key={itemIndex}>
                <FormItem label={item.title}>
                  {getFieldDecorator(item.dataIndex)(
                    <Input placeholder="请输入" />
                  )}
                </FormItem>
              </Col>)}
            </Row>
          </Card>)
        }
      </Form>
      <FooterToolBar>
        <Button onClick={() => {
          this.props.dispatch({
            type: 'system/tabRemove',
            payload: 'edit' + '/' + this.props.match.params.key
          })
        }}>
          取消
        </Button>
        <Button type="primary" onClick={(e) => this.handleSubmit(e)}>
          提交
        </Button>
      </FooterToolBar>
    </div>
  }
}

function matchStateToProps(state, props) {
  const editCache = state.get('editCache');
  return {
    cache: editCache.get(props.match.params.key),
    id: editCache.get('id')
  }
}

export default connect(matchStateToProps)(Form.create()(Edit));
