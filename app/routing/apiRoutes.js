var friends = require("../data/friends");
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friend);
  });

  app.get("/api/survey", function(req, res) {
    res.json(friendData);
  });

  

  app.post("/api/friends", function(req, res) {
    
    if (friendData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    }
    else {
      friendsData.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", function(req, res) {
    friendData.length = [];
    friendsData.length = [];

    res.json({ ok: true });
  });
};