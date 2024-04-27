const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".inputs");
const taskEl = document.querySelector(".task");






formEl.addEventListener("submit",(event) => {
event.preventDefault();

  const divEl = document.createElement("div");
  const pEl = document.createElement("p");
  const editBtnEl = document.createElement("button");
  const completeBtnEl = document.createElement("button");
  const clocBtnEl = document.createElement("button");
  const deleteBtnEl = document.createElement("button");

  
  
  divEl.className = "card";
  pEl.className = "text";
  completeBtnEl.className = "btns bi-check2-circle";
  editBtnEl.className = "btns1 bi-pencil-square";
  clocBtnEl.className = "btns2 bi-clock";
  deleteBtnEl.className = "btns3 bi-trash3";


  pEl.innerHTML = inputEl.value;

  completeBtnEl.innerHTML = "complete";
  editBtnEl.innerHTML = "edit";
  clocBtnEl.innerHTML = "soat";
  deleteBtnEl.innerHTML = "delete";

  divEl.appendChild(pEl)
  divEl.appendChild(completeBtnEl)
  divEl.appendChild(editBtnEl)
  divEl.appendChild(clocBtnEl)
  divEl.appendChild(deleteBtnEl)

taskEl.prepend(divEl)



inputEl.value = "";


completeBtnEl.addEventListener("click", () => {
  pEl.classList.toggle("active")
})

deleteBtnEl.addEventListener("click", () => {
  let agrees = confirm("uchirishga rozimisiz")
  if (agrees) {
   divEl .remove();
  }
})


})



const allDeleteBtnEl = document.querySelector(".header_delete_btn_all")
allDeleteBtnEl.addEventListener("click", () => {
  let agree = confirm("All delete!")
  if (agree) {
    taskEl.innerHTML = "";
  }
})


const closeIconEl = document.querySelector(".bi-x");
closeIconEl.addEventListener("click", () => {
    inputEl.value = ""
})













































