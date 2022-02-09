import { defineComponent } from "vue";
import style from "./index.module.scss";
import { Toast } from "vant";
const Title = defineComponent({
  name: "Title",
  props: {
    titleName: {
      type: [Array, String],
      required: true,
    },
    componey: {
      type: String,
    },
  },
  setup(props) {
    const tips = (tips) => {
      Toast(tips);
    };
    return () => {
      return (
        <div class={style.title}>
          {typeof props.titleName === "string" ? (
            <b>{props.titleName}</b>
          ) : (
            props.titleName.map((item) => {
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
            })
          )}
        </div>
      );
    };
  },
});

export default Title;
