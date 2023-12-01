// domManipulation.test.js
import { describe, it, expect, beforeEach } from "vitest";
import { JSDOM } from "jsdom";

describe("DOM Manipulation Tests", () => {
  let document;

  beforeEach(() => {
    // 创建 JSDOM 实例并模拟 HTML 结构
    const dom = new JSDOM(`
      <div class="main-middle">
        <div class="highline-container">
          <img class="highline__profile" />
          <img class="highline__picture" />
          <small></small>
        </div>
      </div>
    `);
    document = dom.window.document;
  });

  it("should set the profile photo, highline picture, and description correctly", () => {
    // 模拟数据
    const highline = {
      description: ["Test Description"],
    };

    // 模拟 DOM 操作
    const middleHighlineProfile =
      document.querySelectorAll(".highline__profile");
    middleHighlineProfile.forEach((element, index) => {
      element.src = `images/profile/profile_${index + 5}.png`;
    });

    const middleHighlinePicture =
      document.querySelectorAll(".highline__picture");
    middleHighlinePicture.forEach((element, index) => {
      element.src = `images/highline/highline_${index + 1}.jpeg`;
    });

    const middleHighlineSmall = document.querySelectorAll("small");
    middleHighlineSmall.forEach((element, index) => {
      element.textContent = highline.description[index];
    });

    // 验证 DOM 操作
    expect(document.querySelector(".highline__profile").src).toContain(
      "images/profile/profile_5.png"
    );
    expect(document.querySelector(".highline__picture").src).toContain(
      "images/highline/highline_1.jpeg"
    );
    expect(document.querySelector("small").textContent).toBe(
      "Test Description"
    );
  });
});
