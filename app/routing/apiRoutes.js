// Load data
const friendsTable = require("../data/friends");

// Routing 
module.exports = function (app) {

  // API table
  app.get("/api/friends", function (req, res) {
    res.json(friendsTable);
  });

  // API POST requests
  app.post("/api/friends", function (req, res) {
    // console.log(req.body)
    // User input array
    let userInput = req.body

    let data = handleFriendFinderLogic(userInput)
    res.json(data);
  });

  // Return friend match
  const handleFriendFinderLogic = (userInput) => {
    let friendMatch;
    let friendSum;

    console.log(userInput)

    // Friends data array
    let friendsDataArray = friendsTable

    // Interatre through friendsArray
    friendsDataArray.forEach((friend) => {
      let sum = 0;
      let i = 0;

      // Get friend score
      friend.scores.forEach((score) => {
        let scoreCalculation = Math.abs(score - userInput.scores[i]);
        console.log(scoreCalculation);
        sum += scoreCalculation
        i++;
      });

      console.log('SUM: ', sum)
      console.log('FRIEND SUM: ', friendSum)
      // Compare freinds score
      if (sum <= friendSum || friendSum === undefined) {
        friendSum = sum;
        friendMatch = friend;
      };

      console.log('------------------')
    });
    return friendMatch;
  }
};
