var axios = require('axios');


var id = "bf1ef6a8ecf74c2a74db";
var secret = "97c4d1e97256d620c5d956aeda78f52f6db07d0a";

var param = "?client_id=" + id + "&client_secret=" + secret;

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos(username) {

	return axios.get('https://api.github.com/users/' + username +'/repos'+ param + '&per_page=100');

}

function getTotalStars(repos) {

	return repos.data.reduce(function(prev, current) {
		return prev+current.stargazers_count}, 0)
	
}

function getPlayerData(player) {
	return getRepos(player.login)
	.then(getTotalStars)
	.then(function(totalStars) {
		return {
			followers:player.followers,
			totalStars: totalStars
		}
	})
}

function calculateScores(players) {
	return [
		players[0].followers*3 + players[0].totalStars,
		players[1].followers*3 + players[1].totalStars,
	]
}


// function getPlayerRepo






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

	},

	battle: function(players) {
		var playerOneData = getPlayerData(players[0])
		var playerTwoData = getPlayerData(players[1])

		return axios.all([playerOneData,playerTwoData])
		.then(calculateScores)
		.catch(function(err) {
			console.warn('Error in playerinfo', err);
		})
	}
};

module.exports = helpers;