const bottomBox = document.querySelector("#bottom-box");
const btn = document.querySelector("#button");
const inputVal = document.getElementById("input");

//CREATE NEW TASK REQ
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

// GET ALL TASK REQ
const data = async () => {
  const apiData = await fetch("http://localhost:3000/api/v1/tasks");
  const finalData = await apiData.json();
  const app = finalData.allTasks;

  app.map((task) => {
    const ul = document.createElement("section");
    if (task.completed) {
      ul.innerHTML = `
        <span class="icons-left">
              <i class="fa-regular fa-circle-check check"></i>
              <span class="text line" id="${task._id}">${task.name}</span>
            </span>
            <span class="icons-right">
            <a href="task.html"><i class="fa-solid fa-pen-to-square edit"></i></a>
              <i class="fa-solid fa-trash delete" style="color: #c22424"></i>
            </span>
        `;
    } else {
      ul.innerHTML = `
          <span class="icons-left">
                <span class="text" id="${task._id}">${task.name}</span>
              </span>
              <span class="icons-right">
              <a href="task.html"><i class="fa-solid fa-pen-to-square edit"></i></a>
                <i class="fa-solid fa-trash delete" style="color: #c22424"></i>
              </span>
          `;
    }

    bottomBox.appendChild(ul);
  });
};
data();
