
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

key_shift = document.getElementById("key_shift")

function vaildate(){
  let number = Number(key_shift)

  if (number === 0 || number > 0){
    return number;
  } else{
    alertx = document.getElementById("alert")
    alert.textContent = "enter the correct number"
    keyshift.textContent = 0
  }
}   




function decode(txt, keyshift){
  aplhabet = "abcdefghijklmnopqrstuvwxyz"
  user = txt.lower()
  let ceaser = ""
  for (let i = 0; i < text.length; i = i +1){
        let text = user[i]
        let index = aplhabet.indexOf(letter)
        if (index !== -1){
            let encoder = (index-keyshift)% 26;
            encode = encode + aplhabet[encoder]
        }
        else{
        encode += text;
             }
    }
  return ceaser
}


function encoded(txt, keyshift){
  aplhabet = "abcdefghijklmnopqrstuvwxyz"
  user = txt.lower()
  let ceaser = ""
  for (let i = 0; i < text.length; i = i +1){
        let text = user[i]
        let index = aplhabet.indexOf(letter)
        let encoder = (index+keyshift)% 26;
        encode = encode + aplhabet[encoder]
        encode += text;
    }
  return ceaser
}
