const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const calculate = (btnValue) => {
  console.log(btnValue);
};

// menambahkan event listener untuk buttons, panggil calculate() ketika diclick
buttons.forEach((button) => {
  button.addEventListener("click", (e) => console.log(e.target.dataset.value));
});
