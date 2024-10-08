const express = require("express"),
  app = require("./app"),
  http = require("http"),
  server = http.createServer(app);

