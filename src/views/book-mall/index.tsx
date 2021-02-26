import { defineComponent } from "vue";
import Navigation from "../../components/navigation"

const BookMall = defineComponent({
  name: 'BookMall',
  setup() {
    return () => 
      <>
        <div>hello</div>
        <Navigation />
      </>
  }
})

export default BookMall