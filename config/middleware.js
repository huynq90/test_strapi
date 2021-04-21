module.exports = {
  load: {
    before: [
      "responseTime",
      "logger",
      "cors",
      "responses",
      "gzip"],
    order: [
      "parser",
      "validateUser",
    ],
    after: ['parser', 'router'],
  },
  settings: {
    validateUser: {
      enabled: true,
    },
  },
};
