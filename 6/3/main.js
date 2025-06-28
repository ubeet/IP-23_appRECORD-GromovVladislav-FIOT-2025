console.log("Скрипт підключено");

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(" Скрипт підключено");
const API_KEY = "51085601-cb9411d4983a99285799b966b";
const BASE_URL = "https://pixabay.com/api/";

const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const input = form.querySelector("input");

const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener("submit", async (e) => {
  
  console.log("Поиск:");
  e.preventDefault();
  const query = input.value.trim();
  console.log("Поиск:", query);
  if (!query) return;

  gallery.innerHTML = "";
  loader.classList.remove("hidden");

  try {
    const res = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`
    );
    const data = await res.json();
    console.log(data);

    if (data.hits.length === 0) {
      iziToast.warning({
        title: "Oops",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    const markup = data.hits
      .map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <a class="gallery__item" href="${largeImageURL}">
          <div class="card">
            <img src="${webformatURL}" alt="${tags}" />
            <p>❤️ ${likes} 👁 ${views} 💬 ${comments} ⬇️ ${downloads}</p>
          </div>
        </a>`
      )
      .join("");

    gallery.innerHTML = markup;
    lightbox.refresh();
  } catch (err) {
    console.error(err);
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again later.",
      position: "topRight",
    });
  } finally {
    loader.classList.add("hidden");
  }
});
