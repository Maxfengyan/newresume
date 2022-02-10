import jsCookie from "js-cookie";

const darkModel = "darkModel";

export function setDark(value) {
  return jsCookie.set(darkModel, value);
}

export function getDark() {
  return jsCookie.get(darkModel);
}

export function removeDark() {
  return jsCookie.remove(darkModel);
}
