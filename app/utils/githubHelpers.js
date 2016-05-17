var axios = require('axios');


var id = "bf1ef6a8ecf74c2a74db";
var secret = "97c4d1e97256d620c5d956aeda78f52f6db07d0a";

var param = "?client_id=" + id + "&client_secret=" + secret;

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
	getPlayersInfo : function(players) {
		return axios.all(players.map(function(username){
			return getUserInfo(username);
		})).then(function(info) {
			return info.map(function(user){
				return user.data;
			})
		}).catch(function(err){
			console.log('error', err);
		})

	}
};

module.exports = helpers;