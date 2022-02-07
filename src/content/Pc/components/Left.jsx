import { defineComponent, ref } from "vue";
import style from "@/style/pc/module/left.module.scss";
import eduComponent from "@/content/public/Edu.jsx";
import expComponent from "@/content/public/Exp.jsx";
/* import personComponent from "@/content/public/Person.vue"; */
const Left = defineComponent({
  name: "Left",
  components: {
    eduComponent,
    expComponent,
    /*   personComponent, */
  },
  setup() {
    return () => {
      return (
        <div class={style.left}>
          <edu-component />
          <exp-component />
          {/* <person-component /> */}
        </div>
      );
    };
  },
});

export default Left;
