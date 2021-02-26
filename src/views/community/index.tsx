import { defineComponent } from "vue";
import Navigation from "../../components/navigation"

const Community = defineComponent({
  name: 'Community',
  setup() {
    return () => 
      <>
        <div>hello Bookrack</div>
        <Navigation />
      </>
  }
})

export default Community