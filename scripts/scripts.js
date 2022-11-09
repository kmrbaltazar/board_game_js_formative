let ds_game_database;

// Fetch JSON data
async function fetch_games_data() {
  const response = await fetch("./scripts/game-database.json");
  let js_version_games_db = await response.json();
  ds_game_database = js_version_games_db;

  console.log(ds_game_database);

  for (let j = 0; j < ds_game_database.length; j++)
    games_card_builder(ds_game_database[j]);
}

fetch_games_data();

// GAMES CARDS
let games_list_section = document.getElementById("games-list-id");

function games_card_builder(gameObj) {
  // Game card container
  let game_card_container = document.createElement("div");
  game_card_container.classList.add("game-card-container");
  games_list_section.appendChild(game_card_container);

  // Game Image wrapper - card
  let game_img_wrapper = document.createElement("div");
  game_img_wrapper.classList.add("game-img-wrapper");
  game_card_container.appendChild(game_img_wrapper);

  // Game image (card view)
  let game_img_card = document.createElement("img");
  game_img_card.src = gameObj.image;
  game_img_wrapper.appendChild(game_img_card);

  // Game info wrapper
  let game_info_wrapper = document.createElement("div");
  game_info_wrapper.classList.add("game-info-wrapper");
  game_card_container.appendChild(game_info_wrapper);

  // Game title wrapper
  let game_title_wrapper = document.createElement("div");
  game_title_wrapper.classList.add("game-title-wrapper");
  game_info_wrapper.appendChild(game_title_wrapper);

  // Game name inside game title wrapper
  let game_name = document.createElement("h3");
  game_name.innerHTML = gameObj.name;
  game_title_wrapper.appendChild(game_name);

  // P tag that will contain the category name and player info
  let game_category = document.createElement("span");
  game_category.innerHTML = gameObj.category;
  let min_players = document.createElement("span");
  min_players.innerHTML = gameObj.players.min;
  let max_players = document.createElement("span");
  max_players.innerHTML = gameObj.players.max;

  let game_info_p = document.createElement("p");
  game_info_p.innerHTML =
    game_category.innerHTML +
    " " +
    "|" +
    " " +
    min_players.innerHTML +
    "-" +
    max_players.innerHTML +
    " " +
    "players";
  game_title_wrapper.appendChild(game_info_p);

  // Link for more info - List view
  let link_list = document.createElement("a");
  link_list.classList.add("no-display");
  link_list.href = "https://boardgamegeek.com/browse/boardgame";
  link_list.innerHTML = "MORE" + " " + "INFORMATION";
  game_title_wrapper.appendChild(link_list);

  // Text info division
  let text_info_div = document.createElement("div");
  game_info_wrapper.appendChild(text_info_div);

  // Game description paragraph
  let game_description = document.createElement("p");
  game_description.classList.add('game-description');
  game_description.innerHTML = gameObj.description;
  text_info_div.appendChild(game_description);

  // Link more info - card view
  let link_card = document.createElement("a");
  link_card.href = "https://boardgamegeek.com/browse/boardgame";
  link_card.innerHTML = "MORE" + " " + "INFORMATION";
  text_info_div.appendChild(link_card);

};

//===========   FILTERING ===========   //

// View Change - CARD 
document.getElementById('card-icon').onclick = function(){
    for(let i=0; i<=ds_game_database.length; i++){
        ds_game_database[i].classList.remove('thumbnail');
        document.getElementById('more-info-list').classList.add('no-display');
        ds_game_database[i].classList.add('game-img-wrapper');
        
        
    }
}