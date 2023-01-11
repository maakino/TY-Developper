const gallery = document.querySelector('#gallery');
portfolio.map((project, index) =>{
    const img = `
    <div>
    <div class="card-hover"
    onclick="createPopup(${index})">
    <h2>${project.title}</h2>
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
    gallery.innerHTML+= img;

})
