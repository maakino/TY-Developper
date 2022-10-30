const body = document.querySelector('body');

function createPopup(index){

const data = portfolio[index];

const popin = `
<div class = "popin" id="popin_${index}" onclick = "closePopin(${index})">

<div class="popinContent">
    <img src="img/icons/close.svg" class="popinContent-close" onclick = "closePopin(${index})" width= "30" height="auto">

    <img src="${data.img_src}" class = "popinContent-img" alt="Miniature ${data.title}" width="414" height="219">

    <h2 class = "title title-secondary">${data.title}</h2>

    <p class ="txt">${data.desc}</p>

    <a href="${data.type=="site"?data.url_site:data.url_maquette}" class="btn btn-primary" target="_blank">
    ${data.type=="site"?"Voir site":"Voir maquette"}
    <img src="img/icons/send.svg"  width="24" height="24" />
  </a>

</div>

</div>
`;
body.innerHTML+= popin;
}
function closePopin(index){
    document.querySelector(`#popin_${index}`).remove();
}
