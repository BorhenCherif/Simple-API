fetch("https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2").then(res => res.json()).then(species => {
        console.log(species);
}).catch(err => console.error());

