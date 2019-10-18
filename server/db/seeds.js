use restaurantsdb;
db.dropDatabase();

db.restaurants.insertMany([
  {
    name: "Dakin",
    range: "££",
    cuisine: "Indian",
    review: [],
    location: "89 Candleriggs, Merchant City, Glasgow G1 1NP",
    phone: 01415532585
  },
  {
    name: "Topolabamba",
    range: "££",
    cuisine: "Mexican",
    review: [],
    location: "89 St Vincent St, Glasgow G2 5TF",
    phone: 01412489359
  },
  {
    name: "Kcal Kitchen",
    range: "££",
    cuisine: "Health food",
    review: [],
    location: "130 W Regent St, Glasgow G2 2RQ",
    phone: 01412120861
  },
  {
    name: "Pizza Punks",
    range: "££",
    cuisine: "Pizza",
    review: [],
    location: "90 St Vincent St, Glasgow G2 5UB",
    phone: 01412378020
  },
  {
    name: "Lychee Oriental",
    range: "££",
    cuisine: "Chinese",
    review: [],
    location: "59 Mitchell St, Glasgow G1 3LN",
    phone: 01412482240
  },
  {
    name: "Sarti (Wellington Street)",
    range: "££",
    cuisine: "Italian",
    review: [],
    location: "133 Wellington St, Glasgow G2 2XD",
    phone: 01412482228
  },
  {
    name: "The Red Onion",
    range: "££",
    cuisine: "European",
    review: [],
    location: "257 W Campbell St, Glasgow G2 4TT",
    phone: 01412216000
  },
  {
    name: "La Lanterna (West End)",
    range: "££",
    cuisine: "Italian",
    review: [],
    location: " 447 Great Western Rd, Glasgow G12 8HH",
    phone: 01413340686
  },
  {
    name: "La Lanterna (West End)",
    range: "££",
    cuisine: "Italian",
    review: [],
    location: " 447 Great Western Rd, Glasgow G12 8HH",
    phone: 01413340686
  },
]);
