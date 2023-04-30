import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    gallery: document.querySelector(".gallery")
}




const galleryItem =  galleryItems.map(item => {
    return (
        `
        <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
        `
    )
}).join("")


refs.gallery.innerHTML = galleryItem
refs.gallery.addEventListener("click", clickOnImg)



function clickOnImg(e) {
if(e.target.nodeName !== "IMG"){
   return 
}

const instance = basicLightbox.create(`
    <div class="modal">
    <img
    class="gallery__image"
    src=${e.target.dataset.source}
  />
    </div>
`)

instance.show(e)

const modal = document.querySelector(".modal")

modal.addEventListener("click", () => {
    instance.close()
}) 

window.addEventListener("keydown", () => {
    if(e.target.nodeName !== "ESCAPE") {
        instance.close()
    }
})
}



