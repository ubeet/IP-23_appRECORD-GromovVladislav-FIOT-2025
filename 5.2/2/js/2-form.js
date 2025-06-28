const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: ""
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || "";
    messageInput.value = formData.message || "";
  } catch (e) {
    console.error("Помилка парсингу localStorage:", e);
  }
}

form.addEventListener("input", (e) => {
  if (e.target.name in formData) {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  formData = { email: "", message: "" };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
