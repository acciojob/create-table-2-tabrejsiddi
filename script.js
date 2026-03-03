function createTable() {
  const table = document.getElementById("myTable");

  
  const rn = window.prompt("Input number of rows");
  const cn = window.prompt("Input number of columns");

  const rows = parseInt(rn, 10);
  const cols = parseInt(cn, 10);


  if (isNaN(rows) || isNaN(cols)) return;

  if (rows <= 0 || cols <= 0) {
    alert("Invalid input");
    return;
  }

  
  table.innerHTML = "";

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.innerHTML = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}