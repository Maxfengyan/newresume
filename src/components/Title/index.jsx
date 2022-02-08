import { defineComponent } from "vue";
import style from "./index.module.scss";
import { Toast } from "vant";
const Title = defineComponent({
  name: "Title",
  props: {
    titleName: {
      type: Array,
      required: true,
    },
    componey: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const tips = (tips) => {
      Toast(tips);
    };
    return () => {
      return (
        <div class={style.title}>
          {props.titleName.map((item, index) => {
            return (
              <b>
                {item.name}
                {item.sup ? (
                  <sup>
                    <a href="javascript:void(0)" title={item.tip} onClick={() => tips(item.tip)}>
                      [{item.sup}]
                    </a>
                  </sup>
                ) : null}
              </b>
            );
          })}
        </div>
      );
    };
  },
});

export default Title;
