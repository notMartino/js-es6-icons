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
        container.append(`
             <div>
             <i style="color: ${element.color}" class="${element.family} ${element.prefix + element.name}"></i>
                 
             <h5>${element.name.charAt(0).toUpperCase() + element.name.slice(1)}</h5>
             </div>`
        );
    });
}

// Funzione che torna i colori
function getColors() {
    const colors = ['dodgerblue', 'greenyellow', 'darkorchid', 'red'];
    return colors;
}

// Funzione che assegna i colori in base al tipo
function colorAssign(iconList, colors) {
    const types = iconList.map((element) => element.type);
    let typeList = [];

    types.forEach((element) => {
        console.log(element);
        if(typeList.includes(element) == false){
            typeList.push(element);
        }
    });

    iconList.forEach((element, index) => {
        element.color = colors[typeList.indexOf(element.type)];
    });
    return iconList;
}

// Funzione cambio selezione filtro
function selectChange(iconList) {
    
    $('#iconType').change(function() {
        let newIconList = [];
        let selected = $(this);
        if(selected.val() == false){
            $('main').html('');
            iconsPrint(iconList);
        }else{
            $('main').html('');
            iconList.forEach(element => {
                if(element.type == selected.val())
                    newIconList.push(element);
            });
        }
        iconsPrint(newIconList);
    });
    
}

// Funzione principale
function init() {
    let iconList = getIconList();
    console.log(iconList);

    const colors = getColors();
    
    iconList = colorAssign(iconList, colors);

    iconsPrint(iconList);

    selectChange(iconList);
}

$(init);