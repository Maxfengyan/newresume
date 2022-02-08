import request from "../core/request";

export function getProject() {
  return request({
    url: "/project.json",
    method: "get",
  });
}
