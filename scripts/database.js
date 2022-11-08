// COPYRIGHT GAME INFO, SOME DESC AND IMAGES FROM BOARDGAMEGEEK, SOME DESCRIPTION FROM GAMEKINGS

let games_database = [
    {
        name: '5-Minute Marvel',
        players: {
            min: 2,
            max: 5
        },
        ageGroup: '8+',
        playtime: '5 min',
        type: ['family', 'party'],
        category: ['Card game', 'Comic book', 'Fighting', 'Real-time'],
        image: 'https://cf.geekdo-images.com/wMBSeJSMRvbrgpdNNS50Wg__imagepage/img/o6kIhHxrkWH35iK-99HhWGyJOHc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6037278.jpg',
        description: 'The Marvel version of the chaotically fast-paced cooperative card game 5-Minute Dungeon that lets a group of Marvel heroes battle past Marvel bosses all in less than 5 minutes! Fast and frenetic gameplay gets everyone involved and engaged. Cooperative gameplay encourages communication, interpersonal interaction, and teamwork. 10 Marvel heroes to choose from and 6 progressively difficult Marvel bosses delivers strong re-playability.'
    },
    {
        name: '5 Second Rule',
        players: {
            min: 3,
            max: 6
        },
        ageGroup: '10+',
        playtime: '30 min',
        type: 'Party',
        category: ['Card game', 'Party game', 'Trivia'],
        image: 'https://cf.geekdo-images.com/RK_zGSbUyN2uBTvJxt0xqA__imagepage/img/I35ka4jg2QRmmuSgKOV_mE7jArA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4993497.jpg',
        description: '"It should be easy to name 3 breeds of dogs - but can you do it under the pressure of 5 seconds twisting down, and with the other players staring at you, waiting for you to get flustered? Time is not on your side, so just say what comes to mind and risk ridiculous answers slipping out as time twirls down on the unique twisted timer! It is all in good fun with this fast-paced game where you have to "Just Spit It Out!""'
    },
    {
        name: '7 Wonders',
        players: {
            min: 2,
            max: 7
        },
        ageGroup: '10+',
        playtime: '30 min',
        type: ['Family', 'Strategy'],
        category: ['Card game', 'Ancient', 'City building', 'Civilization', 'Economic'],
        image: 'https://cf.geekdo-images.com/35h9Za_JvMMMtx_92kT0Jg__imagepage/img/WKlTys0Dc3F6x9r05Fwyvs82tz4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7149798.jpg',
        description: 'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.'
    },
    {
        name: 'Above and Below',
        players: {
            min: 2,
            max: 4
        },
        ageGroup: '13+',
        playtime: '90 min',
        type: 'Thematic',
        category: ['Adventure', 'Exploration', 'City building', 'Fantasy', 'Economic', 'Farming', 'Negotiation'],
        image: 'https://cf.geekdo-images.com/U0wpvRmBe65e4vwGf0Jbpg__imagepage/img/ClaTwQwPLZPNAP_QRKKP_iY75-Y=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2398773.jpg',
        description: 'Above and Below is a mashup of town-building and storytelling where you and up to three friends compete to build the best village above and below ground. In the game, you send your villagers to perform jobs like exploring the cave, harvesting resources, and constructing houses. Each villager has unique skills and abilities, and you must decide how to best use them. You have your own personal village board, and you slide the villagers on this board to various areas to indicate that they have been given jobs to do. Will you send Hanna along on the expedition to the cave? Or should she instead spend her time teaching important skills to one of the young villagers?'
    },
    {
        name: 'Acquire',
        players: {
            min: 2,
            max: 6
        },
        ageGroup: '12+',
        playtime: '90 min',
        type: 'Strategy',
        category: ['Economic', 'Territory building'],
        image: 'https://cf.geekdo-images.com/3C--kJRhi6kTPHsr9dNaWw__imagepage/img/5pPjC2ZGn3g5VcC85P0RW_8Ocl0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3299296.jpg',
        description: 'In Acquire, each player strategically invests in businesses, trying to retain a majority of stock. As the businesses grow with tile placements, they also start merging, giving the majority stockholders of the acquired business sizable bonuses, which can then be used to reinvest into other chains. All of the investors in the acquired company can then cash in their stocks for current value or trade them 2-for-1 for shares of the newer, larger business. The game is a race to acquire the greatest wealth.'
    },
    {
        name: 'Architects of the West Kingdom',
        players: {
            min: 1,
            max: 5
        },
        ageGroup: '12+',
        playtime: '60-80 min',
        type: 'Strategy',
        category: ['City building', 'Medieval'],
        image: 'https://cf.geekdo-images.com/OAX7HfOz-9N60StgADzd0g__imagepage/img/5ywjRTCEspI8ImeRWZWTgeuhl4g=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3781944.png',
        description: 'Architects of the West Kingdom is set at the end of the Carolingian Empire, circa 850 AD. As royal architects, players compete to impress their King and maintain their noble status by constructing various landmarks throughout his newly appointed domain. Players will need to collect raw materials, hire apprentices and keep a watchful eye on their workforce. These are treacherous times. Rival architects will stop at nothing to slow your progress. Will you remain virtuous, or be found in the company of thieves and black marketeers?'
    },
    {
        name: 'Arkham Horror the Card Game',
        players: {
            min: 1,
            max: 2
        },
        ageGroup: '14+',
        playtime: '60-120 min',
        type: ['Customizable', 'Thematic'],
        category: ['Adventure', 'Card game', 'Collectible components', 'Exploration', 'Horror', 'Novel-based'],
        image: 'https://cf.geekdo-images.com/B5F5ulz0UivNgrI9Ky0euA__imagepage/img/tgpLRvv6AIsClnegErNpAoieeMo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3122349.jpg',
        description: 'Arkham Horror: The Card Game is a cooperative Living Card Game (LCG) set amid a backdrop of Lovecraftian horror. As the Ancient Ones seek entry to our world, one to two investigators (or up to four with two Core Sets) work to unravel arcane mysteries and conspiracies.'
    },
    {
        name: 'Articulate',
        players: {
            min: 4,
            max: 8
        },
        ageGroup: '12+',
        playtime: '60 min',
        type: 'Party',
        category: ['Party game', 'Word game'],
        image: 'https://cf.geekdo-images.com/BOvTyp_E-3UXcWpD9bVYog__imagepage/img/vFoVgLmExRPO8jdNaalBaw5ohro=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5885634.jpg',
        description: 'A team game packed with excitement. It is simple. clean. rowdy. fast and fun! How quickly can you describe a word without actually saying it? The idea is to describe as many card entries as you can to your team-mates before the timer runs out. As your team-mates shout out their guesses you will need to strive to fully articulate even better descriptions.'
    },
    {
        name: 'Axis & Allies',
        players: {
            min: 2,
            max: 5
        },
        ageGroup: '12+',
        playtime: '240 min',
        type: 'Wargames',
        category: ['Economic', 'Wargame', 'World War II'],
        image: 'https://cf.geekdo-images.com/pyOrqfD3MpoR9vAZz4asLA__imagepage/img/GDGM4ldm8o7PWhipQNGWTFCCLVs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic42246.jpg',
        description: 'The game simulates the entire scope of World War II. Axis & Allies features a simple dice-based combat system; a small number of types of naval, air and land units; territory control; and technology research to improve unit capabilities.'
    },
    {
        name: 'Azul',
        players: {
            min: 2,
            max: 4
        },
        ageGroup: '8+',
        playtime: '30-45 min',
        type: ['Abstract', 'Family'],
        category: ['Abstract strategy', 'Puzzle', 'Renaissance'],
        image: 'https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__imagepage/img/q4uWd2nXGeEkKDR8Cc3NhXG9PEU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6973671.png',
        description: 'Azul captures the beautiful aesthetics of Moorish art in a contemporary board game. Players compete as artisans decorating the walls of the Royal Palace of Evora. By carefully drafting the correct quantity and style of tiles, the most clever of artisans plan ahead to maximize the beauty of their work (not to mention their scores!) while ensuring they wasted no supplies in the process. Winner of the board game of the year award in 2018.'
    },
    {
        name: 'Balloon Lagoon (Cranium)',
        players: {
            min: 2,
            max: 4
        },
        ageGroup: '5+',
        playtime: '15 min',
        type: 'Children',
        category: ['Action/Dexterity', 'Kids Games', 'Word game'],
        image: 'https://cf.geekdo-images.com/8oLJu4SMxJKfU1L_UiGM_g__imagepage/img/iUbsyzO6syKuIHDb7jak7AxhYYo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic500769.jpg',
        description: 'Players giggle with delight as they race to complete each fun-filled carnival activity before the merry-go-round music comes to an end. Kids fish for letters at Letter Lake, match tasty treats at Snack Hut, spin a picture puzzle at Tumble Tides, and flip frogs back home at Frog Pond. Every catch, roll, spin, or flip is a chance to cheer and get more balloons. The first player to collect 15 balloons is the winner! Each game lasts about 15 minutes, but kids will want to play again and again! (From the manufacturer)'
    },
    {
        name: 'Bananagrams',
        players: {
            min: 1,
            max: 8
        },
        ageGroup: '7+',
        playtime: '15 min',
        type: 'Family',
        category: ['Real-time', 'Word game'],
        image: 'https://cf.geekdo-images.com/1QjYPI4bXx4OUMJPlrsNBA__imagepage/img/KuhbjFA_sG11Ksrkli67Sz5MYGo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2463443.jpg',
        description: 'Bananagrams is a fast and fun word game that requires no pencil, paper or board, and the tiles come in a fabric banana-shaped carrying pouch. One hand can be played in as little as five minutes. Much like Pick Two!, but without the letter values.'
    },
    {
        name: 'Bang',
        players: {
            min: 4,
            max: 7
        },
        ageGroup: '10+',
        playtime: '20-40 min',
        type: 'Party',
        category: ['American west', 'Card game', 'Bluffing', 'Deduction', 'Fighting'],
        image: 'https://cf.geekdo-images.com/_04xA-d-rfygm0c49HE4vA__imagepage/img/z7zjURq1H0BJBpyVq3r_DZ_as48=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1170986.jpg',
        description: 'The card game BANG! recreates an old-fashioned spaghetti western shoot-out, with each player randomly receiving a Character card to determine special abilities, and a secret Role card to determine their goal.'
    },
    {
        name: 'Barrel of Monkeys',
        players: {
            min: 1,
            max: 1
        },
        ageGroup: '3+',
        playtime: '10 min',
        type: 'Children',
        category: ['American west', 'Card game', 'Bluffing', 'Deduction', 'Fighting'],
        image: 'https://cf.geekdo-images.com/m1G4ZRK99V-CZYPnYWwK7g__imagepage/img/Jni69qCXiA5jDZBV9qHq70uOxfI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic336380.jpg',
        description: 'Did you know that this is not just a child toy, but also a game? Try to hook a chain of monkeys until you stop or your chain falls apart. You score one point for every monkey in the chain at that point. First to 12 points wins!'
    },
    {
        name: 'Beetle Game',
        players: {
            min: 2,
            max: 8
        },
        ageGroup: '8+',
        playtime: '30-60 min',
        type: 'Family',
        category: 'Party game',
        image: 'https://cf.geekdo-images.com/2BVYA6WQWbhdhewL0vh0Pg__imagepage/img/66QpTVYKIWNE158vkizLNaJrQ_o=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7141062.jpg',
        description: 'The Beetle Game is a party game where players or teams draw pictures of beetles on a playing card containing 10 small squares.'
    },
    {
        name: 'Betrayal at the House on the Hill',
        players: {
            min: 3,
            max: 6
        },
        ageGroup: '12+',
        playtime: '60 min',
        type: 'Thematic',
        category: ['Adventure', 'Exploration', 'Horror', 'Miniatures'],
        image: 'https://cf.geekdo-images.com/lqmt2Oti_qJS65XqHcB8AA__imagepage/img/dxrUKI24svPBCJAcNqzHy_uayp4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5146864.png',
        description: 'Betrayal at House on the Hill is a tile game that allows players to build their own haunted house room by room, tile by tile, creating a new thrilling game board every time. The game is designed for three to six people, each of whom plays one of six possible characters.'
    },
    {
        name: 'Bloodborne the Card Game',
        players: {
            min: 3,
            max: 5
        },
        ageGroup: '14+',
        playtime: '30-45 min',
        type: 'Thematic',
        category: ['Card game', 'Fantasy', 'Horror', 'Video game theme'],
        image: 'https://cf.geekdo-images.com/zczRMJvEEGhqLGwxxOQQuw__imagepage/img/-mGBYi5npACCSrEnPkH-RvvFHzQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3297526.jpg',
        description: 'Bloodborne: The Card Game is based on the Chalice Dungeons in the video game Bloodborne — the ever-changing labyrinths and tombs carved out by the Great Ones beneath the fallen city of Yharnam, where horrifying creatures reside. Players compete to kill monsters and take their blood. In general, Bloodborne is a game about risk management with a bit of group think, inventory management/upgrades, and tactical play. You start with a hand of basic weapons, which you get to upgrade to improve your fighting combos and capabilities.'
    },
    {
        name: 'Bloodborne the Card Game - The Hunters Nightmare',
        players: {
            min: 3,
            max: 5
        },
        ageGroup: '14+',
        playtime: '30-45 min',
        type: 'Thematic',
        category: ['Card game', 'Fantasy', 'Horror', 'Video game theme', 'Expansion for base-game'],
        image: 'https://cf.geekdo-images.com/gRpqU-8egYJRGe5jaQXJvg__imagepage/img/KKavQ0cvER0aDsZUsBgFAZtBFcg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4073250.jpg',
        description: 'Bloodborne: The Card Game is based on the Chalice Dungeons in the video game Bloodborne — the ever-changing labyrinths and tombs carved out by the Great Ones beneath the fallen city of Yharnam, where Return to the Chalice Dungeons in Bloodborne: The Card Game – The Hunters Nightmare. In this expansion, players must survive against new, deadly bosses and monsters; however, new weapons will help hunters along the way. The Hunters Nightmare also introduces two new gameplay features: Death Tokens and Runes, both of which will have lasting effects throughout your games.'
    },
    {
        name: 'Boganology',
        players: {
            min: 2,
            max: 4
        },
        ageGroup: '12+',
        playtime: '45-90 min',
        type: 'Party game',
        category: ['Economic', 'Negotiation'],
        image: 'https://cf.geekdo-images.com/1tAC_nSA7PTCjRmA2o-02w__imagepage/img/DZXDUCgbW2Eun6b6FAP6hcuZG0M=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4002798.jpg',
        description: 'Players take the part of bogans, attempting to buy and then develop their acquisitions. Income is gained by other players visiting their properties and money is spent when they visit properties belonging to other players.'
    },
    {
        name: 'Boggle',
        players: {
            min: 1,
            max: 8
        },
        ageGroup: '8+',
        playtime: '10 min',
        type: 'Family',
        category: ['Dice', 'Real-time', 'Word game'],
        image: 'https://cf.geekdo-images.com/dsI6-jUj8mzOuC6gL4e42w__imagepage/img/ZL8MgYWT6EC6e0dZGVU4HV_p89E=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7024967.jpg',
        description: 'Boggle is a timed word game in which players have 3 minutes to find as many connected words as possible from the face up letters resting in a 16 cube grid. When the timer runs out, players compare their lists of words and remove any words found by multiple players. Points are then awarded for remaining words, depending on how many letters are in the word. (In the original Boggle, all words must contain 3 or more letters to score points.)'
    },
    {
        name: 'BrainBox',
        players: {
            min: 1,
            max: 6
        },
        ageGroup: '8+',
        playtime: '5-10 min',
        type: 'Children',
        category: ['Kids games', 'Educational', 'Memory'],
        image: 'https://cf.geekdo-images.com/EOVDyZSKxFCwMBExdhiBqQ__imagepage/img/cgALeWbyib1EgvxaAFJAk7gIeE0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5066086.jpg',
        description: 'Take BrainBox to a whole new level with the BrainBox Board Game! Lift the lid off the box to make the playing board magically appear, then move around the board collecting cards from each of eight subject categories, including Food and Drink, People and Places and Entertainment. Special squares allow you to pick your own subject category, battle against another player or gamble the cards you hold already in order to win the game.'
    },
    {
        name: 'Brass: Birmingham',
        players: {
            min: 2,
            max: 4
        },
        ageGroup: '14+',
        playtime: '60-120 min',
        type: 'Strategy',
        category: ['Economic', 'Industry/Manufacturing', 'Post-Napoleonic', 'Transportation'],
        image: 'https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__imagepage/img/-17KkOmxbTu2slJTabGrkO8ZW8s=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3490053.jpg',
        description: 'Brass: Birmingham is an economic strategy game sequel to the Martin Wallace 2007 masterpiece, Brass. Brass: Birmingham tells the story of competing entrepreneurs in Birmingham during the industrial revolution, between the years of 1770-1870. As in its predecessor, you must develop, build, and establish your industries and network, in an effort to exploit low or high market demands.'
    },
    {
        name: 'Break the Code',
        players: {
            min: 2,
            max: 4
        },
        ageGroup: '10+',
        playtime: '15 min',
        type: 'Family',
        category: ['Deduction', 'Math', 'Number', 'Puzzle'],
        image: 'https://cf.geekdo-images.com/OnzOo8WGQVEGLIk-GFIzdg__imagepage/img/wzM1SdXurGaPliB6_jIKZoUNVp4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4920145.jpg',
        description: 'Break the Code is a logical deduction game played with number tiles and question cards. You win if you can guess all of your opponents tiles in a two-player game or if you can guess the face-down tiles in the center for a three- or four-player game. Put on your thinking cap!'
    },
    {
        name: 'Buckaroo',
        players: {
            min: 2,
            max: 4
        },
        ageGroup: '4+',
        playtime: '10 min',
        type: 'Children',
        category: ['Action/Dexterity', 'American West', 'Animals', 'Kids games'],
        image: 'https://cf.geekdo-images.com/_3nVjDzpDDc-toYcndFQPQ__imagepage/img/gEwULTpD1F1FnLkL6SeHw_djI8k=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2820167.jpg',
        description: 'The saddle-stacking game with the moody mule. Put on the shovel, balance the bottle. If it is too heavy, the mule will kick. See how much he can carry. You never know when he will snap and send everything flying. Also available as Ali Baba with a camel.'
    },
    {
        name: 'Candy Land',
        players: {
            min: 2,
            max: 4
        },
        ageGroup: '3+',
        playtime: '30 min',
        type: 'Children',
        category: ['Racing', 'Kids games'],
        image: 'https://cf.geekdo-images.com/97n-BYkjnFiHAhqUz-KTyw__imagepage/img/NnWtYK9qvj8J89RcqLwP5DKy7b8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3542482.jpg',
        description: 'Players race down a rainbow-colored track to be the first to find the lost King Kandy at Candy Castle, but watch out for obstacles like the sticky Molasses Swamp! Start by placing your plastic Gingerbread Man (or other character marker) at the beginning of the track. Each turn, players draw a simple card and move by matching the color on the card to the next color on the track. Some cards show a named location on the board; players who draw these cards move forward or backward on the track to the named location. The game ends when the first player arrives at Candy Castle by reaching or moving beyond the last square on the track.'
    },
    {
        name: 'Carcassonne',
        players: {
            min: 2,
            max: 5
        },
        ageGroup: '7+',
        playtime: '30-45 min',
        type: 'Family',
        category: ['City building', 'Medieval', 'Territory building'],
        image: 'https://cf.geekdo-images.com/okM0dq_bEXnbyQTOvHfwRA__imagepage/img/axGbn7f0x6UUb07DmzX9hg5TwIo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6544250.png',
        description: 'Carcassonne is a tile-placement game in which the players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, etcetera. Having placed a tile, the player can then decide to place one of their meeples on one of the areas on it: on the city as a knight, on the road as a robber, on a cloister as a monk, or on the grass as a farmer. When that area is complete, that meeple scores points for its owner.'
    },
    {
        name: 'Cards Against Disney',
        players: {
            min: 4,
            max: 20
        },
        ageGroup: '17+',
        playtime: '30-60 min',
        type: 'Party',
        category: ['Card game', 'Mature/Adult', 'Party game'],
        image: 'https://cf.geekdo-images.com/Ept3RbOIxxiAwk8538yfBQ__imagepage/img/UFLtDB-th2Qd1MrAFRFaL6jx3BQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6642799.jpg',
        description: 'Bambi did WHAT?! Disney is about to become the most disgusting place on earth with these filthy yet hilarious cards! Whether you love Disney or hate it - these cards will leave you in stiches! And possibly needing therapy to heal the emotional trauma...'
    },
    {
        name: 'Cards Against humanity',
        players: {
            min: 4,
            max: 30
        },
        ageGroup: '17+',
        playtime: '30 min',
        type: 'Party',
        category: ['Card game', 'Mature/Adult', 'Party game', 'Humor', 'Print & Play'],
        image: 'https://cf.geekdo-images.com/nYLrPiI9gnvlrwOrKQ4_CA__imagepage/img/ksHPogfKJqWT-ASJD4t-kyLhf_M=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2909692.jpg',
        description: 'Cards Against Humanity is a party game for horrible people. Unlike most of the party games you have played before, Cards Against Humanity is as despicable and awkward as you and your friends.'
    },
    {
        name: 'Cards Against Star Wars',
        players: {
            min: 3,
            max: 20
        },
        ageGroup: '17+',
        playtime: '30-90 min',
        type: 'Party',
        category: ['Card game', 'Mature/Adult', 'Party game', 'Humor', 'Print & Play'],
        image: 'https://cf.geekdo-images.com/7eD4bjoltijDgf4jXJ69rQ__imagepage/img/Ps3atsDoj7sDE9Lpn4REzPToH-k=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6374335.jpg',
        description: 'Modelled on “Card Games Against Humanity,” this “Cards Against Star Wars” card game is a Limited Edition card game with the Star Wars theme for you and your friends, and all the more fun if you’re a fan of Obi Wan Kenobi, Princess Leia, R2D2 and the rest of the crew.'
    },
    {
        name: 'Ca$h n Gun$',
        players: {
            min: 4,
            max: 6
        },
        ageGroup: '10+',
        playtime: '30 min',
        type: 'Party',
        category: ['Card game', 'Bluffing', 'Party game', 'Humor', 'Fighting', 'Mafia', 'Negotiation'],
        image: 'https://cf.geekdo-images.com/_UpTZr1itCcHdnnbuTUnQQ__imagepage/img/HuPHo6QOFg8AvvzT-LcLu1Th3C0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic87523.jpg',
        description: 'In an abandoned warehouse a gangster band is splitting its loot, but they can’t get an agreement on the split! It’s time to let the guns talk and soon everyone is aiming at everyone. The richest surviving gangster wins the game! Ca$h n Gun$ will make you relive the best scenes of your favorite gangster movies. Fun, bluffing, and tough negotiations are guaranteed, but will you dare to play? It is simply killing!'
    },
    {
        name: 'Catacombs',
        players: {
            min: 2,
            max: 5
        },
        ageGroup: '12+',
        playtime: '30-60 min',
        type: 'Thematic',
        category: ['Action/Dexterity', 'Adventure', 'Fantasy', 'Fighting'],
        image: 'https://cf.geekdo-images.com/HR5mkNeowHMPqpYYYwKBIQ__imagepage/img/crtkFbjG8Q9PLFYQsCTFEsoWgAo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1258597.jpg',
        description: 'Catacombs is an action/dexterity-based adventure board game. One player controls the Overseer, controlling the monsters of the catacombs; the other player(s) control the four heroes who cooperatively try to defeat the monsters and eventually the Catacomb Lord. Each of the heroes has special abilities that must also be used effectively if they are to prevail.'
    },
    {
        name: 'Cat and the Hat I Can Do That',
        players: {
            min: 2,
            max: 4
        },
        ageGroup: '4+',
        playtime: '20 min',
        type: 'Children',
        category: ['Action/Dexterity', 'Card game', 'Kids games', 'Novel-based'],
        image: 'https://cf.geekdo-images.com/sOIR94QGzT6J6vvPDD0dfw__imagepage/img/U3oJl2ImWciveKVhcIdqKQXoq4s=/fit-in/900x600/filters:no_upscale():strip_icc()/pic423169.jpg',
        description: 'Catacombs is an action/dexterity-based adventure board game. One player controls the Overseer, controlling the monsters of the catacombs; the other player(s) control the four heroes who cooperatively try to defeat the monsters and eventually the Catacomb Lord. Each of the heroes has special abilities that must also be used effectively if they are to prevail.'
    },
    {
        name: 'Chess & Checkers',
        players: {
            min: 2,
            max: 2
        },
        ageGroup: '8+',
        playtime: '30 min',
        type: 'Abstract',
        category: 'Abstract strategy',
        image: 'https://trademe.tmcdn.co.nz/photoserver/1024sq/1651616846.jpg',
        description: 'Play the traditional board games of either chess or checkers'
    },
    {
        name: 'Citadels',
        players: {
            min: 2,
            max: 8
        },
        ageGroup: '10+',
        playtime: '20-60 min',
        type: ['Family', 'Strategy'],
        category: ['Bluffing', 'Card game', 'City building', 'Deduction', 'Fantasy', 'Medieval'],
        image: 'https://cf.geekdo-images.com/42iW4E-vOumFXRQAiSf-GA__imagepage/img/PkYPoLGOvl-bTSGGPa5QNwmIXpA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3239104.jpg',
        description: 'In Citadels, players take on new roles each round to represent characters they hire in order to help them acquire gold and erect buildings. The game ends at the close of a round in which a player erects his/her eighth building. Players then tally their points, and the player with the highest score wins.'
    },
    {
        name: 'Cluedo',
        players: {
            min: 2,
            max: 6
        },
        ageGroup: '8+',
        playtime: '40 min',
        type: 'Family',
        category: ['Bluffing', 'Deduction', 'Murder/Mystery'],
        image: 'https://cf.geekdo-images.com/5NJKy5K9c0tyCTnTWFekeQ__imagepage/img/lwbGt5HKkFgga6oJVBZesP5YOpk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3181978.png',
        description: 'Clue/do is a murder mystery game. The aim is to find out who committed the murder, which weapon they used, and where in the mansion they did it. How do you solve the case? By careful questioning of your fellow players you can deduce which information is concealed in the crime envelope. The trick is to be clever with your questioning... Everyone develops their own system!'
    },
    {
        name: 'Codenames',
        players: {
            min: 2,
            max: 8
        },
        ageGroup: '14+',
        playtime: '15 min',
        type: 'Party',
        category: ['Card game', 'Deduction', 'Party game', 'Spies/Secret Agents', 'Word game'],
        image: 'https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__imagepage/img/rc_Do8f5v41nWEGcwHE1eKAkIfI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2582929.jpg',
        description: 'Codenames is an easy party game to solve puzzles. The game is divided into red and blue, each side has a team leader, the goal of the team leader is to lead their team to the final victory.'
    },
    {
        name: 'Codenames Pictures',
        players: {
            min: 2,
            max: 8
        },
        ageGroup: '10+',
        playtime: '15 min',
        type: 'Party',
        category: ['Card game', 'Deduction', 'Party game', 'Spies/Secret Agents'],
        image: 'https://cf.geekdo-images.com/Q2u-Nk68Wb1iLjxh_dfsIg__imagepage/img/_kMN1ENZOJYdiL8dVS_ZpdmVl9w=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3476592.jpg',
        description: 'Codenames: Pictures differs from the original Codenames in that the agents are no longer represented by a single word, but by an image that contains multiple elements.'
    },
    {
        name: 'Conan',
        players: {
            min: 2,
            max: 5
        },
        ageGroup: '14+',
        playtime: '15 min',
        type: 'Thematic',
        category: ['Adventure', 'Fantasy', 'Fighting', 'Miniatures', 'Novel-based'],
        image: 'https://cf.geekdo-images.com/x0VJACjymxo4boRichVVKQ__imagepage/img/OheL5j_xJz_AfvuleU6AY_h4a2k=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3118623.jpg',
        description: 'Conan, designed by Fred Henry and based on the Conan universe by Robert E. Howard, is a scenario-based semi-cooperative asymmetric miniatures board game. One player is the Overlord, playing the opposition forces, and the other players (1 to 4) play Conan and his companions: Shevatas the thief, Hadrathus the Priest/Sorcerer, Belit the pirate queen, Valeria the warrior, etc. '
    },
    {
        name: 'Connect 4',
        players: {
            min: 2,
            max: 2
        },
        ageGroup: '6+',
        playtime: '15 min',
        type: ['Abstract', 'Children'],
        category: ['Abstract strategy', 'Kids games'],
        image: 'https://cf.geekdo-images.com/o40YUEwzjJ5k-K_l8cDi5w__imagepage/img/VK9udOHUnjB0Wa-gCI5Ehhd2JyQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic738020.jpg',
        description: 'Challenge a friend to disc-dropping fun with the classic game of Connect 4! Drop your red or yellow discs in the grid and be the first to get 4 in a row to win. If your opponent is getting too close to 4 in a row, block them with your own disc! Whoever wins can pull out the slider bar to release all the discs and start the fun all over again!'
    },
    {
        name: 'Cosmic Encounter Duel',
        players: {
            min: 2,
            max: 2
        },
        ageGroup: '14+',
        playtime: '30 min',
        type: 'Strategy',
        category: ['Bluffing', 'Science fiction', 'Space exploration'],
        image: 'https://cf.geekdo-images.com/kroYzAvfIIwlO5N824qPzA__imagepage/img/hMnFuYaBoIIn5HG0s0JJFzJV5MQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6352686.jpg',
        description: 'Cosmic Encounter Duel is a competitive standalone two-player game in the Cosmic Encounter universe in which you and your closest frenemy race to be the first to control five planets. Each of twenty-seven alien species comes equipped with its own unique abilities that play with the game mechanisms in some way, offering you an edge in the fight, e.g., the Cheater, who can reserve an additional tactic that they can put toward any fight in the game — as long as their opponent does not call out how they are trying to "cheat". How your game of Cosmic Encounter Duel plays out will inevitably be affected by which powers each dueling species has and how they play off of one another.'
    },
    {
        name: 'Coup',
        players: {
            min: 2,
            max: 6
        },
        ageGroup: '13+',
        playtime: '15 min',
        type: 'Party',
        category: ['Bluffing', 'Card game', 'Deduction', 'Party game', 'Political'],
        image: 'https://cf.geekdo-images.com/MWhSY_GOe2-bmlQ2rntSVg__imagepage/img/HPKaW4sG3jlaO3MM5V6x0Ks0DGI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2016054.jpg',
        description: 'Coup is a game of bluff and deception set in The Resistance universe for 2 to 6 players with a 15 minute play time. In a future where the government is run for profit, all but a privileged few live lives of poverty and desperation. The Resistance rises out of these oppressed masses in revolt and throws the government into chaos. To take command, you must destroy the influence of your rivals and drive them into exile. Only one can survive.'
    },
    {
        name: 'Cranium',
        players: {
            min: 4,
            max: 16
        },
        ageGroup: '13+',
        playtime: '60 min',
        type: 'Party',
        category: ['Puzzle', 'Trivia', 'Word game', 'Party game'],
        image: 'https://cf.geekdo-images.com/-RAQw4eCx3i__6ctz6-N9A__imagepage/img/-1cAdTS00HQsI-su8SVx0Wnp0Rw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4994220.jpg',
        description: 'Cranium bills itself as the "whole-brain" game. It is a party game that borrows from a host of other popular party games of recent times. Players have to successfully complete activities in each of four sections to win'
    },
    {
        name: 'Crazy Tower',
        players: {
            min: 1,
            max: 4
        },
        ageGroup: '8+',
        playtime: '10-20 min',
        type: 'Party',
        category: ['Action/Dexterity', 'Kids games', 'Party game'],
        image: 'https://cf.geekdo-images.com/AHyk7AZAZCOGm2bhk6kLew__imagepage/img/i-Mb3B8DIin-ZABSmLWJ2DdL4TI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5303213.jpg',
        description: 'In Crazy Tower, players work together to get rid of their blocks and build a safe, stable structure. All of them, except for one that is. One player takes on the role of the Traitor, looking to deviously make a building that will collapse on another players turn. Will they succeed, or will the Tower stand the test of time? Either way, you can bet it is going to be crazy!'
    },
    {
        name: 'Cube Quest',
        players: {
            min: 2,
            max: 2
        },
        ageGroup: '8+',
        playtime: '15 min',
        type: 'Family',
        category: ['Action/Dexterity', 'Dice', 'Fighting'],
        image: 'https://cf.geekdo-images.com/CcIddP6uVQrQl4MznemKng__imagepage/img/bT3iLC7_HNNW3GokU7126jrDE3s=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4009094.jpg',
        description: 'Cube Quest is a dexterity game in which lightweight hollow cubic dice are flicked across custom rubber mats. Cubes that leave the mats are defeated. Play alternates until someone wins by defeating the enemy king. Cubes also risk defeat in enemy territory; if they land "shadow" side up, they have been captured and must be rolled, like dice, to determine whether they escape.'
    },
    {
        name: 'Da Vinci Code the game',
        players: {
            min: 2,
            max: 4
        },
        ageGroup: '8+',
        playtime: '15 min',
        type: 'Abstract',
        category: 'Deduction',
        image: 'https://cf.geekdo-images.com/o7j9AgTLZu-bcGU1hRDTQA__imagepage/img/1mvlY4Y0vfp6gMqF-mu3SycorTk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4979576.jpg',
        description: 'Conceal your secret code, outguess your opponent, deduce the solution, amaze your foes. In the game of CODA players try to crack each others "code" - a sequence of secret numbers. Guess a secret number of an opponent and it is revealed (by knocking it down). Guess incorrectly and you must reveal one of your own secret numbers! On each turn, a new number enters play, which helps you to narrow the possibilities and grow your own code. Common sense, intuition and your "detective" skills will guide you to success.'
    },
    {
        name: 'Dead of Winter',
        players: {
            min: 2,
            max: 5
        },
        ageGroup: '13+',
        playtime: '60-120 min',
        type: 'Thematic',
        category: ['Bluffing', 'Deduction', 'Horror', 'Zombies'],
        image: 'https://cf.geekdo-images.com/g4mV4BH-ZrhMUVgil-yV1A__imagepage/img/CJ6erNGmKfFGhR6ZbxXbBI7XaoE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3016500.jpg',
        description: 'Dead of Winter is a meta-cooperative psychological survival game. This means players are working together toward one common victory condition, but for each individual player to achieve victory, they must also complete their personal secret objective, which could relate to a psychological tick that is fairly harmless to most others in the colony, a dangerous obsession that could put the main objective at risk, a desire for sabotage of the main mission, or (worst of all) vengeance against the colony! Games could end with all players winning, some winning and some losing, or all players losing. Work toward the goal of the group, but don not get walked all over by a loudmouth who is looking out only for their own interests!'
    },
    {
        name: 'Deception: Murder in Hong Kong',
        players: {
            min: 4,
            max: 12
        },
        ageGroup: '14+',
        playtime: '20 min',
        type: 'Party',
        category: ['Bluffing', 'Deduction', 'Murder/Mystery', 'Party game'],
        image: 'https://cf.geekdo-images.com/1COY3oeK9aN2_XNimKaNww__imagepage/img/C6vLzxqHIAtA39Owy2erCo9x9ic=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3033330.jpg',
        description: 'In the game, players take on the roles of investigators attempting to solve a murder case – but there is a twist. The killer is one of the investigators! Each player has a role and team that are randomly assigned at the start of play and include the unique roles of Forensic Scientist, Witness, Investigator, Murderer, and Accomplice. While the Investigators attempt to deduce the truth, the murderer team must deceive and mislead. This is a battle of wits!'
    },
];