const boxes = Array.from(document.getElementsByClassName("caja"));
const espacio = [null, null, null, null, null, null, null, null, null];
const whowins = document.getElementById("whowins");
const X_dot = "X";
const O_dot = "O";
let jugadorActual = O_dot;

const combosGanadores = [
  //filas
  { combo: [0, 1, 2] },
  { combo: [3, 4, 5] },
  { combo: [6, 7, 8] },
  //columns
  { combo: [0, 3, 6] },
  { combo: [1, 4, 7] },
  { combo: [2, 5, 8] },
  //diagonls
  { combo: [0, 4, 8]},
  { combo: [2, 4, 6]},
];


window.onload = function () {
  boxes.forEach((caja) => {
    caja.addEventListener("click", boxClicked);
  });
  
};

const boxClicked = (e) => {
  const id = e.target.id;
  // console.log(id);
  if (!espacio[id]) {
    espacio[id] = jugadorActual;
    e.target.innerText = jugadorActual;
    jugadorActual = jugadorActual === O_dot ? X_dot : O_dot;
  }
  ganador();
  draw();
};

function ganador() {
  for (const combinacionesGanadoras of combosGanadores) {
    const { combo } = combinacionesGanadoras;
    const tileValu1 = espacio[combo[0]];
    const tileValu2 = espacio[combo[1]];
    const tileValu3 = espacio[combo[2]];

    if (
      tileValu1 != null &&
      tileValu1 === tileValu2 &&
      tileValu1 === tileValu3
    ) {
      console.log(
        `${(jugadorActual =
          jugadorActual === X_dot ? O_dot : X_dot)} es el ganador`
      );

      var x =  document.getElementById('result').style.display="block"
      whowins.innerText=jugadorActual;
    }
    
  }
}


function draw(){
  const drawtiles = espacio.every((esp) => esp!==null);
    if(drawtiles){
      console.log("empate");
    }
}

