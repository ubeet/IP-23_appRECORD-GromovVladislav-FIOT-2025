

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  console.log(`Создаём промис с delay = ${delay} и state = ${state}`);

  createPromise(delay, state)
    .then((ms) => {
      iziToast.success({
        title: "Fulfilled",
        message: `Fulfilled promise in ${ms}ms`,
        position: "topRight",
      });
    })
    .catch((ms) => {
      iziToast.error({
        title: "Rejected",
        message: `Rejected promise in ${ms}ms`,
        position: "topRight",
      });
    });

  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state === "fulfilled" ? resolve(delay) : reject(delay);
    }, delay);
  });
}
