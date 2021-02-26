import { defineComponent } from "vue";
import Navigation from "../../components/navigation"

const Bookrack = defineComponent({
  name: 'Bookrack',
  setup() {
    return () => 
      <>
        <div>hello Bookrack</div>
        <Navigation />
      </>
  }
})

export default Bookrack