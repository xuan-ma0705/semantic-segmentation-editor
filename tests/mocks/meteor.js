const Meteor = {
    user: jest.fn(() => ({ username: 'testuser' })),
    call: jest.fn((method, params, callback) => callback(null, 'data')),
    subscribe: jest.fn(() => ({ ready: () => true })),
};
  
global.Meteor = Meteor;