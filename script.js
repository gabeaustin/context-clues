document.addEventListener('DOMContentLoaded', function () {
    let div = document.getElementById("mainDiv");

    for (let i = 1; i <= 100; i++) {
        let createH3Elements = document.createElement("h3");
        let h3Text = document.createTextNode(`Accusation ${i}`);

        createH3Elements.appendChild(h3Text);
        div.appendChild(createH3Elements);
    }
})


// lexical scoping
// - the variable defined outside the ScopedCredential, upper scope, can be accessed inside.
// - You don't have to pass them inside