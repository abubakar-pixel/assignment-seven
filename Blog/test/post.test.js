const server = require("../server");
const chai = require("chai");
const chaiHTTP = require("chai-http");

//styling method
chai.should();

//moiddleware
chai.use(chaiHTTP);
