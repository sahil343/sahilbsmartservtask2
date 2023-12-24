const data = JSON.parse(localStorage.getItem("data"));
products = data.products;
let products_list = [];
for (product in products) {
  products_list.push(products[product]);
}
const sortedProducts = products_list.sort(
  (a, b) => b.popularity - a.popularity
);
const options = document.getElementById("available-fields");

if (data) {
  data.columnList.forEach((column) => {
    const option = document.createElement("option");
    option.value = column;
    option.innerText = column;

    options.appendChild(option);
  });
}

function displayData() {
  const outputHead = document.getElementById("outputHeads");
  outputHead.innerHTML = "";
  const outputRows = document.getElementById("outputRows");
  outputRows.innerHTML = "";

  const selectedColumns = document
    .getElementById("displayed-fields")
    .querySelectorAll("option");
  selectedColumns.forEach((column) => {
    console.log(column.innerText);
    const th = document.createElement("th");
    th.innerText = column.innerText;

    outputHead.appendChild(th);
  });

  Object.values(sortedProducts).forEach((product) => {
    let row = document.createElement("tr");
    selectedColumns.forEach((column) => {
      row.innerHTML += `<td>${product[column.innerText]}</td>`;
    });
    outputRows.appendChild(row);
  });
}

function moveSelectedOptions(sourceId, destinationId) {
  const sourceList = document.getElementById(sourceId);
  const destinationList = document.getElementById(destinationId);
  Array.from(sourceList.selectedOptions).forEach((option) => {
    destinationList.appendChild(option);
  });
}
