const card1 = {
  name: 'Runaway Kid',
  image: 'https://cdn.releases.com/img/postattachments/835691/1200',
  playlist: 'Sea Shanties with Granny',
  views: 5,
  attachments: 3
}
const card2 = {
  name: 'Sasha Six',
  image: 'https://www.trueachievements.com/achievementimages/6450/233417.jpg',
  playlist: 'Music Box',
  views: 7,
  attachments: 6
}
const card3 = {
  name: 'Mono',
  image: 'https://static.wikia.nocookie.net/littlenightmares/images/0/08/Helpme.jpg/revision/latest?cb=20210115161313',
  playlist: 'Taste of Betrayal',
  views: 3,
  attachments: 4
}
const card4 = {
  name: 'Gnome',
  image: 'https://static.wikia.nocookie.net/littlenightmares/images/5/5c/Nomes.jpg/revision/latest?cb=20170404162814',
  playlist: 'Looking like a Snack',
  views: 1,
  attachments: 9
}
const card5 = {
  name: 'The Lady',
  image: 'https://d1fs8ljxwyzba6.cloudfront.net/assets/editorial/2017/05/Little-Nightmares-la-Dame-se-montre-en-vid%C3%A9o-%E2%80%93-Level-1-Google-Chrome.jpg',
  playlist: 'Broken Mirrors',
  views: 2,
  attachments: 7
}

const cards = [card1, card2, card3, card4, card5]

const cardArea = document.getElementById('cardArea')

window.addEventListener('load', loadCards)

function loadCards () {
  cards.forEach(c => {
    cardArea.innerHTML += `<div class="share-card">
    <div class='card-upper' style="background-image: url(${c.image});">
    <button class="share-btn"></button>
    <div class="views">
      <p>VIEWS</p>
      <p class="big-white">0${c.views}</p>
    </div>
    </div>
  <article class="card-lower">
    <article>
      <h2>${c.name}</h2>
      <time class="small-type">Tues 02/04/21 10:45am</time>
    </article>
    <p class="custom-link">http://index.littlenightmares.com/shares/${convertName(c.name)}</p>
    <article>
      <p class="small-type">PLAYLIST</p>
      <p>${c.playlist}</p>
    </article>
    <article>
      <p class="small-type">ATTACHMENTS</p>
      <p class="big-blue">0${c.attachments}</p>
    </article>
  </article>
</div>`
  })
}

function convertName (nameInput) {
  const res = [...nameInput.toLowerCase()].map(char => {
    if (char === ' ') {
      return '-'
    } else {
      return char
    }
  }).join('')
  return res
}