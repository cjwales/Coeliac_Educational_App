use restaurantsdb;
db.dropDatabase();

db.restaurants.insertMany([
  {
    name: "Dakin",
    range: "££",
    cuisine: "Indian",
    review: [],
    location: "89 Candleriggs, Merchant City, Glasgow ",
    postcode:"G1 1NP",
    phone: 01415532585
  },
  {
    name: "Topolabamba",
    range: "££",
    cuisine: "Mexican",
    review: [],
    location: "89 St Vincent St, Glasgow ",
    postcode:"G2 5TF",
    phone: 01412489359
  },
  {
    name: "Kcal Kitchen",
    range: "££",
    cuisine: "Health food",
    review: [],
    location: "130 W Regent St, Glasgow ",
    postcode:"G2 5TF",
    phone: 01412120861
  },
  {
    name: "Pizza Punks",
    range: "££",
    cuisine: "Pizza",
    review: [],
    location: "90 St Vincent St, Glasgow ",
    postcode:"G2 5UB",
    phone: 01412378020
  },
  {
    name: "Lychee Oriental",
    range: "££",
    cuisine: "Chinese",
    review: [],
    location: "59 Mitchell St, Glasgow ",
    postcode:"G1 3LN",
    phone: 01412482240
  },
  {
    name: "Sarti (Wellington Street)",
    range: "££",
    cuisine: "Italian",
    review: [],
    location: "133 Wellington St, Glasgow ",
    postcode:"G2 2XD",
    phone: 01412482228
  },
  {
    name: "The Red Onion",
    range: "££",
    cuisine: "European",
    review: [],
    location: "257 W Campbell St, Glasgow ",
    postcode:"G2 4TT",
    phone: 01412216000
  },
  {
    name: "La Lanterna (West End)",
    range: "££",
    cuisine: "Italian",
    review: [],
    location: " 447 Great Western Rd, Glasgow ",
    postcode:"G12 8HH",

    phone: 01413340686
  },
]);
