const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./server");

chai.use(chaiHttp);
chai.should();

describe("server", () => {
  describe("POST /user/:userId/stream/:streamId", () => {
    let mockDatabase;

    afterEach(() => (mockDatabase = []));

    it("should response with 200 if stream already exists in database", () => {
      mockDatabase = [{ userId: "bob", streamId: "123" }];
      chai
        .request(server)
        .post("/user/bob/stream/123")
        .end((err, res) => {
          res.should.have.status(200);
        });
    });

    it("should respond with 403 if maximum number of streams reached", () => {
      mockDatabase = [
        { userId: "bob", streamId: "1" },
        { userId: "bob", streamId: "2" },
        { userId: "bob", streamId: "3" },
      ];
      chai
        .request(server)
        .post("/user/bob/stream/4")
        .end((err, res) => {
          res.should.have.status(403);
        });
    });

    it("should respond with 201 when stream added to database", () => {
      mockDatabase = [];

      chai
        .request(server)
        .post("/user/bob/stream/1")
        .end((err, res) => {
          res.should.have.status(201);
        });
    });
  });
});