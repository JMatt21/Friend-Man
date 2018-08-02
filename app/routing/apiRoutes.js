const friendsData = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        const newPerson = req.body;
        let minimum_difference = 1000;
        let ret = friendsData[0];

        for (person of friendsData) {
            let score_difference = 0;
            for (score in person.scores) {
                score_difference += Math.abs(parseInt(newPerson.scores[score]) - parseInt(person.scores[score]));
                // console.log(newPerson.scores[score], person.scores[score]);
            }
            if (score_difference < minimum_difference){
                console.log('changed person', score_difference, minimum_difference)
                minimum_difference = score_difference;
                ret = person;
            }
        }

        res.send(ret);
        friendsData.push(newPerson);
    })
}