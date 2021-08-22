const chai = require("chai");
const chaiHttp = require("chai-http");

const { streamController } = require("./streamController");
const server = require("../server");

describe("streamController", () => {
  let mockReq;
  let mockDatabase;
  let mockStreamCount;

  afterEach(() => {
    mockReq = {};
    mockDatabase = [];
    mockStreamCount = 0;
  });

  it("should not add stream to database if already exists");

  it("should not add more than three streams to database");

  it(
    "should add stream to database if not present or less than 3 streams are being watched"
  );
});
