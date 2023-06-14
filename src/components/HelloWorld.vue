<template>
  <div class="hello">Hello</div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
interface IConfig {
  name: string;
}
const IProps = {
  msg: String,
  config: {
    type: Object as PropType<IConfig>,
  },
  age: {
    type: String,
    required: true,
  },
} as const;
export default defineComponent({
  name: "HelloWorld",
  props: IProps,
  mounted() {
    /** 类型提示 及限制 */
    this.config?.name;
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
