import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    gallery: document.querySelector(".gallery")
}

const galleryItemsMarkup = galleryItems.map(item => {
    return (
        `
        <li class="gallery__item">
            <a class="gallery__link" href=${item.original}>
                <img class="gallery__image" src=${item.preview} alt=${item.description} />
            </a>
        </li>
        `
    )
}).join("")


refs.gallery.innerHTML = galleryItemsMarkup

const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
 });