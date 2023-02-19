const { Service } = require("feathers-mongoose");
const createModel = require("../../models/tasks.model");

exports.Tasks = class Tasks extends Service {
  find(params) {
    params.query.publisher = params.user._id;
    return super.find(params);
  }
  async get(id, params) {
    console.log("🚀 ~ file: tasks.class.js:10 ~ Tasks ~ get ~ params", params);
    console.log("🚀 ~ file: tasks.class.js:10 ~ Tasks ~ get ~ id", id);
    params.query.publisher = params.user._id;
    const sasa = await super.get(id, params);
    console.log("🚀 ~ file: tasks.class.js:14 ~ Tasks ~ get ~ sasa", sasa);

    return sasa;
  }
  async update(id, data, params) {
    data.publisher = params.user._id;
    params.query.publisher = params.user._id;
    return await super.update(id, data, params);
  }
  async remove(id, params) {
    params.query.publisher = params.user._id;
    return await super.remove(id, params);
  }
};
