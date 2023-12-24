document.getElementById("nextBtn").onclick = function () {
  location.href = "./result.html";
};

const forminputElement = document.getElementById("file");
forminputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  const fileInput = event.target;
  const file = fileInput.files[0];

  if (file) {
    const rd = new FileReader();
    rd.onload = function (event) {
      try {
        const data = JSON.parse(event.target.result);
        const firstKey = Object.keys(data.products)[0];
        const columnList = Object.keys(data.products[firstKey]);
        data.columnList = columnList;

        localStorage.setItem("data", JSON.stringify(data));
      } catch (error) {
        console.error("Error parsing JSON file:", error);
      }
    };
    rd.readAsText(file);
  }
}
