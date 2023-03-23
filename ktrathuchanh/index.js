let array = JSON.parse(localStorage.getItem("array"));
let ttSC = 0;

function sumPlay() {
    let result = "";
    for (i = 0; i < array.length; i++) {
      result += `
      
                  <tr  >
                      <td><button onclick="sumber(${i})" >X</button></td>
                      <i class="fa-sharp fa-solid fa-chess-queen"></i> <td ></td>
                      <td>${array[i].play}</td>
                      <td><button onclick="downSC(${i})"  class ="up">-</button></td>
                      <td>${array[i].score}</td>
                      <td><button onclick="upSC(${i})"  class ="up">+</button></td>
                  </tr>
                  
                  `;
    }
    document.getElementById("tableName").innerHTML = result;
    document.getElementById("inputPlayer").value = "";
  }
  sumPlay();



  function addPlayer() {
    let play = document.getElementById("inputPlayer").value;
    let commit = 0;
    let player = {
      play: play,
      score: commit,
    };
    if (array == null) {
      array = [];
    }
    array.push(player);
    localStorage.setItem("array", JSON.stringify(array));
    sumPlay();
  }
function sumber(pro) {
  array.splice(pro, 1);
  localStorage.setItem("array", JSON.stringify(array));
  sumPlay();
}

function upSC(up) {
  ++array[up].score;
  localStorage.setItem("array", JSON.stringify(array));
  sumPlay();
  renderHeader();
}

function downSC(ain) {
  --array[ain].score;
  localStorage.setItem("array", JSON.stringify(array));
  sumPlay();
  renderHeader();
}
function renderHeader() {
  let sum1 = 0;
  for (j = 0; j < array.length; j++) {
    a += array[j].score;
    ttSC = sum1;
  }
  let backEnd = `
            <div class ="playAndPoint">
                <div>Player:${array.length}</div>
                <div>Total Points:${ttSC}</div>
            </div>
            <div class="logoRikkei"><h2>Rikkei Scoreboard</h2></div>
            <div class="stopwatch">
                <div>Stopwatch</div>
                <div id="time">0</div>
                <button  id="myForm" onclick="start()">START</button>
                <button id="myForm" onclick="reset()">RESSET</button>
    
            </div>
            `;

  document.getElementById("Important").innerHTML = backEnd;
}
renderHeader();

function start() {
  xummo = 0;
  for (k = 0; k < 1000; k++) {
    setTimeout(() => {
      document.getElementById("time").innerHTML = xummo;
    }, 1000);
    ++xummo;

    renderHeader();
  }
}
function reset() {
  document.getElementById("myForm").
  renderHeader();
}