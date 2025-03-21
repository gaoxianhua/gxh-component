import Gitalk from "gitalk";
import "gitalk/dist/gitalk.css";

const generateId = (path) => {
    return path
        .split('/') // 按照 / 切分
        .pop() // 取最后一个部分
        .replace(/\.html$/, ''); // 去掉结尾的 .html
};

export default function createGitalk(path: string) {
    const gitalk = new Gitalk({
        clientID: "Ov23liVepKSFp8TKOvti",
        clientSecret: "13e996654a22b40045d8384675f8c4d7064f6aa1",
        repo: "gxh-component",
        owner: "gaoxianhua",
        admin: ["gaoxianhua"],
        id: generateId(path), // 确保唯一性和长度小于 50
        distractionFreeMode: false, // 类似 Facebook 的无干扰模式
    });
    gitalk.render("gitalk-container");
}