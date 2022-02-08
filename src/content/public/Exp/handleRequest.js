import { getExpContent, getExp } from "@/api/Exp.js";
function getContent() {
  // 获取所有公司name
  return new Promise((resolve, reject) => {
    getExpContent().then((componeyList) => {
      let promiseList = [];
      componeyList.forEach((item) => {
        let p = new Promise((resolve, reject) => {
          getExp(item)
            .then((res) => {
              resolve(res);
            })
            .catch((e) => {
              reject(e);
            });
        });
        promiseList.push(p);
      });

      Promise.all(promiseList)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
}

export default getContent;
