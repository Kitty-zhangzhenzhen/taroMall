import Taro, { Component, Config } from '@tarojs/taro'
import { View, Form, Button, Input } from '@tarojs/components'
import { Loading } from '../../components/loading'
import { Swipers } from '../../components/swipers/index'
import fetch from "@utils/request"
import { API_LOGIN } from "@constants/api"
import './index.scss';



export default class Index extends Component {
  // constructor(props) {
  //   super(props);
  // }


  componentWillMount() {
    // console.log(encodeURIComponent('https://d-salesdevmini.yili.com:23443/?saleman_code=00124961&saleman_name=%E9%BB%84%E9%9D%99'))
    const params = decodeURIComponent(this.$router.params.q);
    
    console.log(params)
    this.wxLogin()

    // console.log('componentWillMount')
  }

  componentDidMount() {
    // this.wxLogin()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  state = {
    loaded: false,
    showMobile: true,
    list: [{ "img_url": "/files/bizpic/202003/202003032052381139.jpg", "absolute_img_url": "https://d-salesdevmoney.yili.com:23443/files/bizpic/202003/202003032052381139.jpg", "img_text": "kvGoast", "sort": 1, "link_url": "../kvGoast/kvGoast", "id": "1", "delete_flag": 0 }, { "img_url": "/files/bizpic/202002/202002251151059645.png", "absolute_img_url": "https://d-salesdevmoney.yili.com:23443/files/bizpic/202002/202002251151059645.png", "img_text": "kvSai", "sort": 2, "link_url": "../kvSai/kvSai", "id": "1231471082318467072", "delete_flag": 0 }, { "img_url": "/files/bizpic/202003/202003032045311893.jpg", "absolute_img_url": "https://d-salesdevmoney.yili.com:23443/files/bizpic/202003/202003032045311893.jpg", "img_text": "帮助中心", "sort": 3, "link_url": "../hpCenter/hpCenter", "id": "1234822275983872000", "delete_flag": 0 }, { "img_url": "/files/bizpic/202003/202003081612188717.png", "absolute_img_url": "https://d-salesdevmoney.yili.com:23443/files/bizpic/202003/202003081612188717.png", "img_text": "注销员福利", "sort": 4, "link_url": "../kvWelfare/kvWelfare", "id": "1236565637237706752", "delete_flag": 0 }]
  }
  getCode() {
    return new Promise((resolve, reject) => {
      Taro.login({
        success: res => {
          resolve(res.code)
        },
        fail: err => {
          reject(err)
          // errRequest('获取微信登录code失败')
        },
        complete: (msg) => {
          console.log(msg, 'msg')
        }
      })
    })
  }
  async wxLogin() {
    let code = await this.getCode();
    console.log(code)
    // Taro.redirectTo({
    //   url:'../personal/index?id=10'
    // })
    // console.log('host',HOST)
    // let res = await fetch({ url: API_LOGIN, payload: { code: code }, method: 'POST', showToast: false, autoLogin: false });

  }

  formSubmit(e) {
    console.log(e)
  }
  getPhoneNumber = (e) => {
    console.log(11, e)
  }
  agreeAuth = () => {
    console.log(Taro)
    Taro.getUserInfo().then((res) => {
      console.log(res)
      const { errMsg, userInfo } = res
      if (errMsg === 'getUserInfo:ok') {
        Taro.showToast({
          title: `微信昵称: ${userInfo.nickName}`,
          icon: 'none'
        })
      } else {
        Taro.showToast({
          title: '授权失败',
          icon: 'none'
        })
      }
    })
  }
  swiperChange(e) {
  }
  // onShareAppMessage (res) {
  //   if (res.from === 'button') {
  //     // 来自页面内转发按钮
  //     console.log(res.target)
  //   }
  //   return {
  //     title: '首页转发'
  //   }
  // }
  render() {
    const list = this.state.list;

    if (this.state.loaded) {
      return <Loading />
    }
    return (
      <View className='container'>
        <Swipers list={list} swiperChange={this.swiperChange}></Swipers>
        <Button
          open-type='getUserInfo'
          onGetUserInfo={this.agreeAuth}
        >微信登录</Button>
        <Form onSubmit={this.formSubmit.bind(this)}>
          <View className="input_outer">
            <View className="input_left">助销员姓名</View>
            <Input type="text" placeholder="请输入姓名" maxLength="20" name="shopping_guide_name" placeholder-class="input"></Input>
          </View>
          <View className="input_outer phone">
            {this.state.showMobile && <Button className="activity_get_mobile" hover-class="none" open-type="getPhoneNumber" onGetPhoneNumber={this.getPhoneNumber}>0000</Button>}
            <View className="input_left">手机</View>
            <Input type="text" name="phone" placeholder="请授权手机号码" maxLength="20" value="{{formObj.shopping_guide_mobile}}" placeholder-class="input" disabled="true"></Input>

          </View>
          <Button form-type="submit">提交</Button>
        </Form>
      </View >
    )
  }
}
