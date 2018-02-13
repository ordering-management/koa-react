import React, { PureComponent } from 'react';
import DescriptionList from '../../components/DescriptionList';
import { Card } from 'antd';
import { connect } from 'react-redux';

const { Description } = DescriptionList;

class Detail extends PureComponent {

  constructor(props) {
    super(props);

    props.dispatch({
      type: 'detail/initDetail',
      payload: props.match.params.key
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.key !== this.props.match.params.key) {
      this.props.dispatch({
        type: 'detail/initDetail',
        payload: newProps.match.params.key
      });
    }
  }

  render() {
    const { cache } = this.props;
    console.log(cache);
    if (! cache) {
      return null;
    }
    const config = cache.get('config');
    const data = cache.get('data');
    if (! config || ! data) {
      return null;
    }
    // const data = cache.get('data');
    return <div>
      {
        config.map((content, index) => <Card key={index} style={{ margin: '20px 30px' }}>
          <DescriptionList size="large" style={{ marginBottom: 32 }}>
            {
              content.map((item, itemIndex) => <Description term={item.title}>{data[item.dataIndex]}</Description>)
            }
          </DescriptionList>
        </Card>)
      }
    </div>
  }
}

function matchStateToProps(state, props) {
  const detailCache = state.get('detailCache')
  return {
    cache: detailCache.get(props.match.params.key),
    id: detailCache.get('id')
  }
}

export default connect(matchStateToProps)(Detail);
