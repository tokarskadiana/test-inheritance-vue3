import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Parent extends Vue {
  @Prop({ required: true }) readonly prop2!: string;
}
