<template>
  <p>
    Own property 'prop1': {{ prop1 }}, Inherited property 'prop2': {{ prop2 }}
  </p>
</template>
<script lang="ts">
import { Prop, Watch } from "vue-property-decorator";
// import Parent from "@/components/Parent.vue"; <-- works in Vue 2
import Parent from "@/components/Parent.ts";

export default class Child extends Parent {
  @Prop({ required: true }) readonly prop1!: string;
  @Watch("prop2")
  onInheritedPropChanged(newValue: string): void {
    console.log("prop2", newValue);
  }
}
</script>
