import { defineComponent, ref } from "vue";
import HelloWorldVue from "./HelloWorld.vue";
const App = defineComponent({
  setup() {
    const nameRef = ref("sss");

    setInterval(() => {
      nameRef.value += 1;
    }, 2000);

    return () => {
      return (
        <div>
          {nameRef.value}
          <HelloWorldVue age={"12"} />
          <input v-model={nameRef.value} />
        </div>
      );
    };
  },
});
export default App;
