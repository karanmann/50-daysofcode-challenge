const card = document.querySelector(".card");

const fetchProjectData = async() => {

  await fetch ("../data/project.json")
    .then (response => response.json())
    .then (cardData => displayCard(cardData.projects))
}

fetchProjectData()

const displayCard = (cardData) => {
  let output = "";

  cardData.map(data => {
    output += `
    <div>
      <h1>${data.number}</h1>
    </div>
  `
  })

  card.innerHTML = output

}