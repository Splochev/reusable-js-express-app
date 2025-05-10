module.exports = ({ logger, errorHandler, userService, db }) => ({
  test: async (req, res, next) => {
    try {
      const createdUser = await userService.createUser({
        email: "test@test.com",
        password: "password",
      });

      if (!createdUser) {
        throw errorHandler.generateError({
          error: new Error("User not found"),
          status: 404,
        });
      }

      logger.info({
        message: "User created",
        user: createdUser,
      });

      const userId = createdUser.id;

      const foundUser = await userService.getUserById(userId);

      if (!foundUser) {
        throw errorHandler.generateError({
          error: new Error("User not found"),
          status: 404,
        });
      }

      logger.info({
        message: "User found",
        user: foundUser,
      });

      const deletedUser = await userService.deleteUser(userId);

      if (!deletedUser) {
        throw errorHandler.generateError({
          error: new Error("User not found"),
          status: 404,
        });
      }

      logger.info({
        message: "User deleted",
        user: deletedUser,
      });

      res.json({ status: "ok", foundUser, deletedUser, createdUser });
    } catch (error) {
      next(error);
    }
  },
});
