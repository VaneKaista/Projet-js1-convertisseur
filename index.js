let clonage = [];

function addIngredient() {
    const NameIngInput = document.getElementById(`NameIng`);
    const nbrQuantiteInput = document.getElementById(`nbrQuantite`);

    const NameIng = NameIngInput.value.trim();
    const nbrQuantite = nbrQuantiteInput.value.trim();

    if (NameIng !== '' && nbrQuantite !== '') {
        const listIngr = `${NameIng},${nbrQuantite}`
        clonage.push(listIngr)
        UpdateList();
        NameIngInput.value = "";
        nbrQuantiteInput.value = "";
    }
}

function UpdateList() {
    const ul = document.getElementById(`old`);
    ul.innerHTML = "";

    clonage.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ul.appendChild(li);
    })
}

function conversion() {
    const nbrPersonneBase = parseInt(document.getElementById(`nbrPersonneBase`).value);
    const nbrPersonneSouhait = parseInt(document.getElementById(`nbrPersonneSouhait`).value);
    const ingrConvert = clonage.map(ingredient => {

        const parts = ingredient.split(",");
        const unit = parts[0];
        const quant = parseFloat(parts[1]);
        const ingName = parts.slice(2).join(",");
        const quantNew = (quant / nbrPersonneBase) * nbrPersonneSouhait;
        return `${quantNew} ${unit} ${ingName}`;
    });

    const result = document.getElementById(`result`);
    result.innerHTML = "<h2>resultat:</h2>";
    const ul = document.createElement("ul");
    ingrConvert.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ul.appendChild(li);
    });
    result.appendChild(ul);
}