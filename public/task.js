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
  const p = document.querySelector(".task-para");
  const date = document.querySelector(".date");
  const updateDate = document.querySelector(".update-date");
  console.log(json);
  const input = document.querySelector(".write");

  p.innerText = json._id;
  updateDate.innerText = json.updatedAt;
  date.innerText = json.createdAt;
  input.setAttribute("value", json.name);
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
const input = document.querySelector(".write");
input.addEventListener("keyup", (e) => {
  textWritten = e.target.value;
});
const editBtn = document.querySelector(".edit-task");
editBtn.addEventListener("click", async () => {
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
