import Taro, { Component, Config } from '@tarojs/taro';
import Index from './pages/index';
import '@tarojs/async-await';
import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '统一转发'
    }
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/personal/index',
      'pages/activity/index',
      'pages/order/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "color": "#999",
      "backgroundColor": "#fff",
      "selectedColor": "#db2721",
      "borderStyle": "white",
      "list": [{
        "text": "首页",
        "pagePath": "pages/index/index",
        "iconPath": "./static/tabs/tab_index_active.png",
        "selectedIconPath": "./static/tabs/tab_index.png"
      }, {
        "text": "活动",
        "pagePath": "pages/activity/index",
        "iconPath": "./static/tabs/tab_activity.png",
        "selectedIconPath": "./static/tabs/tab_activity_active.png"
      }, {
        "text": "订单",
        "pagePath": "pages/order/index",
        "iconPath": "./static/tabs/tab_order.png",
        "selectedIconPath": "./static/tabs/tab_order_active.png"
      }, {
        "text": "我的",
        "pagePath": "pages/personal/index",
        "iconPath": "./static/tabs/tab_personal.png",
        "selectedIconPath": "./static/tabs/tab_personal_active.png"
      }]
    },
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
