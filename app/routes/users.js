import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [{
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "vincent",
        "last": "bishop"
      },
      "location": {
        "street": "6658 w pecan st",
        "city": "wichita",
        "state": "maryland",
        "postcode": 32547
      },
      "email": "vincent.bishop@example.com",
      "login": {
        "username": "blackgoose186",
        "password": "sinclair",
        "salt": "UL3xvrOL",
        "md5": "30a534f1833632650feb87125cd80ab5",
        "sha1": "3e9429c115d3913a7e7639f034803785ded9de2f",
        "sha256": "a2de4726bb82457ceeecde8f302a41c22fcb75c55fd697c8323b09f15fec1bd9"
      },
      "dob": "1981-02-07 14:03:32",
      "registered": "2016-01-28 13:05:46",
      "phone": "(774)-191-1357",
      "cell": "(681)-664-1660",
      "id": {
        "name": "SSN",
        "value": "508-00-4843"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/93.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/93.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/93.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "kenzi",
        "last": "kuhn"
      },
      "location": {
        "street": "4799 e center st",
        "city": "huntington beach",
        "state": "kansas",
        "postcode": 41455
      },
      "email": "kenzi.kuhn@example.com",
      "login": {
        "username": "heavymeercat136",
        "password": "reading",
        "salt": "3ZbxcwSV",
        "md5": "4d75fcdd8d399aef6d65520591a88fce",
        "sha1": "3410ec825396f4e141eec003b2d35bac9471cad8",
        "sha256": "8b8da55618ba92ad5f4954fac40b8555397f2e10251282c7b05e930862d79793"
      },
      "dob": "1972-02-22 09:23:21",
      "registered": "2004-07-12 09:52:02",
      "phone": "(843)-221-8213",
      "cell": "(453)-839-0458",
      "id": {
        "name": "SSN",
        "value": "161-38-4725"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/57.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/57.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/57.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "carrie",
        "last": "white"
      },
      "location": {
        "street": "4325 brown terrace",
        "city": "erie",
        "state": "montana",
        "postcode": 20726
      },
      "email": "carrie.white@example.com",
      "login": {
        "username": "blackrabbit680",
        "password": "marvin",
        "salt": "Q97bpYQS",
        "md5": "60b54d89fe49f054f285eb302aff07e8",
        "sha1": "e3d6dc21f634cada9941033c1d68c9e3abfdcaf7",
        "sha256": "243ba1f1c651c4cc3ef528d187d723511f95e7d2b9cc24e670da4bba65790256"
      },
      "dob": "1974-08-01 00:48:18",
      "registered": "2016-02-01 11:29:21",
      "phone": "(368)-721-0459",
      "cell": "(174)-044-1929",
      "id": {
        "name": "SSN",
        "value": "573-67-1459"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/25.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/25.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/25.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "wendy",
        "last": "jones"
      },
      "location": {
        "street": "2479 white oak dr",
        "city": "austin",
        "state": "vermont",
        "postcode": 88559
      },
      "email": "wendy.jones@example.com",
      "login": {
        "username": "orangekoala152",
        "password": "deeper",
        "salt": "fkW6lChW",
        "md5": "1702d076641a95df99da500f3b93f2e4",
        "sha1": "ed4de092ff500b13bf92d1e8d507d93885d4817f",
        "sha256": "ea110269f7df84ce77bb4aaa70d4288efa3aab82d01b9cc8954a3176c4c97822"
      },
      "dob": "1949-02-20 09:01:13",
      "registered": "2014-02-12 09:20:00",
      "phone": "(686)-965-4458",
      "cell": "(611)-790-1268",
      "id": {
        "name": "SSN",
        "value": "974-04-9723"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/3.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "scott",
        "last": "hunt"
      },
      "location": {
        "street": "2054 harrison ct",
        "city": "lewisville",
        "state": "oregon",
        "postcode": 73823
      },
      "email": "scott.hunt@example.com",
      "login": {
        "username": "ticklishduck207",
        "password": "phil",
        "salt": "Nd8B06dJ",
        "md5": "a7cbd0e43e67d9b0b58942de86a9db67",
        "sha1": "354b2a3c35569ba18f82ff88eb3ccb869affd99f",
        "sha256": "72c3d94b6e9f288d712efef1724d2420ba4aeb3bb2d51d0e162147c69371c3e9"
      },
      "dob": "1964-10-10 16:19:24",
      "registered": "2012-04-19 20:40:45",
      "phone": "(382)-626-1930",
      "cell": "(406)-469-6516",
      "id": {
        "name": "SSN",
        "value": "899-29-8202"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "gabriella",
        "last": "weaver"
      },
      "location": {
        "street": "1195 walnut hill ln",
        "city": "yakima",
        "state": "maine",
        "postcode": 87009
      },
      "email": "gabriella.weaver@example.com",
      "login": {
        "username": "purplecat410",
        "password": "green",
        "salt": "STxlOgcu",
        "md5": "7e427a1b901d9b7b5038400608384240",
        "sha1": "a9e090ea6d997cf627e2b06415f6ef595698ebc9",
        "sha256": "5e7101b3d3497cd617ca17974a1a4e1a3c9292ef1a03254cfd635c320dc34c2e"
      },
      "dob": "1981-07-20 00:55:52",
      "registered": "2006-08-15 08:48:02",
      "phone": "(844)-182-8094",
      "cell": "(155)-382-6702",
      "id": {
        "name": "SSN",
        "value": "678-49-9331"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/40.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "becky",
        "last": "ross"
      },
      "location": {
        "street": "3055 fairview st",
        "city": "cleveland",
        "state": "oklahoma",
        "postcode": 47759
      },
      "email": "becky.ross@example.com",
      "login": {
        "username": "smallbear543",
        "password": "sick",
        "salt": "bnQ3PJD3",
        "md5": "c56f8f7a5393df94f0b9401bc67aca3a",
        "sha1": "22d391b882750ba44ceb141e3afde60eedc3ae68",
        "sha256": "327972cdd840823487760a858f9caafd88d6640cf76c5fc4d3c175b0bc76dd99"
      },
      "dob": "1994-11-18 17:15:27",
      "registered": "2008-07-15 06:49:26",
      "phone": "(454)-520-2691",
      "cell": "(913)-493-3532",
      "id": {
        "name": "SSN",
        "value": "344-88-6609"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/45.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "doris",
        "last": "williamson"
      },
      "location": {
        "street": "1172 crockett st",
        "city": "west jordan",
        "state": "maryland",
        "postcode": 56392
      },
      "email": "doris.williamson@example.com",
      "login": {
        "username": "beautifulgoose306",
        "password": "cameltoe",
        "salt": "o3nRbdJx",
        "md5": "9eb0599d2a14daa4c6278b81dd85239d",
        "sha1": "d0785e78475353d4a01623483edb79cda9b69535",
        "sha256": "35018edd9de8633f18270daad39f907e8ee128d47b114f4174289e52ca9f32b8"
      },
      "dob": "1976-01-12 12:06:11",
      "registered": "2008-07-08 01:54:48",
      "phone": "(210)-171-0439",
      "cell": "(203)-427-5019",
      "id": {
        "name": "SSN",
        "value": "624-86-9072"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "grace",
        "last": "mcdonalid"
      },
      "location": {
        "street": "9929 cackson st",
        "city": "frisco",
        "state": "oklahoma",
        "postcode": 36869
      },
      "email": "grace.mcdonalid@example.com",
      "login": {
        "username": "goldenmouse604",
        "password": "eeeeeeee",
        "salt": "6yPIgfan",
        "md5": "1253c4ccf5810a7be82e8a363cecc4f7",
        "sha1": "ba1abfc198209cce85247a17cd2a9e48ce7c54f3",
        "sha256": "b8de590ec4cac1ea29c316c070b8e2a9f404ed57df838c0186ba84c89a250a91"
      },
      "dob": "1963-07-01 21:45:11",
      "registered": "2012-06-10 02:46:27",
      "phone": "(195)-202-0396",
      "cell": "(006)-257-5311",
      "id": {
        "name": "SSN",
        "value": "133-33-4820"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/0.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/0.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "june",
        "last": "gibson"
      },
      "location": {
        "street": "9437 adams st",
        "city": "atlanta",
        "state": "montana",
        "postcode": 42412
      },
      "email": "june.gibson@example.com",
      "login": {
        "username": "whitetiger340",
        "password": "wine",
        "salt": "6Rv8KBTo",
        "md5": "27fb90220142bd2acbf65e898f7e81b9",
        "sha1": "d65f26df6bf2f2c0d45ec4b94160c069a5788afa",
        "sha256": "956a2b79e87c7d41fd208824ba3737352fd3b91473d5381b4716b78203d64785"
      },
      "dob": "1982-03-15 01:10:40",
      "registered": "2005-05-13 05:05:16",
      "phone": "(322)-123-3180",
      "cell": "(821)-180-3065",
      "id": {
        "name": "SSN",
        "value": "125-75-5479"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/34.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "fred",
        "last": "williams"
      },
      "location": {
        "street": "9347 harrison ct",
        "city": "lakeland",
        "state": "texas",
        "postcode": 34544
      },
      "email": "fred.williams@example.com",
      "login": {
        "username": "blackbird187",
        "password": "camera",
        "salt": "HOeGiVJQ",
        "md5": "9c5d4646ee12bc76f1185613141ac43a",
        "sha1": "bdf2949680dfd83911c2c04f48feb9060d438fd1",
        "sha256": "3208b276109d1c18f0f2202ae62cd7ff568901ebc8faa1ec9284ab7ea0ce170e"
      },
      "dob": "1945-11-08 23:40:47",
      "registered": "2008-12-07 11:57:59",
      "phone": "(657)-480-3314",
      "cell": "(005)-175-8341",
      "id": {
        "name": "SSN",
        "value": "405-12-9879"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/9.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/9.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "samuel",
        "last": "horton"
      },
      "location": {
        "street": "1733 edwards rd",
        "city": "grapevine",
        "state": "ohio",
        "postcode": 56435
      },
      "email": "samuel.horton@example.com",
      "login": {
        "username": "organicwolf726",
        "password": "smile",
        "salt": "fgO4SjDx",
        "md5": "c81c68cd07ed0fd13e87fd86294c807b",
        "sha1": "6185dc50514138ea446f7e86c9626353eaf1de11",
        "sha256": "e2a2242bf6372ad02c62cd3343cb942abd2d11bd7915dc0c1c2f93d44bde88d7"
      },
      "dob": "1955-08-27 03:46:04",
      "registered": "2014-06-26 04:36:43",
      "phone": "(847)-939-6798",
      "cell": "(620)-504-6494",
      "id": {
        "name": "SSN",
        "value": "204-94-1628"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "raul",
        "last": "jennings"
      },
      "location": {
        "street": "3681 mockingbird hill",
        "city": "addison",
        "state": "florida",
        "postcode": 13062
      },
      "email": "raul.jennings@example.com",
      "login": {
        "username": "ticklishpanda816",
        "password": "erik",
        "salt": "geLT3KoY",
        "md5": "f50480bd09accc6d582db23906295538",
        "sha1": "cd3e6b99149f3675e607d85961606fc49c6d1a3a",
        "sha256": "9a0d9fd079499bef8a56a115d062251f1be6779ca658204f54f56738ce7cd13c"
      },
      "dob": "1981-12-10 21:15:48",
      "registered": "2014-08-24 08:16:14",
      "phone": "(346)-215-1602",
      "cell": "(891)-584-6472",
      "id": {
        "name": "SSN",
        "value": "686-40-3338"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "judy",
        "last": "cooper"
      },
      "location": {
        "street": "6636 edwards rd",
        "city": "santa maria",
        "state": "idaho",
        "postcode": 77045
      },
      "email": "judy.cooper@example.com",
      "login": {
        "username": "bigbird425",
        "password": "calibra",
        "salt": "8rAokNfB",
        "md5": "c0bdba296326a6311520b7c007feb3dc",
        "sha1": "d891422a700b7252cf931d049f11050c7a21d522",
        "sha256": "d8f35ecb2c0f90476772f26ef27053153c3a4a95e3c70b2417205cd2d904f255"
      },
      "dob": "1987-12-15 08:19:41",
      "registered": "2009-03-16 23:30:04",
      "phone": "(386)-162-1018",
      "cell": "(378)-415-9530",
      "id": {
        "name": "SSN",
        "value": "694-56-7574"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/32.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/32.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/32.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "melvin",
        "last": "brooks"
      },
      "location": {
        "street": "9144 homestead rd",
        "city": "baton rouge",
        "state": "california",
        "postcode": 23109
      },
      "email": "melvin.brooks@example.com",
      "login": {
        "username": "whitebird102",
        "password": "scratch",
        "salt": "WAzbYv4v",
        "md5": "72d438f9f20b2fb026bf7cb092d44aa1",
        "sha1": "33140bba45dc76d6818778ebc1cdee23706b7be6",
        "sha256": "2ba30ac54b96a96d2613b3685042998e2b71456179d90e2b5f95364b6f995cf8"
      },
      "dob": "1983-08-12 09:16:57",
      "registered": "2007-07-13 12:22:06",
      "phone": "(354)-046-3824",
      "cell": "(332)-955-1885",
      "id": {
        "name": "SSN",
        "value": "749-46-6933"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/94.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/94.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "tristan",
        "last": "bowman"
      },
      "location": {
        "street": "4591 paddock way",
        "city": "cincinnati",
        "state": "massachusetts",
        "postcode": 40789
      },
      "email": "tristan.bowman@example.com",
      "login": {
        "username": "smallrabbit537",
        "password": "lorraine",
        "salt": "bHBdnT5H",
        "md5": "aeca050ab7055d6c14780e6dc39e1294",
        "sha1": "653da4bc6b20aa4cbdf6637f93d4d73d34504dfe",
        "sha256": "6b3edbed7caf5f1e355879375f5a2586845761aad7de238d5931b2d5adc80172"
      },
      "dob": "1972-04-04 22:08:43",
      "registered": "2012-08-29 09:31:17",
      "phone": "(283)-250-0668",
      "cell": "(386)-732-2432",
      "id": {
        "name": "SSN",
        "value": "700-62-1761"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/41.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/41.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/41.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "annette",
        "last": "james"
      },
      "location": {
        "street": "9782 bollinger rd",
        "city": "anchorage",
        "state": "arizona",
        "postcode": 27468
      },
      "email": "annette.james@example.com",
      "login": {
        "username": "purplerabbit333",
        "password": "pistons",
        "salt": "QXqJdHqB",
        "md5": "b2ce9b51264ece67d9d59f7436e67de4",
        "sha1": "3e9d790478365d9985c90f0bf6dcab503b6dd227",
        "sha256": "ba6819743fd8267def86895bf2a9967e628d45c3c88f360fc63e3976935512e3"
      },
      "dob": "1975-01-19 00:21:03",
      "registered": "2011-05-21 18:46:45",
      "phone": "(644)-650-4017",
      "cell": "(860)-878-9735",
      "id": {
        "name": "SSN",
        "value": "952-90-0754"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/31.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/31.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/31.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "peyton",
        "last": "butler"
      },
      "location": {
        "street": "1157 forest ln",
        "city": "coppell",
        "state": "mississippi",
        "postcode": 31299
      },
      "email": "peyton.butler@example.com",
      "login": {
        "username": "tinybird705",
        "password": "smoker",
        "salt": "W1Jl99JF",
        "md5": "e240e31d4f0242a7d60c455808d29f0e",
        "sha1": "9a09367a2649cd142da5fec7deee7d3ac75be9b2",
        "sha256": "ec23568a9cfbbb70389ff4191be4e040658541fad1a839a98b45eb4e6ba4644c"
      },
      "dob": "1949-09-15 11:49:22",
      "registered": "2013-06-29 03:40:02",
      "phone": "(305)-167-5944",
      "cell": "(080)-945-8135",
      "id": {
        "name": "SSN",
        "value": "126-85-4376"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/22.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "darrell",
        "last": "fisher"
      },
      "location": {
        "street": "6028 hunters creek dr",
        "city": "greeley",
        "state": "new jersey",
        "postcode": 20801
      },
      "email": "darrell.fisher@example.com",
      "login": {
        "username": "browngorilla679",
        "password": "elmo",
        "salt": "p8F6dPGe",
        "md5": "bc772b5d2681682dd876a4841212040e",
        "sha1": "ac0b6295c4aa0e8cf4c1ad26f2c0e87c379d85f8",
        "sha256": "42bfc3748e3e88635e9a941c94534bf78ca70fa38cfbd07cd81d3c2665191488"
      },
      "dob": "1958-07-31 21:21:28",
      "registered": "2009-11-18 01:01:29",
      "phone": "(907)-869-2195",
      "cell": "(299)-636-1644",
      "id": {
        "name": "SSN",
        "value": "300-30-7155"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/31.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/31.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "louis",
        "last": "soto"
      },
      "location": {
        "street": "6272 spring st",
        "city": "bueblo",
        "state": "florida",
        "postcode": 73017
      },
      "email": "louis.soto@example.com",
      "login": {
        "username": "goldenfrog263",
        "password": "feather",
        "salt": "sI9xIjBn",
        "md5": "208184290f1362acd3a1935ad53546d2",
        "sha1": "17c28935d351c03cd5875b01b9d4f76e102c3c2b",
        "sha256": "47a0fb17f192fec0ff5f711b57f7f85d6023ed06f1617b5684c9a148bbd37948"
      },
      "dob": "1954-09-01 06:06:12",
      "registered": "2014-12-27 22:25:25",
      "phone": "(904)-424-8017",
      "cell": "(269)-401-2648",
      "id": {
        "name": "SSN",
        "value": "130-35-2363"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "kurt",
        "last": "ruiz"
      },
      "location": {
        "street": "8789 w belt line rd",
        "city": "lincoln",
        "state": "delaware",
        "postcode": 30179
      },
      "email": "kurt.ruiz@example.com",
      "login": {
        "username": "redkoala313",
        "password": "vincent",
        "salt": "AcCDbSzf",
        "md5": "dc22de58f555496670ccd9c7db3e1eb4",
        "sha1": "ea53f6f6733d05f836387f24ea37c1d615a15bf6",
        "sha256": "fe9a4952cd13cc53a17ed58a7d542d822b2e7753aad225ff60c972ea23c1b1c8"
      },
      "dob": "1989-03-17 21:34:51",
      "registered": "2009-07-11 21:44:24",
      "phone": "(525)-555-2827",
      "cell": "(493)-169-1850",
      "id": {
        "name": "SSN",
        "value": "070-84-6521"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/12.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/12.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/12.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "stella",
        "last": "perry"
      },
      "location": {
        "street": "5218 w pecan st",
        "city": "moreno valley",
        "state": "massachusetts",
        "postcode": 64333
      },
      "email": "stella.perry@example.com",
      "login": {
        "username": "whitewolf199",
        "password": "scooter1",
        "salt": "605LqB0T",
        "md5": "d98c26de67b3597ff541c87b473682dc",
        "sha1": "7b6c6b200cb41c4f78d83732a7812922b6169cc0",
        "sha256": "f02bffd5e68901c3f80889acbd6e6f08d310d342c1cda375a62b31c3b557c198"
      },
      "dob": "1955-01-24 14:24:41",
      "registered": "2012-08-14 08:03:57",
      "phone": "(489)-255-0111",
      "cell": "(862)-227-5888",
      "id": {
        "name": "SSN",
        "value": "696-42-0856"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/52.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "christina",
        "last": "carter"
      },
      "location": {
        "street": "8626 lakeview st",
        "city": "buffalo",
        "state": "south dakota",
        "postcode": 50850
      },
      "email": "christina.carter@example.com",
      "login": {
        "username": "bigrabbit903",
        "password": "cheers",
        "salt": "Bo20SrGp",
        "md5": "3db3630f8a27ba75e1238975e0fe86c8",
        "sha1": "00a848f2b3b7fc1a433444734564e3cf34475c35",
        "sha256": "d5cbda72eeadd159bc7b18452f3a9cd62c2955104ec01e3a9313bac189e95808"
      },
      "dob": "1985-06-25 12:09:34",
      "registered": "2006-08-22 04:22:35",
      "phone": "(042)-268-1392",
      "cell": "(442)-309-8646",
      "id": {
        "name": "SSN",
        "value": "533-28-0663"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/58.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/58.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/58.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "steve",
        "last": "schmidt"
      },
      "location": {
        "street": "4093 preston rd",
        "city": "detroit",
        "state": "arizona",
        "postcode": 99788
      },
      "email": "steve.schmidt@example.com",
      "login": {
        "username": "whitecat872",
        "password": "search",
        "salt": "5yBLXXDQ",
        "md5": "9545f38e2dcd632e53db1a6292211123",
        "sha1": "6300149f4a6ade8054fd05a99da3a34bf4c2bf8f",
        "sha256": "a04f59286b19e6a787493265462a6a25f979827654bd3c0854a0b5e2825e6c17"
      },
      "dob": "1981-11-02 10:54:11",
      "registered": "2015-08-07 22:23:48",
      "phone": "(543)-294-5375",
      "cell": "(519)-037-6309",
      "id": {
        "name": "SSN",
        "value": "252-31-4483"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/53.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/53.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "vickie",
        "last": "rice"
      },
      "location": {
        "street": "1977 n stelling rd",
        "city": "corpus christi",
        "state": "virginia",
        "postcode": 70616
      },
      "email": "vickie.rice@example.com",
      "login": {
        "username": "orangetiger311",
        "password": "melody",
        "salt": "HNyWaMOQ",
        "md5": "9c9979d812d2b078e163d1e7917c6ae5",
        "sha1": "b217b0bc80205b24c43061515c62bc102cbd0262",
        "sha256": "084b2527b2ac78f02b8d4e259078d3ef604132a2a542ded9285f9d799005daac"
      },
      "dob": "1964-11-15 14:27:20",
      "registered": "2005-01-21 13:40:46",
      "phone": "(332)-765-8724",
      "cell": "(045)-097-9685",
      "id": {
        "name": "SSN",
        "value": "055-00-4397"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/19.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
      },
      "nat": "US"
    }
  ];
	}
});

