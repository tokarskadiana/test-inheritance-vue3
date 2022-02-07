<template>
  <Child prop1="Child property" :prop2="prop2" />
  <input v-model="prop2" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Child from "./components/Child.vue";

@Options({
  components: {
    Child,
  },
})
export default class App extends Vue {
  prop2 = "Inherited property";
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
