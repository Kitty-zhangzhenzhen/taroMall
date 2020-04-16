import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { observer } from '@tarojs/mobx';

import redPacket from './imgs/redPacket.png';

import './index.module.scss';
import './index.css'

interface Packets {
  angle: number,
  marginTop: number,
  marginLeft: number,
  width: number,
  height: number,
  animation: number,
}

const RedPackets = (props: { show: boolean, count: number }) => {
  const initPacketArr: Packets[] = [];
  const { show, count } = props;

  const [packets, setPackets] = Taro.useState(initPacketArr);

  Taro.useEffect(() => {
    if (show) {
      // setInterval(()=>{
        dropRedPackets();
      // },2000)
      
    }
  }, [show])

  const dropRedPackets = () => {
    const arr: Packets[] = [];
    for (var i = 0; i < count; i++) {
     
      // const shijian = Math.floor(Math.random() * (200 - 100) + 100);
     
      // setTimeout(function(){
        const angle = Math.ceil(Math.random() * 30) - 15;
        const marginLeft = Math.ceil(Math.random() * 690);
        const width = Math.floor(Math.random() * (100 - 60 + 1) + 60);
        const animation = Math.floor(Math.random() * (6 - 3) + 3)
        const height = Math.ceil(width * 1.25)
        const marginTop = Math.floor(Math.random() * (1000 - 30) + 0)
        const redPacket: Packets = {
          angle,
          marginLeft,
          width,
          height,
          marginTop,
          animation
        }
        arr.push(redPacket);
        setPackets(arr)
      // },50)
    
    }
   
  }

  const getHong= (i,arr)=>{
    const angle = Math.ceil(Math.random() * 30) - 15;
        const marginLeft = Math.ceil(Math.random() * 690);
        const width = Math.floor(Math.random() * (100 - 60 + 1) + 60);
        const animation = Math.floor(Math.random() * (6 - 3) + 3)
        const height = Math.ceil(width * 1.25)
        const marginTop = Math.floor(Math.random() * (1000 - 30) + 0)
        const redPacket: Packets = {
          angle,
          marginLeft,
          width,
          height,
          marginTop,
          animation
        }
        setTimeout(function(){
          arr.push(redPacket);
          setPackets(arr)
        })
       
  }

  return (
    <View className="redPackets">
       {/* <Image
          style="transform:rotate(15deg);margin-top:10px;margin-left:20rpx;width:40rpx;height:60rpx;animation: dropdown 4s linear infinite;"
          className="packet"
          src={require('../../static/tabs/tab_index.png')}
        /> */}
      {show && packets.map((item, index) => (
        <Image
          style="transform:rotate({{item.angle}}deg);margin-top:{{item.marginTop}}px;margin-left:{{item.marginLeft}}rpx;width:{{item.width}}rpx;height:{{item.height}}rpx;animation: dropdown {{item.animation}}s forwards;"
          className="packet"
          src={redPacket}
          key={index}
        />
      ))}
    </View>
  );

}

export default observer(RedPackets);
