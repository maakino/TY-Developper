const gallery = document.querySelector('#gallery');
portfolio.map((project, index) =>{
    const img = `
            <img
              src="${project.img_src}"
              alt="miniature ${project.title}"
              width="414"
              height="219"
              loading="lazy"
              onclick="createPopup(${index})"
            />
    `;
    gallery.innerHTML+= img;

})
