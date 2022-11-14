let ds_game_database;

// Fetch JSON data
async function fetch_games_data() {
  const response = await fetch("./scripts/game-database.json");
  let js_version_games_db = await response.json();
  ds_game_database = js_version_games_db;

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
  game_card_container.id = gameObj.name;
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
  game_description.classList.add("game-description");
  game_description.innerHTML = gameObj.description;
  text_info_div.appendChild(game_description);

  // Link more info - card view
  let link_card = document.createElement("a");
  link_card.href = "https://boardgamegeek.com/browse/boardgame";
  link_card.innerHTML = "MORE" + " " + "INFORMATION";
  text_info_div.appendChild(link_card);
}

//===========   FILTERING ===========   //
let game_cards = document.getElementsByClassName("game-card-container");

// Card games
document.getElementById("card-games-btn").onclick = function () {
  let filtered_card_games = ds_game_database.filter(function (card_games_obj) {
    return card_games_obj.category.some(function (category_type) {
      return category_type == "Card game";
    });
  });

  for (let i = 0; i < game_cards.length; i++) {
    if (
      filtered_card_games.some(function (gameObj) {
        return gameObj.name == game_cards[i].id;
      })
    )
      game_cards[i].classList.remove("no-display");
    else game_cards[i].classList.add("no-display");
  }
};

// Party games
document.getElementById("party-games-btn").onclick = function () {
  let filtered_party_games = ds_game_database.filter(function (
    party_games_obj
  ) {
    return party_games_obj.category.some(function (category_type) {
      return category_type == "Party game";
    });
  });

  for (let i = 0; i < game_cards.length; i++) {
    if (
      filtered_party_games.some(function (gameObj) {
        return gameObj.name == game_cards[i].id;
      })
    )
      game_cards[i].classList.remove("no-display");
    else game_cards[i].classList.add("no-display");
  }
};

// Word games
document.getElementById("word-games-btn").onclick = function () {
  let filtered_word_games = ds_game_database.filter(function (word_games_obj) {
    return word_games_obj.category.some(function (category_type) {
      return category_type == "Word game";
    });
  });

  for (let i = 0; i < game_cards.length; i++) {
    if (
      filtered_word_games.some(function (gameObj) {
        return gameObj.name == game_cards[i].id;
      })
    )
      game_cards[i].classList.remove("no-display");
    else game_cards[i].classList.add("no-display");
  }
};

// Abstract strategy
document.getElementById("abstract-strategy-btn").onclick = function () {
  let filtered_abstract_strategy_games = ds_game_database.filter(function (
    abstract_strategy_games_obj
  ) {
    return abstract_strategy_games_obj.category.some(function (category_type) {
      return category_type == "Abstract strategy";
    });
  });

  for (let i = 0; i < game_cards.length; i++) {
    if (
      filtered_abstract_strategy_games.some(function (gameObj) {
        return gameObj.name == game_cards[i].id;
      })
    )
      game_cards[i].classList.remove("no-display");
    else game_cards[i].classList.add("no-display");
  }
};

// Bluffing/Deduction
document.getElementById("bluffing-btn").onclick = function () {
  let filtered_bluffing_games = ds_game_database.filter(function (
    bluffing_games_obj
  ) {
    return bluffing_games_obj.category.some(function (category_type) {
      return category_type == "Bluffing" || category_type == "Deduction";
    });
  });

  for (let i = 0; i < game_cards.length; i++) {
    if (
      filtered_bluffing_games.some(function (gameObj) {
        return gameObj.name == game_cards[i].id;
      })
    )
      game_cards[i].classList.remove("no-display");
    else game_cards[i].classList.add("no-display");
  }
};

// Kids games
document.getElementById("kids-games-btn").onclick = function () {
  let filtered_kids_games = ds_game_database.filter(function (kids_games_obj) {
    return kids_games_obj.category.some(function (category_type) {
      return category_type == "Kids games";
    });
  });

  for (let i = 0; i < game_cards.length; i++) {
    if (
      filtered_kids_games.some(function (gameObj) {
        return gameObj.name == game_cards[i].id;
      })
    )
      game_cards[i].classList.remove("no-display");
    else game_cards[i].classList.add("no-display");
  }
};

// All games
document.getElementById("all-games-btn").onclick = function () {
  for (let i in game_cards) game_cards[i].classList.remove("no-display");
};

// Games that 2 people can play
document.getElementById("2-player-btn").onclick = function () {
  let filtered_2_players = ds_game_database.filter(function (player_obj) {
    return player_obj.players.min <= 2 || player_obj.players.max == 2;
  });

  for (let i = 0; i < game_cards.length; i++) {
    if (
      filtered_2_players.some(function (gameObj) {
        return gameObj.name == game_cards[i].id;
      })
    )
      game_cards[i].classList.remove("no-display");
    else game_cards[i].classList.add("no-display");
  }
};

// Games that up to 4 people can play
document.getElementById("4-player-btn").onclick = function () {
  let filtered_4_players = ds_game_database.filter(function (player_obj) {
    return player_obj.players.max == 4;
  });

  for (let i = 0; i < game_cards.length; i++) {
    if (
      filtered_4_players.some(function (gameObj) {
        return gameObj.name == game_cards[i].id;
      })
    )
      game_cards[i].classList.remove("no-display");
    else game_cards[i].classList.add("no-display");
  }
};

// Games that 4+ people can play
document.getElementById("group-player-btn").onclick = function () {
  let filtered_group_players = ds_game_database.filter(function (player_obj) {
    return player_obj.players.min == 4;
  });

  for (let i = 0; i < game_cards.length; i++) {
    if (
      filtered_group_players.some(function (gameObj) {
        return gameObj.name == game_cards[i].id;
      })
    )
      game_cards[i].classList.remove("no-display");
    else game_cards[i].classList.add("no-display");
  }
};

// Search button

document.getElementById("search-btn").onclick = function () {
  let search_keyword = document.getElementById("search").value;
  let filtered_games = ds_game_database.filter(function (gameObj) {
    let game_values = Object.values(gameObj);
    return game_values.some(function (matched_games) {
      if (typeof matched_games != "string") return false;
      else return matched_games.includes(search_keyword);
    });
  });

  for (let c = 0; c < game_cards.length; c++) {
    if (
      filtered_games.some(function (gameObj) {
        return gameObj.name == game_cards[c].id;
      })
    )
      game_cards[c].classList.remove("no-display");
    else game_cards[c].classList.add("no-display");
  }
};

//===========   VIEW OPTIONS ===========   //

// LIST VIEW
document.getElementById("list-icon").onclick = function () {
  let game_cards = document.getElementsByClassName("game-card-container");

  for (let z = 0; z < game_cards.length; z++) {
    game_cards[z].childNodes[0].classList.remove("game-img-wrapper");
    game_cards[z].childNodes[0].classList.add("thumbnail");
    game_cards[z].childNodes[1].childNodes[0].childNodes[2].classList.remove(
      "no-display"
    );
    game_cards[z].childNodes[1].childNodes[1].classList.add("no-display");
    game_cards[z].classList.add("list-view");
    game_cards[z].childNodes[1].childNodes[0].classList.add("list-info");
  }
};

// CARD VIEW / DETAILED VIEW
document.getElementById("card-icon").onclick = function () {
  let game_cards = document.getElementsByClassName("game-card-container");

  for (let r = 0; r < game_cards.length; r++) {
    game_cards[r].childNodes[0].classList.remove("thumbnail");
    game_cards[r].childNodes[0].classList.add("game-img-wrapper");
    game_cards[r].childNodes[1].childNodes[0].childNodes[2].classList.add(
      "no-display"
    );
    game_cards[r].childNodes[1].childNodes[1].classList.remove("no-display");
    game_cards[r].classList.remove("list-view");
    game_cards[r].childNodes[1].childNodes[0].classList.remove("list-info");
  }
};


// ============= GO TO TOP BUTTON
let mybutton = document.getElementById("mybutton");

window.onscroll = function(){
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.classList.remove('no-display');
  } else {
    mybutton.classList.add('no-display');
  }
}