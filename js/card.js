const currentPatch = window.location.href;
const currentPage = currentPatch.split('/')[3]


const gallery = document.querySelector('#gallery');
if (currentPage == 'portfolio.html') {
  portfolio.map((project, index) => {
    const img = `

  <div class="cardProject">

    <img class = "cardProject__mockup" src="img/portfolio/lastProject/mockup.png" alt="" width="414" height="239" loading="lazy">

    <div class = "cardProject__content" style="background-image: url(${project.img_src});">


    <div class="cardProject-hover" onclick="createPopup(${index})">
    <h2 class="title title-primary">${project.title}</h2>

    </div>

    </div>

    </div>

    `;
    gallery.innerHTML += img;

  })
}

if (currentPage != 'portfolio.html' && currentPage != 'contact.html' && currentPage != 'about.html') {
  /* last project */

  /* const div = document.createElement('div');
  div.className = 'lastProjects__content' */

  const lastProject = document.querySelector('#lastProjects');
  let card = ` `;

  portfolio.map((project, index) => {
    if (index > 2) return
    card += `
<div class = "lastProjects__card  ">
<div class="cardProject">

<img class = "cardProject__mockup" src="img/portfolio/lastProject/mockup.png" alt="" width="414" height="239" loading="lazy">

<div class = "cardProject__content" style="background-image: url(${project.img_src}); cursor:default;">


<div  onclick="createPopup(${index})">
<h2 class="title title-primary">${project.title}</h2>

</div>

</div>

</div>
  <div class = "lastProjects__cardInfo">
  <span class ="title-group">
  <p class="title title-tertiary"> ${project.tache} </p>
  <h2 class="title title-secondary"> ${project.title} </h2>
  </span>
  <p class ="txt"> ${project.desc} </p>
  <p class = "title techno "> Technologie : <span class="title">${project.techno} </span>  </p>
  <a href="${project.type == "Voir le projet" ? project.url_site : project.url_maquette}" target="__blank"> ${project.type} </a>
  </div>
  </div>
  `;
  });

  lastProject.innerHTML+=card;
}





