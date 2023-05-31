const team = [

    {
        'nome': "Wayne Barnett",
        'lavoro': "Founder & CEO",
        'image': "wayne-barnett-founder-ceo.jpg"
    },

    {
        'nome': "Angela Caroll",
        'lavoro': "Chief Editor",
        'image': "Angela-Caroll-chief-editor.jpg"
    },

    {
        'nome': "Walter Gordon",
        'lavoro': "Office Manager",
        'image': "walter-gordon-office-manager.jpg"
    },
    {
        'nome': "Angela Lopez",
        'lavoro': "Chief Editor",
        'image': "angela-lopez-social-media-manager.jpg"
    },
    {
        'nome': "Scott Estrada",
        'lavoro': "Developer",
        'image': "scott-estrada-developer.jpg"
    },
    {
        'nome': "Barbara Ramos",
        'lavoro': "Grafic Designer",
        'image': "barbara-ramos-graphic-designer.jpg"
    }
]

let container = document.getElementById('container-cards');

for (let i = 0; i < team.length; i++) {
    let info_card = team[i];
    console.log(info_card);
    let card = `<div class= "card">
<img src="./img/${info_card.image}">
<p>${info_card.nome}</p>
<p>${info_card.lavoro}</p>
</div>`
    container.innerHTML += card;
}
