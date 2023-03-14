const currentPatch = window.location.href;
const currentPage = currentPatch.split('/')[3]


const gallery = document.querySelector('#gallery');
if (currentPage == 'portfolio.html') {
  portfolio.map((project, index) => {
    const img = `
    <div>
    <div class="card-hover"
    onclick="createPopup(${index})">
    <h2 class="title title-primary">${project.title}</h2>
    </div>
            <img
              src="${project.img_src}"
              alt="miniature ${project.title}"
              width="414"
              height="219"
              loading="lazy"
            />
    </div>
    `;
    gallery.innerHTML += img;

  })
}

if (currentPage != 'portfolio.html' && currentPage != 'contact.html' && currentPage != 'about.html') {
  /* last project */

  const div = document.createElement('div');
  div.className = 'lastProjects__content padding max-w'

  const lastProject = document.querySelector('#lastProjects');
  let card = ` `;

  portfolio.map((project, index) => {
    if (index > 2) return
    card += `
<div class = "lastProjects__card  ">
  <img src=" ${project.img_src}"
  alt= " miniature du projet ${project.title}
  width="414"
  height="219"
  loading="lazy"
  />
  <div class = "lastProjects__cardInfo">
  <span class ="title-group"> 
  <p class="title title-tertiary"> ${project.tache} </p>
  <h2 class="title title-secondary"> ${project.title} </h2>
  </span>
  <p class ="txt"> ${project.desc} </p>
  <p class = "txt"> Technologie : ${project.techno} </p>
  <a href="${project.type=="Voir le projet"?project.url_site:project.url_maquette}"> ${project.type} </a>
  </div>
  </div>
  `;
  });

  div.innerHTML = card;
  lastProject.appendChild(div);
}





