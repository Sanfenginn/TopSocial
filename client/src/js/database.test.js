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

// 测试套件
describe("API Calls Tests", () => {
  let mock;

  beforeEach(() => {
    mock = new AxiosMockAdapter(axios);
  });

  // 在测试后清理
  afterEach(() => {
    mock.restore();
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

  // 测试 getRequest
  it("should fetch request data correctly", async () => {
    const expectedData = [
      {
        id: "",
        mutualFriendNum: "",
        name: "",
        src: "",
      },
      {
        id: "",
        mutualFriendNum: "",
        name: "",
        src: "",
      },
    ];
    const path = getPath("request");
    mock.onGet(path).reply(200, expectedData);
    const data = await getRequest();
    expect(data).toEqual(expectedData);
  });

  // 测试 getMessage
  it("should fetch message data correctly", async () => {
    const expectedData = [
      {
        id: "",
        src: "",
        name: "",
        msg: "",
      },
      {
        id: "",
        src: "",
        name: "",
        msg: "",
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
      name: "",
      at: "",
      img_src: "",
    };
    const path = getPath("profile");
    mock.onGet(path).reply(200, expectedData);
    const data = await getCurrentUserProfile();
    expect(data).toEqual(expectedData);
  });

  // 测试 getPostCards
  it("should fetch post cards data correctly", async () => {
    const expectedData = [
      {
        id: 1,
        profile: {
          src: "",
          name: "",
          position: "",
          time: "",
        },
        picture: {
          img_src: "",
        },
        comment: {
          img_src_list: ["", "", ""],
          first_people_name: "",
          like_peoples_number: "",
          comment_info: "",
          view_number: "",
        },
      },
      {
        id: 1,
        profile: {
          src: "",
          name: "",
          position: "",
          time: "",
        },
        picture: {
          img_src: "",
        },
        comment: {
          img_src_list: ["", "", ""],
          first_people_name: "",
          like_peoples_number: "",
          comment_info: "",
          view_number: "",
        },
      },
    ];
    const path = getPath("cards");
    mock.onGet(path).reply(200, expectedData);
    const data = await getPostCards();
    expect(data).toEqual(expectedData);
  });
});
