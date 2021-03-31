// Funzione che ritorna la lista degli oggetti icon
function getIconList() {
    const iconList = [
        {
            name: "crow",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "dragon",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "fish",
            prefix: "fa-",
            type: "animal",
            family: "fas",
        },
        {
            name: "carrot",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "lemon",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "pepper-hot",
            prefix: "fa-",
            type: "vegetable",
            family: "fas",
        },
        {
            name: "user-astronaut",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "user-ninja",
            prefix: "fa-",
            type: "user",
            family: "fas",
        },
        {
            name: "user-secret",
            prefix: "fa-",
            type: "user",
            family: "fas",
        }
    ];

    return iconList;
}

// Funzione di visualizzazione icone
function iconsPrint(iconList) {
    let container = $('main');

    iconList.forEach(element => {
        container.append(`<div><i class="${element.family} ${element.prefix + element.name}"</i></div>`);
    });
}

// Funzione principale
function init() {
    const iconList = getIconList();
    console.log(iconList);

    iconsPrint(iconList);
}

$(init);