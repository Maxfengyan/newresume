import request from "../core/request";
export function getBaituExp() {
  return request({
    url: "/baituExp.json",
    method: "get",
  });
}

export function getYuangeExp() {
  return request({
    url: "/yuangeExp.json",
    method: "get",
  });
}
