const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateNum = () => {
  number.innerText = count;
};
const handleAdd = () => {
  count++;
  updateNum();
};
const handleSubtract = () => {
  count--;
  updateNum();
};

add.addEventListener("click", handleAdd);
subtract.addEventListener("click", handleSubtract);