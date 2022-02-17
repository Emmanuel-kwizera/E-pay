const request = require("supertest");
const chai = require("chai");
const http = require("chai-http");

const { expect } = chai;

const db = require("../app/models");
const {
    Meter
  } = require("../app/models/meter.model");
const app = require("../app");
const { mongoose } = require("../app/models");

chai.use(http);

describe("Meter endpoint", () => {
    let updatedMeter = {
        _id: "620e54b02b62091160f66bfd",
        token_code: "324287",
        power_expiration_time: new Date(date),
        owner: "Emmanuel",
    };

    let date = new Date()
    date.setDate(date.getDate()+20)

    let data = {
            _id: "620e54b02b62091160f66bfd",
            token_code: "324287",
            power_expiration_time: new Date(date),
            owner: "Emmanuel",
        }


    test("GET /api/meters/324287 --> should return 200 on success", async () => {
        jest.spyOn(Meter, "findOne").mockReturnValue(Promise.resolve(data));
        const res = await chai.request(app).get("/api/meters/324287");
        expect(res.status).to.equal(200);
        await mongoose.disconnect();
    });

    test("GET /api/meters/324267 --> should return 404", async () => {
        jest.spyOn(Meter, "findOne").mockReturnValue(Promise.resolve(undefined));
        const res = await chai.request(app).get("/api/meters/324267");
        expect(res.status).to.equal(404);
    });

});