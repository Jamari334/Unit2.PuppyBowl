const allPuppies = async () => {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`)
    const apiObj = await response.json();
    const playersList = apiObj.data;
    //console.log(playersList)
    return playersList
}

const main = async () => {
    const playersList = await allPuppies();
   // console.log(playersList)
    renderAllPuppies(playersList.players);

}

main()
const renderAllPuppies = (listOfPlayers) => {
    const main = document.querySelector('main');
    const h2 = document.createElement('h2')
    const ul = document.createElement('ul');
    h2.innerText = 'Welcome to All VISITORRRRRRS'
    ul.innerText = 'Competitors '
    main.appendChild(h2)
    main.appendChild(ul);
    listOfPlayers.forEach(pups => {
       // console.log(pups);
        const li = document.createElement('li')
        li.innerText = pups.name;
        ul.appendChild(li)
    })
    const puppyNames = document.querySelectorAll('li')
    puppyNames.forEach((singlePuppyList) => {
        singlePuppyList.addEventListener('click', (event) => {
            console.log (event)
        })

    });
}
const displayInfo = (event) => {
    console.log(event.target.innerText)
}
