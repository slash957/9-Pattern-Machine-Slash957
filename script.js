const rows = document.getElementById("rows");
const columns = document.getElementById("columns");
const submitbutton = document.getElementById("submit");
const colorchoice = document.getElementById("colorchoice");
const gridofboxes = document.getElementById("gridofboxes");

submitbutton.addEventListener("click", makeGrid);

function makeGrid() {
  gridofboxes.innerHTML = '';
 
  const numRows = rows.value;
  const numColumns = columns.value;
  console.log(numRows, numColumns);


  const newColor = colorchoice.value;

  for (let i=0; i < numRows; i++) {
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.setAttribute('id', 'row0');
    gridofboxes.appendChild(newRow);

    for (let j=0; j < numColumns; j++) {
      let newBox = document.createElement('div');
      newBox.classList.add('box')
      newBox.setAttribute('id', 'box0${j}');
      newRow.appendChild(newBox);
      newBox.style.backgroundColor = newColor;
      newBox.addEventListener("click", changeColor);
      newBox.addEventListener("mouseover", changeColor);
    }
  }
}


function changeColor(event){
  const newColor = colorchoice.value;
  if (event.type === "click" || (event.type === "mouseover" && event.buttons === 1)){
    event.target.style.backgroundColor = newColor;
  }
}