const bottomBox = document.querySelector("#bottom-box");

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
