import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import RedPackets from '../../components/packets'
import './index.scss';
import Rain from '../../components/rain';

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // console.log('preload: ', this.$router.preload)
        // console.log('这里是个人中心',this.$router.params)
    }

    componentDidMount() {

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
        navigationBarTitleText: '活动管理'
    }
    state = {
        loaded: true,
        showMobile: true
    }



    formSubmit(e) {
        console.log(e)
    }
    emits(){
        console.log(1010)
    }
    render() {
        let showRedPackets = true;
        return (
            <View className='container'>
                 <Rain emits={this.emits} />
                {/* <RedPackets
                    show={showRedPackets}
                    count={60} /> */}
                {/* <View className="getward">抽奖了</View> */}
            </View >
        )
    }
}
