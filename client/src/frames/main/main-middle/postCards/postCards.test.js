// postCardsManipulation.test.js
import { describe, it, expect, beforeEach } from "vitest";
import { JSDOM } from "jsdom";

describe("Post Cards Manipulation Tests", () => {
  let document;

  beforeEach(() => {
    // 创建 JSDOM 实例并模拟 HTML 结构
    const dom = new JSDOM(`
      <div class="main-middle"></div>
      <template id="template">
        <div class="post">
          <div class="post-information">
            <img />
            <div class="post-status">
              <span class="poster-name"></span>
              <small class="post-location-time"></small>
            </div>
          </div>
          <div class="post-picture">
            <img />
          </div>
          <div class="who-like">
            <div class="who-like__profile">
              <img />
              <img />
            </div>
            <span class="who-like__description"></span>
          </div>
          <div class="comment-info"></div>
          <div class="other-views"></div>
        </div>
      </template>
    `);
    document = dom.window.document;
  });

  it("should set post cards correctly", () => {
    // 模拟 postCards 数据
    const postCards = [
      {
        profile: {
          src: "profile-img-1",
          name: "John Doe",
          position: "New York",
          time: 5,
        },
        picture: { img_src: "post-pic-1" },
        comment: {
          img_src_list: ["like-profile-1", "like-profile-2"],
          first_people_name: "Alice",
          like_peoples_number: 10,
          comment_info: "Nice post!",
          view_number: 20,
        },
      },
      // ...其他模拟数据
    ];

    // 模拟 DOM 操作
    postCards.forEach((element, index) => {
      const template = document.getElementById("template");
      const newPostCard = template.content.cloneNode(true);

      // 设置 profile photo
      const profileImg = newPostCard.querySelector(".post-information img");
      profileImg.src = element.profile.src;

      // 设置 poster name
      const posterName = newPostCard.querySelector(
        ".post-information .poster-name"
      );
      posterName.textContent = element.profile.name;

      // 设置 post location and time
      const postLocationTime = newPostCard.querySelector(
        ".post-information .post-location-time"
      );
      postLocationTime.textContent = `${element.profile.position}, ${element.profile.time} minutes ago`;

      // 设置 post picture
      const postPicture = newPostCard.querySelector(".post-picture img");
      postPicture.src = element.picture.img_src;

      // 设置 who-like profile photos
      const whoLikeProfile = newPostCard.querySelectorAll(
        ".who-like__profile img"
      );
      whoLikeProfile.forEach((img, imgIndex) => {
        if (element.comment.img_src_list[imgIndex]) {
          img.src = element.comment.img_src_list[imgIndex];
        }
      });

      // 设置 who-like description
      const whoLikeDescription = newPostCard.querySelector(
        ".who-like__description"
      );
      whoLikeDescription.textContent = `Liked by ${element.comment.first_people_name} and ${element.comment.like_peoples_number} others`;

      // 设置 comment info
      const commentInfo = newPostCard.querySelector(".comment-info");
      commentInfo.textContent = element.comment.comment_info;

      // 设置 other views
      const otherViews = newPostCard.querySelector(".other-views");
      otherViews.textContent = `View all ${element.comment.view_number} comments`;

      newPostCard.querySelector(".post").id = `post-${index}`;
      document.querySelector(".main-middle").appendChild(newPostCard);
    });

    // 验证 DOM 操作
    expect(document.querySelectorAll(".post").length).toBe(postCards.length);
    expect(
      document.querySelector("#post-0 .post-information img").src
    ).toContain("profile-img-1");
    expect(document.querySelector("#post-0 .post-picture img").src).toContain(
      "post-pic-1"
    );
    expect(
      document.querySelector("#post-0 .who-like__description").textContent
    ).toContain("Alice");
    expect(document.querySelector("#post-0 .comment-info").textContent).toBe(
      "Nice post!"
    );
    // ...根据需要进行更多验证
  });
});
