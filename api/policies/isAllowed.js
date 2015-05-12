/**
 * isAllowed
 * @description :: Policy to check if this request goes from our applications
 */

module.exports = function (req, res, next) {
  var token = req.headers['application-token'];

  if (token && token === "ded52be4c47622fdfc9eec47dca1f86a1809c29ce25a371e83487a91ef4027e5") {
    next();
  } else {
    res.unauthorized(null, null, 'You must provide application token');
  }
};
