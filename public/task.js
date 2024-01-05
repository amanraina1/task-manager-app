// GET A SINGLE TASK
var id = window.localStorage.getItem("id");
async function patch() {
  const dataApi = await fetch(`http://localhost:3000/api/v1/tasks/${id}`);
  const json = await dataApi.json();
  const checked = json.completed;

  if (checked) {
    check();
  } else {
    unCheck();
  }
  upadte(json);
}
async function upadte(json) {
  const p = document.getElementsByClassName("task-para");
  const input = document.getElementsByClassName("write");

  p[0].innerText = json._id;
  input[0].setAttribute("value", json.name);
}
document.addEventListener("DOMContentLoaded", patch);

//default checking for completed checkbox
async function check() {
  document.querySelector(".check-box").checked = true;
}
async function unCheck() {
  document.querySelector(".check-box").checked = false;
}

// CHANGING THE CHECKBOX BASED ON THE INPUT
const checkBox = document.querySelector(".check-box");
checkBox.addEventListener("click", async () => {
  await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      completed: checkBox.checked,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});

//EDIT A TASK
var textWritten = "";
const input = document.getElementsByClassName("write");
input[0].addEventListener("keyup", (e) => {
  textWritten = e.target.value;
});
const editBtn = document.getElementsByClassName("edit-task");
editBtn[0].addEventListener("click", async () => {
  await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      name: textWritten,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
