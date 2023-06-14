import { createApp, defineComponent, h, ref } from "vue";
// import App from "./App.vue";
import App from "@/components/jsxDemo";
// const App1 = defineComponent({
//   setup() {
//     const nameRef = ref("sss");

//     setInterval(() => {
//       nameRef.value += 1;
//     }, 2000);
//     return () => {
//       /** setup初始化只会执行一次，放到return上面不会更新 */
//       const number = nameRef.value;
//       return h("div", number);
//     };
//   },
// });
const App1 = defineComponent({
  setup() {
    const nameRef = ref("sss");

    setInterval(() => {
      nameRef.value += 1;
    }, 2000);
    return () => {
      /** setup初始化只会执行一次，放到return上面不会更新 */
      const number = nameRef.value;
      return h("div", number);
    };
  },
});
createApp(App).mount("#app");
