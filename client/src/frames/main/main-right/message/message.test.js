import { describe, it, expect, beforeEach } from "vitest";
import { getAllAttributes } from "../../../../js/utils"; // 调整路径
// import { message } from "../../../../js/database"; // 调整路径

// 模拟你的 DOM 结构
const setDocumentBody = () => {
  document.body.innerHTML = `
    <div class="message-list">
      <img class="user-list__profile" src="" />
      <div class="friends-name"></div>
      <small></small>
      <!-- 根据需要重复以上元素 -->
    </div>
  `;
};

const mockMessageData = [
  { src: "path/to/image1.jpg", name: "Alice", msg: "Hello" },
  { src: "path/to/image2.jpg", name: "Bob", msg: "Hi" },
  // ... 添加更多模拟数据
];

vi.mock("./database", () => ({
  message: mockMessageData,
}));

describe("Message List Tests", () => {
  beforeEach(() => {
    setDocumentBody();
  });

  it("should set the profile photo, name, and message correctly", () => {
    // 模拟 getAllAttributes 函数的返回值
    const messageAllAttributes = getAllAttributes(
      mockMessageData,
      "src",
      "name",
      "msg"
    );

    // 执行 DOM 操作
    const userListProfile = document.querySelectorAll(".user-list__profile");
    const friendsName = document.querySelectorAll(".friends-name");
    const friendsMessage = document.querySelectorAll("small");

    userListProfile.forEach((element, index) => {
      element.src = messageAllAttributes[index].src.replace("/src", "");
    });

    friendsName.forEach((element, index) => {
      element.textContent = messageAllAttributes[index].name;
    });

    friendsMessage.forEach((element, index) => {
      element.textContent = messageAllAttributes[index].msg;
    });

    // 断言
    userListProfile.forEach((element, index) => {
      expect(element.src).toBe(
        window.location.origin +
          "/" +
          messageAllAttributes[index].src.replace("/src", "")
      );
    });

    friendsName.forEach((element, index) => {
      expect(element.textContent).toBe(messageAllAttributes[index].name);
    });

    friendsMessage.forEach((element, index) => {
      expect(element.textContent).toBe(messageAllAttributes[index].msg);
    });
  });
});
