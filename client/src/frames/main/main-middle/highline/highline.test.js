// 引入模块
import "@/frames/main/main-middle/highline/highline";
import { highline } from "@/js/database.js";

describe("Highline module", () => {
  // 在每个测试用例之前设置 DOM 环境
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="main-middle">
        <div class="highline-container">
          <img class="highline__profile" />
          <img class="highline__picture" />
          <small></small>
        </div>
      </div>
    `;
  });

  test("sets profile photos correctly", () => {
    const profiles = document.querySelectorAll(".highline__profile");
    profiles.forEach((element, index) => {
      expect(element.src).toContain(`images/profile/profile_${index + 5}.png`);
    });
  });

  test("sets highline pictures correctly", () => {
    const pictures = document.querySelectorAll(".highline__picture");
    pictures.forEach((element, index) => {
      expect(element.src).toContain(
        `images/highline/highline_${index + 1}.jpeg`
      );
    });
  });

  test("sets highline descriptions correctly", () => {
    const descriptions = document.querySelectorAll(".highline-container small");
    descriptions.forEach((element, index) => {
      expect(element.textContent).toBe(highline.description[index]);
    });
  });
});
