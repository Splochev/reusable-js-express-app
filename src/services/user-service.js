const _ = require("lodash");

class UserService {
  constructor({ logger, errorHandler, db }) {
    if (UserService.instance) {
      return UserService.instance;
    }

    this.logger = logger;
    this.errorHandler = errorHandler;
    this.userModel = db.User;

    UserService.instance = this;
  }

  async getUserById(id) {
    try {
      const user = await this.userModel.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async createUser(userData) {
    try {
      const user = await this.userModel.create(userData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id, userData) {
    try {
      const user = await this.userModel.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      await user.update(userData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const user = await this.userModel.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      await user.destroy();
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
