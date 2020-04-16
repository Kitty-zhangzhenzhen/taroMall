import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';

import './index.scss';

export default class Channel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // console.log('preload: ', this.$router.preload)
    // console.log('这里是个人中心',this.$router.params)
  }

  componentDidMount() { 
   
  }


  state = {
    loaded: true,
    showMobile: true
  }

  render() {
   
    return (
      <View className='container'>
        订单管理
      </View >
    )
  }
}
