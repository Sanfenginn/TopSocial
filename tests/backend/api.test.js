const request = require("supertest");
require("dotenv").config({ path: "./server/.env" });

const app = require("../../server/index"); // 导入您的 Express 应用

describe("API Endpoints", () => {
  test("GET /api/profile", async () => {
    const response = await request(app).get("/api/profile");
    expect(response.statusCode).toBe(200);
  });
  test("GET /api/cards", async () => {
    const response = await request(app).get("/api/cards");

    expect(response.statusCode).toBe(200);
  });
  test("GET /api/highline", async () => {
    const response = await request(app).get("/api/highline");

    expect(response.statusCode).toBe(200);
  });
  test("GET /api/message", async () => {
    const response = await request(app).get("/api/message");

    expect(response.statusCode).toBe(200);
  });
  test("GET /api/request", async () => {
    const response = await request(app).get("/api/request");
    expect(response.statusCode).toBe(200);
  });
});
