const bottomBox = document.querySelector("#bottom-box");
const btn = document.querySelector("#button");
const inputVal = document.getElementById("input");
var app;

const inputText = input.addEventListener(
  "keyup",
  (e) => (app = e.target.value)
);

btn.addEventListener("click", async () => {
  await fetch("http://localhost:3000/api/v1/tasks", {
    method: "POST",
    body: JSON.stringify({
      name: app,
      completed: false,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  window.location.reload();
});

const data = async () => {
  const apiData = await fetch("http://localhost:3000/api/v1/tasks");
  const finalData = await apiData.json();
  const app = finalData.allTasks;

  app.map((task) => {
    const ul = document.createElement("section");
    ul.innerText = task.name;
    bottomBox.appendChild(ul);
  });
};
data();
