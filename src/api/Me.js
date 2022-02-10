import request from "../core/request";

export function getMe() {
  return request({
    url: "/me.json",
    method: "get",
  });
}

export function getBasicInfo() {
  return request({
    url: "/info.json",
    method: "get",
  });
}
