import request from "../core/request";

export function getExp(name) {
  return request({
    url: "/" + name + "Exp.json",
    method: "get",
  });
}

export function getExpContent() {
  return request({
    url: "/exp.json",
    method: "get",
  });
}
