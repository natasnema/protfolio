var ani
var game
var web

fetch('../json/ani.json')
.then(function (ani_response) {
return ani_response.json();
})
.then(function (ani_myJson) {
ani = ani_myJson;
return ani
});

fetch('../json/game.json')
.then(function (game_response) {
return game_response.json();
})
.then(function (game_myJson) {
game = game_myJson;
});

fetch('../json/web.json')
.then(function (web_response) {
return web_response.json();
})
.then(function (web_myJson) {
web = web_myJson;
});

console.log(ani);