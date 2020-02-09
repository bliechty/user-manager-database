const fiftyUsers = [
    {
        "first": "Trisha",
        "last": "Harmon",
        "age": 79,
        "emailAddress": "trishaharmon@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Olsen",
        "last": "Gould",
        "age": 11,
        "emailAddress": "olsengould@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Debbie",
        "last": "Landry",
        "age": 34,
        "emailAddress": "debbielandry@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Clay",
        "last": "Brewer",
        "age": 80,
        "emailAddress": "claybrewer@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Marcella",
        "last": "Austin",
        "age": 4,
        "emailAddress": "marcellaaustin@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Benson",
        "last": "Mccarty",
        "age": 90,
        "emailAddress": "bensonmccarty@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Avis",
        "last": "Mccoy",
        "age": 59,
        "emailAddress": "avismccoy@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Bradley",
        "last": "Vazquez",
        "age": 97,
        "emailAddress": "bradleyvazquez@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Stephenson",
        "last": "Gallagher",
        "age": 93,
        "emailAddress": "stephensongallagher@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Rebekah",
        "last": "Cole",
        "age": 17,
        "emailAddress": "rebekahcole@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Tammie",
        "last": "Mckee",
        "age": 19,
        "emailAddress": "tammiemckee@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Fowler",
        "last": "Carson",
        "age": 60,
        "emailAddress": "fowlercarson@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Dollie",
        "last": "Gates",
        "age": 83,
        "emailAddress": "dolliegates@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Gladys",
        "last": "Thomas",
        "age": 67,
        "emailAddress": "gladysthomas@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Melinda",
        "last": "Compton",
        "age": 84,
        "emailAddress": "melindacompton@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Levine",
        "last": "Erickson",
        "age": 21,
        "emailAddress": "levineerickson@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Nichole",
        "last": "Maxwell",
        "age": 66,
        "emailAddress": "nicholemaxwell@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Hammond",
        "last": "Nguyen",
        "age": 37,
        "emailAddress": "hammondnguyen@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Wendy",
        "last": "Macias",
        "age": 9,
        "emailAddress": "wendymacias@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Morales",
        "last": "Simpson",
        "age": 71,
        "emailAddress": "moralessimpson@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Antonia",
        "last": "Sanders",
        "age": 66,
        "emailAddress": "antoniasanders@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Carey",
        "last": "Raymond",
        "age": 2,
        "emailAddress": "careyraymond@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Ray",
        "last": "Cortez",
        "age": 13,
        "emailAddress": "raycortez@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Rowe",
        "last": "Burns",
        "age": 75,
        "emailAddress": "roweburns@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Cherry",
        "last": "Dodson",
        "age": 43,
        "emailAddress": "cherrydodson@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Annette",
        "last": "Porter",
        "age": 40,
        "emailAddress": "annetteporter@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Jean",
        "last": "Joseph",
        "age": 6,
        "emailAddress": "jeanjoseph@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Leona",
        "last": "Prince",
        "age": 26,
        "emailAddress": "leonaprince@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Savage",
        "last": "Valdez",
        "age": 49,
        "emailAddress": "savagevaldez@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Angelina",
        "last": "Hyde",
        "age": 97,
        "emailAddress": "angelinahyde@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Porter",
        "last": "Nicholson",
        "age": 92,
        "emailAddress": "porternicholson@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Allison",
        "last": "Bradshaw",
        "age": 93,
        "emailAddress": "allisonbradshaw@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Jenna",
        "last": "Griffith",
        "age": 42,
        "emailAddress": "jennagriffith@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Sharpe",
        "last": "Macdonald",
        "age": 23,
        "emailAddress": "sharpemacdonald@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Anna",
        "last": "Bentley",
        "age": 20,
        "emailAddress": "annabentley@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Silvia",
        "last": "Hansen",
        "age": 36,
        "emailAddress": "silviahansen@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Karyn",
        "last": "Rosa",
        "age": 50,
        "emailAddress": "karynrosa@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Socorro",
        "last": "Duke",
        "age": 76,
        "emailAddress": "socorroduke@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Ada",
        "last": "Bradley",
        "age": 53,
        "emailAddress": "adabradley@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "James",
        "last": "Hayden",
        "age": 2,
        "emailAddress": "jameshayden@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Vang",
        "last": "Frye",
        "age": 39,
        "emailAddress": "vangfrye@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Forbes",
        "last": "Brady",
        "age": 74,
        "emailAddress": "forbesbrady@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Brooks",
        "last": "Ray",
        "age": 3,
        "emailAddress": "brooksray@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Marina",
        "last": "Newman",
        "age": 29,
        "emailAddress": "marinanewman@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Ingram",
        "last": "Johns",
        "age": 7,
        "emailAddress": "ingramjohns@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Matthews",
        "last": "Beasley",
        "age": 44,
        "emailAddress": "matthewsbeasley@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Mckinney",
        "last": "Gilmore",
        "age": 11,
        "emailAddress": "mckinneygilmore@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Bonner",
        "last": "Joyce",
        "age": 58,
        "emailAddress": "bonnerjoyce@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Pate",
        "last": "Nichols",
        "age": 7,
        "emailAddress": "patenichols@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    },
    {
        "first": "Daniel",
        "last": "Mullins",
        "age": 21,
        "emailAddress": "danielmullins@bovis.com",
        "createdDate": "2/9/2020, 2:52:11 PM"
    }
];

module.exports = fiftyUsers;