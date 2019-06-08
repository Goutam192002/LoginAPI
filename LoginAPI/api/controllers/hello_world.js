'use strict';

const hello = (req, res) => {
  res.status(200).json("Hello World");
};

module.exports = {
  hello: hello
};
