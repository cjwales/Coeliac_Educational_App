use restaurantsdb;
db.dropDatabase();

db.restaurants.insertMany([
  {
    name: "Dakin",
    range: "££",
    cuisine: "Indian",
    reviews: ["food was so delicious"],
    ratings:[3,4],
    location: "89 Candleriggs, Merchant City, Glasgow ",
    postcode:"G1 1NP",
    longitude: -4.24578,
    latitude: 55.85883,
    phone: 01415532585
  },
  {
    name: "Topolabamba",
    range: "££",
    cuisine: "Mexican",
    reviews: [],
    ratings:[],
    location: "89 St Vincent St, Glasgow ",
    postcode:"G2 5TF",
    longitude:-4.256502,
    latitude:55.861253,
    phone: 01412489359
  },
  {
    name: "Kcal Kitchen",
    range: "££",
    cuisine: "Health food",
    reviews: [],
    ratings:[],
    location: "130 W Regent St, Glasgow ",
    postcode:"G2 2RQ",
    longitude:-4.259998,
    latitude:55.863679,
    phone: 01412120861
  },
  {
    name: "Pizza Punks",
    range: "££",
    cuisine: "Pizza",
    reviews: [],
    ratings:[],
    location: "90 St Vincent St, Glasgow ",
    postcode:"G2 5UB",
    longitude:-4.255589,
    latitude:55.861536,
    phone: 01412378020
  },
  {
    name: "Lychee Oriental",
    range: "££",
    cuisine: "Chinese",
    reviews: [],
    ratings:[],
    location: "59 Mitchell St, Glasgow ",
    postcode:"G1 3LN",
    longitude:-4.256082,
    latitude: 55.859567,
    phone: 01412482240
  },
  {
    name: "Sarti (Wellington Street)",
    range: "££",
    cuisine: "Italian",
    reviews: [],
    ratings:[],
    location: "133 Wellington St, Glasgow ",
    postcode:"G2 2XD",
    longitude: -4.259433,
    latitude: 55.863883,
    phone: 01412482228
  },
  {
    name: "The Red Onion",
    range: "££",
    cuisine: "European",
    reviews: [],
    ratings:[],
    location: "257 W Campbell St, Glasgow ",
    postcode:"G2 4TT",
    longitude:-4.260857,
    latitude: 55.864148,
    phone: 01412216000
  },
  {
    name: "La Lanterna (West End)",
    range: "££",
    cuisine: "Italian",
    reviews: [],
    ratings:[],
    location: " 447 Great Western Rd, Glasgow ",
    postcode:"G12 8HH",
    longitude:-4.280905,
    latitude: 55.874895,
    phone: 01413340686
  },
]);
