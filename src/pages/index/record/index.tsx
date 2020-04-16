import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'
export default class Record extends Component {
    static defaultProps = {
        list: []
    }
    render(){
        const {list}=this.props
        return(
            <View>
                <ScrollView scrollY className="scroll_view">
                   
                </ScrollView>
            </View>
        )
    }
}