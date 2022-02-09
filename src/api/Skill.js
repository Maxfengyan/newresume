import request from "../core/request";

export function getSkill() {
  return request({
    url: "/skill.json",
    method: "get",
  });
}
