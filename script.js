document.addEventListener('DOMContentLoaded', function () {
    var div = document.getElementById("mainDiv");
    var friendsArray = ["Ali",
        "Fatima",
        "Liam",
        "Muhammad",
        "Carter"];
    var locationArray = ["Conservatory",
        "Games Room",
        "Wine Cellar",
        "Attic",
        "Pool Room",
        "Psychomanteum",
        "Sauna",
        "Hearth Room",
        "Parlor Room",
        "Master Bedroom"
    ];
    var weaponArray = ["Cow Pies",
        "Fart Gun",
        "Mop Bucket",
        "Roomba",
        "Joystick",
        "Fire Pocker",
        "Hockey Stick",
        "Morning Breath",
        "Ancient Baby",
        "Loud Monk",
        "House Snake",
        "Piranha Pond",
        "Tricycle with Four Wheels",
        "Backless Humpback Whale",
        "Clown Shoes",
        "Hot Grits",
        "Christian Louboutin",
        "Wine Bottle",
        "Dumbbell",
        "Cut Wire from the Doorbell"];

    for (var i = 1; i <= 100; i++) {
        var createH3Elements = document.createElement("h3");
        var h3Text = document.createTextNode(`Accusation ${i}`);

        createH3Elements.appendChild(h3Text);
        div.appendChild(createH3Elements);

        div.addEventListener("click", function() {
            console.log(`Accusation ${i}: I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!`)
        })
    }
})


// lexical scoping
// - the variable defined outside the ScopedCredential, upper scope, can be accessed inside.
// - You don't have to pass them inside