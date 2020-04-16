import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, Block, Image, SwiperItem } from '@tarojs/components'
import './index.scss'

export default class Swipers extends Component {
    constructor(props){
        super(props)
    }
    bindonChnage(e) {
        // console.log('子组件',e.detail.current)
        this.props.swiperChange(e.detail.current);
    }
    state = {
    
    }
    render() {
        const { list } = this.props;
        console.log(this.props)
        return (
            <View className='comp-loading'>
                <Swiper circular onChange={this.bindonChnage} autoplay className="swiperContainer">
                    <Block>
                        {list.map((item) => (
                            <SwiperItem className="swiper_inner" key={item.absolute_img_url}>
                                <Image src={item.absolute_img_url}></Image>
                            </SwiperItem>
                        ))}
                    </Block>
                </Swiper>
            </View>
        )
    }
}

