
function genKeyboard(){
  const alpha = "qwertyuiop*asdfghjkl*zxcvbnm*";
  const body = document.getElementsByTagName("body")[0];
  for (let i=0; i<alpha.length; i++) {
    const invrow = document.createElement("div");
    invrow.className = "row";
    body.appendChild(invrow);

    while (alpha[i] !== "*" && i<alpha.length){
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.id = alpha[i];

    
      

      cell.textContent = (alpha[i].toUpperCase());
      cell.onclick = function(){keyPress(cell)};
      invrow.appendChild(cell);
      i++

    }
    
    
  }
  const space_row = document.createElement("div");
  space_row.className = "row";
  body.appendChild(space_row);
  const space_bar = document.createElement("div");
    space_bar.id = " ";
    space_bar.className = "space_bar";
    space_bar.textContent = "Space";
    space_bar.onclick = function(){keyPress(space_bar)};
    space_row.appendChild(space_bar);
}

function submit(){
  const bigbox = document.getElementsByClassName("big_box")[0];
  const text_row = document.getElementsByClassName("submit_row")[0];
  bigbox.textContent += text_row.textContent;
  text_row.textContent = " ";

}


function keyPress(letter){
  console.log(letter.id);
  const text_row = document.getElementsByClassName("submit_row")[0];
  text_row.textContent += letter.id;


}