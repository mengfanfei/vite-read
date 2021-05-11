import { Icon } from "vant"
import { defineComponent, onMounted } from "vue"
import style from './index.module.scss'

const BookMall = defineComponent({
  name: 'BookMall',
  setup() {
    onMounted(() => {
      console.log('bookmeng')
    })
    return () => 
      <>
        <div class="pl12 pr12">
          <div class={style.searchContainer}>
            <div class={style.searchIcon}>
              <Icon name="search" size="18" class={style.icon} />
            </div>
            <input type="text" class={style.search} placeholder="搜索书名，作者" />
          </div>
        </div>
      </>
  }
})

export default BookMall