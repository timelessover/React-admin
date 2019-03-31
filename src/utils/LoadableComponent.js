import React from 'react'
import Loadable from 'react-loadable' //代码分割 缩短打包速度 减少包体积
import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css'

class LoadingPage extends React.Component {
  //类似github页面加载的那个加载条
  componentWillMount(){
    NProgress.start()
  }
  componentWillUnmount(){
    NProgress.done()
  }
  render () {
    return (
      <div/>
    )
  }
}

const LoadableComponent = (component) => {
  return Loadable({
    loader: component,
    loading: ()=><LoadingPage/>
  })
}

export default LoadableComponent