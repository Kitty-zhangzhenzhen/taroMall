import Taro, { Component,useState, render } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './style.scss'

export default class Rain extends Component {
  constructor(props) {
    super(props);
}

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  position() {
    return this.random(1, 100);
  }
   delay() {
    return this.random(1, 4);
  }
   duration() {
    return this.random(2, 4);
  }
   name() {
    return this.random(1, 4);
  }
   timing() {
    return ["linear", "ease", "ease-in", "ease-out", "ease-in-out"][
      this.random(0, 4)
    ];
  }
   emits(){
    console.log(999)
    this.props.emits()
  }
render(){
  return (

    <View className='page'>
      {
        Array(60).fill().map((v, i) => (
        // <View>{v}</View>
          <View
            key={v}
            className='animation span'
            data-animation-position={this.position()}
            data-animation-timing={this.timing()}
            data-animation-delay={this.delay()}
            data-animation-duration={this.duration()}
            data-animation-name={this.name()}
          >
            <View className='image' onClick={this.emits.bind(this)}></View>
          </View>
        ))
      }
    </View>
  )
}}

