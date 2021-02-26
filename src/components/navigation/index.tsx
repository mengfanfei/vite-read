import { defineComponent } from "vue"
import { Tabbar, TabbarItem } from 'vant'

const Navigation = defineComponent({
  name: 'Navigation',
  setup() {
    let active: Number = 0
    return () =>
      <>
        <Tabbar modelValue={active} placeholder route activeColor="#47CDD4" inactiveColor="rgba(50, 50, 51, 0.4)">
          <TabbarItem replace to="/bookMall" iconPrefix="iconfont" icon="home">书城</TabbarItem>
          <TabbarItem replace to="/bookrack" iconPrefix="iconfont" icon="book">书架</TabbarItem>
          <TabbarItem replace to="/community" iconPrefix="iconfont" icon="message">社区</TabbarItem>
          <TabbarItem replace to="/my" iconPrefix="iconfont" icon="my">我的</TabbarItem>
        </Tabbar>
      </>
  }
})

export default Navigation