// 导入测试依赖
import { describe, it, expect, beforeEach, afterEach, test } from "vitest";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { getPath } from "./utils.js";

// 导入您的函数
import {
  getHighline,
  getRequest,
  getMessage,
  getCurrentUserProfile,
  getPostCards,
} from "@/js/database"; // 请替换为正确的路径

// 创建 axios mock 实例，拦截所有由axios发出的http请求，并且允许模拟http响应
const mock = new AxiosMockAdapter(axios);

// 测试套件
describe("API Calls Tests", () => {
  // 在每个测试之前重置 mock
  beforeEach(() => {
    mock.reset();
  });

  // 测试 getHighline
  it("should fetch highline data correctly", async () => {
    const expectedData = ["data1", "data2"];
    const path = getPath("highline");
    console.log("test", path);
    //定义我们希望返回的数据
    mock.onGet(path).reply(200, expectedData);
    //配置mock的响应，当请求到达时，返回我们定义的数据
    const data = await getHighline();
    expect(data).toEqual(expectedData);
  });

  // 继续在 example.test.js 文件中

  // ... 其他 import 语句和之前的代码

  // 测试 getRequest
  it("should fetch request data correctly", async () => {
    const expectedData = [
      {
        id: 1,
        mutualFriendNum: 8,
        name: "Hajia Bintu",
        src: "./src/images/profile/profile_7.png",
      },
      {
        id: 2,
        mutualFriendNum: 19,
        name: "Jackline Mensah",
        src: "./src/images/profile/profile_8.png",
      },
      // ... 其他数据
    ];

    const path = getPath("request");
    mock.onGet(path).reply(200, expectedData);
    const data = await getRequest();
    expect(data).toEqual(expectedData);
  });

  it("should fetch message data correctly", async () => {
    const expectedData = [
      {
        id: 1,
        src: "./src/images/profile/profile_2.png",
        name: "Tomas Li",
        msg: "Hi, Long time no see!",
      },
      {
        id: 2,
        src: "./src/images/profile/profile_3.png",
        name: "Lana Rose",
        msg: "Birthday Tomorrow!",
      },
      {
        id: 3,
        src: "./src/images/profile/profile_4.png",
        name: "No One",
        msg: "lol u right.",
      },
      {
        id: 4,
        src: "./src/images/profile/profile_5.png",
        name: "Emily",
        msg: "emm, sounds good.",
      },
      {
        id: 5,
        src: "./src/images/profile/profile_6.png",
        name: "Alex",
        msg: "hang on, give me a sec.",
      },
    ];

    const path = getPath("message");
    mock.onGet(path).reply(200, expectedData);
    const data = await getMessage();
    expect(data).toEqual(expectedData);
  });

  // 测试 getCurrentUserProfile
  it("should fetch current user profile correctly", async () => {
    const expectedData = {
      name: "Jinyuan Zhang",
      at: "@Jinyuanzhang1992",
      img_src: "./src/images/profile/profile_18.jpg",
    };

    const path = getPath("profile");
    mock.onGet(path).reply(200, expectedData);
    const data = await getCurrentUserProfile();
    expect(data).toEqual(expectedData);
  });
  it("should fetch post cards data correctly", async () => {
    const expectedData = [
      {
        id: 1,
        profile: {
          src: "./src/images/profile/profile_18.jpg",
          name: "Jinyuan Zhang",
          position: "Darwin",
          time: 15,
        },
        picture: {
          img_src: "./src/images/post/post_5.jpeg",
        },
        comment: {
          img_src_list: [
            "./src/images/profile/profile_5.png",
            "./src/images/profile/profile_6.png",
            "./src/images/profile/profile_7.png",
          ],
          first_people_name: "Ernest Achiever",
          like_peoples_number: 462,
          comment_info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia expedita repellendus harum beatae? #Trip",
          view_number: 3456,
        },
      },
      {
        id: 2,
        profile: {
          src: "./src/images/profile/profile_3.png",
          name: "Lana Rose",
          position: "Brisbane",
          time: 29,
        },
        picture: {
          img_src: "./src/images/post/post_6.jpeg",
        },
        comment: {
          img_src_list: [
            "./src/images/profile/profile_5.png",
            "./src/images/profile/profile_6.png",
            "./src/images/profile/profile_7.png",
          ],
          first_people_name: "John Doe",
          like_peoples_number: 7473,
          comment_info:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure. #Fitness",
          view_number: 19332,
        },
      },
      {
        id: 3,
        profile: {
          src: "./src/images/profile/profile_4.png",
          name: "Lana Rose",
          position: "Perth",
          time: 40,
        },
        picture: {
          img_src: "./src/images/post/post_7.jpeg",
        },
        comment: {
          img_src_list: [
            "./src/images/profile/profile_5.png",
            "./src/images/profile/profile_6.png",
            "./src/images/profile/profile_7.png",
          ],
          first_people_name: "Andy Rose",
          like_peoples_number: 2323,
          comment_info:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti. #Studying",
          view_number: 322,
        },
      },
      {
        id: 4,
        profile: {
          src: "./src/images/profile/profile_5.png",
          name: "Lana Rose",
          position: "Sydney",
          time: 55,
        },
        picture: {
          img_src: "./src/images/post/post_8.jpeg",
        },
        comment: {
          img_src_list: [
            "./src/images/profile/profile_5.png",
            "./src/images/profile/profile_6.png",
            "./src/images/profile/profile_7.png",
          ],
          first_people_name: "Andrew Smith",
          like_peoples_number: 2122,
          comment_info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.  #Happy",
          view_number: 558,
        },
      },
    ];

    const path = getPath("cards");
    mock.onGet(path).reply(200, expectedData);

    const data = await getPostCards();
    expect(data).toEqual(expectedData);
  });

  // ... 其他测试用例和 afterEach

  // 在测试后清理
  afterEach(() => {
    mock.restore();
  });
});
