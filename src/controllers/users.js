const fs = require("fs");
const { response } = require("../helpers/standardResponse");
const modelUsers = require("../models/users");
const { APP_URL } = process.env;

exports.getUsers = (req, res) => {
  if (req.authUser.role === "admin") {
    const condition = req.query;
    condition.search = condition.search || "";
    condition.sort = condition.sort || {};
    condition.sort.id = condition.sort.id || "ASC";
    condition.limit = parseInt(condition.limit) || 5;
    condition.offset = parseInt(condition.offset) || 0;
    condition.page = parseInt(condition.page) || 1;
    condition.offset = condition.page * condition.limit - condition.limit;

    let pageInfo = {};
    modelUsers.getUserByCond(condition, (error, resUser) => {
      if (!error) {
        modelUsers.getTotalUser(condition, (errTotal, resTotal) => {
          if (!errTotal) {
            const totalData = resTotal[0].count;
            const lastPage = Math.ceil(totalData / condition.limit);

            pageInfo.totalData = totalData;
            pageInfo.currentPage = condition.page;
            pageInfo.lastPage = lastPage;
            pageInfo.limit = condition.limit;
            pageInfo.nextPage =
              condition.page < lastPage
                ? `${APP_URL}/users/?page=${pageInfo.currentPage + 1}`
                : null;
            pageInfo.prevPage =
              condition.page > 1
                ? `${APP_URL}/users/?page=${pageInfo.currentPage - 1}`
                : null;
            return response(
              res,
              200,
              true,
              "Search data succesfully",
              resUser,
              pageInfo
            );
          } else {
            return response(res, 404, false, "Data not found!", results);
          }
        });
      } else {
        response(res, 500, false, `An error occured : ${error}`);
      }
    });
  } else {
    return response(res, 400, false, "Sorry, you have no authority!");
  }
};
