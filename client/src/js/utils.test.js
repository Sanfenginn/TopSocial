import { describe, it, expect } from "vitest";
import { getAllAttributes } from "./utils";
import { describe, it, expect } from "vitest";
import { getPath, getWebsiteRunningMode, getHttpProtocol } from "./utils";

// 模拟环境变量
const mockEnv = (mode, dbPath) => {
  process.env.MODE = mode;
  process.env.VITE_DB_PATH = dbPath;
};

describe("Utility Functions", () => {
  // 测试 getWebsiteRunningMode
  it("should correctly get website running mode", () => {
    mockEnv("production", "");
    expect(getWebsiteRunningMode()).toBe("production");
    mockEnv("development", "");
    expect(getWebsiteRunningMode()).toBe("development");
  });

  // 测试 getHttpProtocol
  it("should return correct protocol based on mode", () => {
    mockEnv("production", "");
    expect(getHttpProtocol()).toBe("https://");
    mockEnv("development", "");
    expect(getHttpProtocol()).toBe("http://");
  });

  // 测试 getPath
  it("should return the correct path based on mode and dbPath", () => {
    mockEnv("production", "my-db-path");
    expect(getPath("myEndpoint")).toBe("https://my-db-path/myEndpoint");
    mockEnv("development", "my-dev-db-path");
    expect(getPath("myEndpoint")).toBe("http://my-dev-db-path/myEndpoint");
  });
});

describe("getAllAttributes function", () => {
  it("should extract specified attributes from array of objects", () => {
    const sampleArray = [
      { id: 1, name: "Alice", age: 30, city: "New York" },
      { id: 2, name: "Bob", age: 25, city: "London" },
      { id: 3, name: "Carol", age: 27, city: "Paris" },
    ];

    const attribute1 = "name";
    const attribute2 = "age";
    const attribute3 = "city";

    const expectedOutput = [
      { name: "Alice", age: 30, city: "New York" },
      { name: "Bob", age: 25, city: "London" },
      { name: "Carol", age: 27, city: "Paris" },
    ];

    const result = getAllAttributes(
      sampleArray,
      attribute1,
      attribute2,
      attribute3
    );
    expect(result).toEqual(expectedOutput);
  });

  it("should handle empty array", () => {
    const result = getAllAttributes([], "name", "age", "city");
    expect(result).toEqual([]);
  });

  it("should handle non-existent attributes", () => {
    const sampleArray = [{ name: "Alice", age: 30 }];
    const result = getAllAttributes(sampleArray, "name", "age", "height");
    expect(result).toEqual([{ name: "Alice", age: 30, height: undefined }]);
  });
});
