import { defineComponent } from "vue";
import Navigation from "../../components/navigation"

const My = defineComponent({
  name: 'My',
  setup() {
    return () => 
      <>
        <div>hello Bookrack</div>
        <Navigation />
      </>
  }
})

export default My