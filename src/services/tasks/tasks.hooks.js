const { authenticate } = require('@feathersjs/authentication').hooks;

const processTask = require('../../hooks/process-task');

const authorize = require('../../hooks/authorize');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processTask()],
    update: [authorize()],
    patch: [],
    remove: [authorize()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
