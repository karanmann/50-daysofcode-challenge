const cardContainer = document.querySelector(".card-container");

const fetchProjectData = async() => {

  await fetch ("../project.json")
    .then (response => response.json())
    .then (cardData => displayCard(cardData.projects))
}

fetchProjectData()

const displayCard = (cardData) => {
  let output = "";

  cardData.map(data => {
    console.log(data)
    const {preview_image, number, title, description, techs, live_url, completed_on } = data
    const techData = techs.map(t => `<p>${t}</p>`).join(" ")
    output += `
    <div class="card">
      <img class="card-image" src="${preview_image}" alt="" />
      <div class="card-description">
        <p><b>Day ${number}. ${title}</b></p>
        <p>${description}</p>
        <p class="preview"><a href=${live_url} target="default">PREVIEW</a></p>
        <div class="card-tech">${techData}</div>
        <p><i>Completed On: ${completed_on}</i></p>
      </div>
    </div>
  `
  })

  cardContainer.innerHTML = output

}