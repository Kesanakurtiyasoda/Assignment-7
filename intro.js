//Assignment-1
var object = {};
var array = ["radhe", 22, "M"];
var key = ["name", "age", "gender"];
for (var i = 0; i < array.length; i++) {
  object[key[i]] = array[i];
}
console.log(object);

//Assignment-2
var string = "edstem";
var object = {};
for (var i = 0; i < string.length; i++) {
  if (object[string[i]]) {
    object[string[i]] = object[string[i]] + 1;
  } else {
    object[string[i]] = 1;
  }
}
console.log(object);

//Assignment-3
var user = [
  {
    name: "yashodha",
    phoneNo: 8978500892,
  },
  {
    name: "hima",
    phoneNo: 9542133235,
  },
];
for (var i = 0; i < user.length; i++) {
  if (user[i].name === "hima") {
    console.log(user[i].phoneNo);
  }
}

//Assignment-4
var count = 1;
var object = {};
var array = [10, 20, 30, 10, 40, -2];
for (var i = 0; i < array.length; i++) {
  if (!object[array[i]]) {
    object[array[i]] = count;
  } else {
    delete object[array[i]];
  }
}
console.log(Object.keys(object));

//Assignment-5
var word1 = "hello";
var word2 = "heloo";

var x = word1.split("").sort().join("");
var y = word2.split("").sort().join("");

if (x === y) {
  console.log("true");
} else {
  console.log("false");
}

//Assignment-6
var database = [
  {
    name: "vicky",
    age: 24,
    married: false,
    address: { city: "hyderabad", state: "andhra", pincode: "516003" },
    skills: ["react", "html", "nodejs"],
    experience: 2,
  },
  {
    name: "nirmal",
    age: 20,
    married: true,
    address: { city: "hyderabad", state: "telengana", pincode: "500004" },
    skills: ["css", "figma"],
    experience: 4,
  },
  {
    name: "neeraj",
    age: 26,
    married: false,
    address: { city: "bengaluru", state: "karnataka", pincode: "510006" },
    skills: ["aws", "angular", "nodejs"],
    experience: 5,
  },
];

for (var i = 0; i < database.length; i++) {
  if (database[i].experience > 3 && database[i].address.city === "hyderabad") {
    console.log(database[i].name);
  }
}