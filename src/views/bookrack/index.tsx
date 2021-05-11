import { defineComponent, onMounted } from "vue";
import Navigation from "../../components/navigation"

const Bookrack = defineComponent({
  name: 'Bookrack',
  setup() {
    onMounted(() => {
      console.log('Bookrack')
    })
    return () => 
      <>
        <div>hello Bookrack</div>
        <Navigation />
      </>
  }
})

export default Bookrack