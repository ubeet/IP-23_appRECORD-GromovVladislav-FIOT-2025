const images = [
  {
    preview: "https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled",
    original: "https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled",
    description: "Кошеня 1",
  },
  {
    preview: "https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg",
    original: "https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg",
    description: "Кошеня 2",
  },
  {
    preview: "https://img.freepik.com/free-photo/nature-animals_1122-1999.jpg?semt=ais_hybrid&w=740",
    original: "https://img.freepik.com/free-photo/nature-animals_1122-1999.jpg?semt=ais_hybrid&w=740",
    description: "Кошеня 3",
  },
  {
    preview: "https://cs11.pikabu.ru/post_img/2019/02/04/12/1549312329147951618.jpg",
    original: "https://cs11.pikabu.ru/post_img/2019/02/04/12/1549312329147951618.jpg",
    description: "Кошеня 4",
  },
  {
    preview: "https://i.pinimg.com/236x/0f/4a/83/0f4a833145e7596a4c3468cb2883edad.jpg",
    original: "https://i.pinimg.com/236x/0f/4a/83/0f4a833145e7596a4c3468cb2883edad.jpg",
    description: "Кошеня 5",
  },
  {
    preview: "https://i.pinimg.com/236x/b1/cc/99/b1cc9987043f82eda1963ab8ba5d03c5.jpg",
    original: "https://i.pinimg.com/236x/b1/cc/99/b1cc9987043f82eda1963ab8ba5d03c5.jpg",
    description: "Кошеня 6",
  },
  {
    preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQq89rWKaTGLDA5UETfBwVLiauA7hdf33loQ&s",
    original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQq89rWKaTGLDA5UETfBwVLiauA7hdf33loQ&s",
    description: "Кошеня 7",
  },
  {
    preview: "https://i.pinimg.com/236x/c9/72/a4/c972a4e9acc6fb1c89b35e47b01b38ac.jpg",
    original: "https://i.pinimg.com/236x/c9/72/a4/c972a4e9acc6fb1c89b35e47b01b38ac.jpg",
    description: "Кошеня 8",
  },
  {
    preview: "https://img.freepik.com/free-photo/british-shorthair-cat-look-camera_181624-47707.jpg?semt=ais_hybrid&w=740",
    original: "https://img.freepik.com/free-photo/british-shorthair-cat-look-camera_181624-47707.jpg?semt=ais_hybrid&w=740",
    description: "Кошеня 9",
  },{
    preview: "https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled",
    original: "https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled",
    description: "Кошеня 1",
  },
  {
    preview: "https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg",
    original: "https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg",
    description: "Кошеня 2",
  },
  {
    preview: "https://img.freepik.com/free-photo/nature-animals_1122-1999.jpg?semt=ais_hybrid&w=740",
    original: "https://img.freepik.com/free-photo/nature-animals_1122-1999.jpg?semt=ais_hybrid&w=740",
    description: "Кошеня 3",
  },
  {
    preview: "https://cs11.pikabu.ru/post_img/2019/02/04/12/1549312329147951618.jpg",
    original: "https://cs11.pikabu.ru/post_img/2019/02/04/12/1549312329147951618.jpg",
    description: "Кошеня 4",
  },
  {
    preview: "https://i.pinimg.com/236x/0f/4a/83/0f4a833145e7596a4c3468cb2883edad.jpg",
    original: "https://i.pinimg.com/236x/0f/4a/83/0f4a833145e7596a4c3468cb2883edad.jpg",
    description: "Кошеня 5",
  },
  {
    preview: "https://i.pinimg.com/236x/b1/cc/99/b1cc9987043f82eda1963ab8ba5d03c5.jpg",
    original: "https://i.pinimg.com/236x/b1/cc/99/b1cc9987043f82eda1963ab8ba5d03c5.jpg",
    description: "Кошеня 6",
  },
  {
    preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQq89rWKaTGLDA5UETfBwVLiauA7hdf33loQ&s",
    original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQq89rWKaTGLDA5UETfBwVLiauA7hdf33loQ&s",
    description: "Кошеня 7",
  },
  {
    preview: "https://i.pinimg.com/236x/c9/72/a4/c972a4e9acc6fb1c89b35e47b01b38ac.jpg",
    original: "https://i.pinimg.com/236x/c9/72/a4/c972a4e9acc6fb1c89b35e47b01b38ac.jpg",
    description: "Кошеня 8",
  },
  {
    preview: "https://img.freepik.com/free-photo/british-shorthair-cat-look-camera_181624-47707.jpg?semt=ais_hybrid&w=740",
    original: "https://img.freepik.com/free-photo/british-shorthair-cat-look-camera_181624-47707.jpg?semt=ais_hybrid&w=740",
    description: "Кошеня 9",
  }
];

const galleryList = document.querySelector(".gallery");

const markup = images.map(({ preview, original, description }) => {
  return `
    <li>
      <img src="${preview}" data-source="${original}" alt="${description}" />
    </li>
  `;
}).join("");

galleryList.innerHTML = markup;

galleryList.addEventListener("click", (e) => {
  const img = e.target;
  if (img.nodeName !== "IMG") return;

  const instance = basicLightbox.create(`
    <img src="${img.dataset.source}" alt="${img.alt}" />
  `);
  instance.show();
});
