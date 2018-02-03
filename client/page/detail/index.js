import React, { PureComponent } from 'react';
import DescriptionList from '../../components/DescriptionList';
import { Card } from 'antd';

const { Description } = DescriptionList;

class Detail extends PureComponent {

  

  render() {
    return <div>
      <Card style={{ margin: '20px 30px' }}>
        <DescriptionList size="large" style={{ marginBottom: 32 }}>
          <Description term="用户姓名">付小小</Description>
          <Description term="联系电话">18100000000</Description>
          <Description term="常用快递">菜鸟仓储</Description>
          <Description term="取货地址">浙江省杭州市西湖区万塘路18号</Description>
          <Description term="备注">无</Description>
        </DescriptionList>
      </Card>
    </div>
  }
}

function matchStateToProps(state, props) {

}

export default Detail;
