import { IStore } from "@/store";
import { MutationsEnum } from "@/store/modules/user/mutations";
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import Navigation from "../../components/navigation"

const My = defineComponent({
  name: 'My',
  setup() {
    // const store = useStore()
    // let name = computed(() => store.state.user.name)
    // console.log(name.value)
    return () => 
      <>
        <div>111</div>
        <Navigation />
      </>
  }
})

export default My