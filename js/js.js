//****************************************************************
//                            VARIABLES
//***************************************************************
//--------------------------- MAIN BTNS --------------------------
const settingsBtn = document.getElementById("settingsBtn");
const themeBtn = document.getElementById("themeBtn");
const downLevel = document.getElementById("lev-");
const upLevel = document.getElementById("lev+");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const downEntry = document.getElementById("e-");
const upEntry = document.getElementById("e+");
const downRebuy = document.getElementById("r-");
const upRebuy = document.getElementById("r+");
const downPlayer = document.getElementById("l-");
const upPlayer = document.getElementById("l+");
const downAddon = document.getElementById("a-");
const upAddon = document.getElementById("a+");
//------------------------ MAIN ELEMENTS -------------------------
const classOne = document.querySelectorAll(".one");
const classTwo = document.querySelectorAll(".two");
const classThree = document.querySelectorAll(".three");
const btns = document.querySelectorAll(".btn");
let play = false;
const title = document.getElementById("title");
const currentTime = document.getElementById("sCT");
const elapsedTime = document.getElementById("sET");
const nextBreakP = document.getElementById("sNBr1");
const nextBreak = document.getElementById("sNBr2");
const avg = document.getElementById("sAvg");
let iNextBreak = 0;
const level = document.getElementById("level");
const time = document.getElementById("time");
const blindText = document.getElementById("sBl");
const anteText = document.getElementById("sA1");
const ante = document.getElementById("sA2");
const nextBlinds = document.getElementById("sNBl2");
const nextAnteText = document.getElementById("sNBl3");
const nextAnte = document.getElementById("sNBl4");
let breaks = [];
let gameInfo = [];
let arrayActLevel = [];
let timerET = null;
let timerLevel = null;
let timerBreak = null;
const entries = document.getElementById("sB");
const rebuys = document.getElementById("sR");
const addons = document.getElementById("sAd");
const players = document.getElementById("sP");
let playersLeft = Number(players.textContent.split("/")[0]);
const pInfoMtt = document.getElementById("infoMtt");
const stackP = document.getElementById("iM1");
const stack = document.getElementById("iM2");
const buyInText = document.getElementById("iM3");
const buyIn = document.getElementById("iM4");
const euroSymbol = document.getElementById("iM5");
const endRebuysText = document.getElementById("iM6");
const endRebuys = document.getElementById("iM7");
const pPrizes = document.getElementById("prizes");
const themeSelect = document.getElementById("themeSelect");
//-------------------------- MODAL BTNS --------------------------
let btnsModal = document.querySelectorAll(".btnModal");
const sendMttBtnM = document.getElementById("mttDivSendModal");
const resetMttBtnM = document.getElementById("mttDivResetModal");
const generatePrizesBtnM = document.getElementById("prizesGenerateBtnModal");
const sendPrizesBtnM = document.getElementById("prizesSendBtnModal");
const resetPrizesBtnM = document.getElementById("prizesResetBtnModal");
const saveLevelBtnM = document.getElementById("saveLevelsBtnModal");
const deleteLevelBtnM = document.getElementById("deleteLevelsBtnModal");
const sendLevelBtnM = document.getElementById("sendLevelsModal");
const resetLevelBtnM = document.getElementById("resetLevelsModal");
const closeM = document.getElementById("closeModal");
//----------------------- MODAL ELEMENTS -------------------------
const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();
const elementsMttM = document.querySelectorAll(".elementMttModal");
const modalM = document.getElementById("myModal");
const dateM = document.getElementById("dateModal");
const nameM = document.getElementById("nameModal");
const stackM = document.getElementById("stackModal");
const buyInM = document.getElementById("buyInModal");
const endRebuysM = document.getElementById("endRebuysModal");
const endRebuysDivM = document.getElementById("endRebuysDivModal");
const checkRebuysM = document.getElementById("checkRebuysModal");
const checkAddonsM = document.getElementById("checkAddonsModal");
let checkedRebuys = false;
let checkedAddons = false;
let sendBtnMttState = false;
let allFilled = false;
let filled = true;
let mtt = false;
let levels = false;
let arrayPrizes = [];
let inputPercent = [];
let inputPrize = [];
const totalPrizeM = document.getElementById("totalPrizeModal");
const paidPlacesM = document.getElementById("paidPlacesModal");
const tablePrizesM = document.getElementById("tablePrizesModal");
const tbodyPrizesM = document.getElementById("tbodyPrizesModal");
let totalPrizesRowM = document.getElementById("totalPrizesRowModal");
let prizesDivBtnM = document.getElementById("prizesDivBtnModal");
const selectLevelsM = document.getElementById("selectLevelsModal");
const inputLevelCustomM = document.getElementById("titleLevelsModal");
const tbodyLevelsM = document.getElementById("tbodyLevelsModal");
let totalLevelsLevelsM = document.getElementById("totalLevelsLevels");
let totalTimeLevelsM = document.getElementById("totalTimeLevels");
let rowsLevels = tbodyLevelsM.querySelectorAll("tr");
let countLevelsRows = 1;
let arrayLevels = [];
const columns = 5;
let iArrayLevels = 0;
let tbodyLevelsMLength = 1;
let end = false;
const objLevels = {
    lento: {
        name: "Lento",
        levels: [
            { level: 1, sb: 100, bb: 100, ante: 0, time: 15 },
            { level: 2, sb: 100, bb: 200, ante: 0, time: 15 },
            { level: 3, sb: 200, bb: 300, ante: 0, time: 15 },
            { level: 4, sb: 200, bb: 400, ante: 0, time: 15 },
            { level: 5, sb: 300, bb: 600, ante: 0, time: 15 },
            { level: 6, sb: 400, bb: 800, ante: 0, time: 15 },
            { level: 7, sb: 500, bb: 1000, ante: 0, time: 15 },
            { level: "Descanso", sb: "Descanso", bb: "Descanso", ante: "Descanso", time: 45 },
            { level: 8, sb: 500, bb: 1000, ante: 1000, time: 20 },
            { level: 9, sb: 500, bb: 1500, ante: 1500, time: 20 },
            { level: 10, sb: 1000, bb: 2000, ante: 2000, time: 20 },
            { level: 11, sb: 1500, bb: 3000, ante: 3000, time: 20 },
            { level: 12, sb: 2000, bb: 4000, ante: 4000, time: 20 },
            { level: 13, sb: 2500, bb: 5000, ante: 5000, time: 20 },
            { level: 14, sb: 3000, bb: 6000, ante: 6000, time: 20 },
            { level: 15, sb: 4000, bb: 8000, ante: 8000, time: 20 },
            { level: 16, sb: 5000, bb: 10000, ante: 10000, time: 20 },
            { level: 17, sb: 6000, bb: 12000, ante: 12000, time: 20 },
            { level: 18, sb: 8000, bb: 16000, ante: 16000, time: 20 },
            { level: 19, sb: 10000, bb: 20000, ante: 20000, time: 20 },
            { level: 20, sb: 12000, bb: 25000, ante: 25000, time: 20 },
            { level: 21, sb: 15000, bb: 30000, ante: 30000, time: 20 },
            { level: 22, sb: 20000, bb: 40000, ante: 40000, time: 20 },
            { level: 23, sb: 25000, bb: 50000, ante: 50000, time: 20 },
            { level: 24, sb: 30000, bb: 60000, ante: 60000, time: 20 },
            { level: 25, sb: 40000, bb: 80000, ante: 80000, time: 20 },
        ],
    },
    normal: {
        name: "Normal",
        levels: [
            { level: 1, sb: 100, bb: 200, ante: 0, time: 15 },
            { level: 2, sb: 200, bb: 400, ante: 0, time: 15 },
            { level: 3, sb: 300, bb: 600, ante: 0, time: 15 },
            { level: 4, sb: 400, bb: 800, ante: 0, time: 15 },
            { level: 5, sb: 500, bb: 1000, ante: 0, time: 15 },
            { level: 6, sb: 600, bb: 1200, ante: 0, time: 15 },
            { level: 7, sb: 700, bb: 1400, ante: 0, time: 15 },
            { level: 8, sb: 800, bb: 1600, ante: 0, time: 15 },
            { level: "Descanso", sb: "Descanso", bb: "Descanso", ante: "Descanso", time: 45 },
            { level: 9, sb: 1000, bb: 2000, ante: 2000, time: 15 },
            { level: 10, sb: 1200, bb: 2500, ante: 2500, time: 15 },
            { level: 11, sb: 1500, bb: 3000, ante: 3000, time: 15 },
            { level: 12, sb: 1700, bb: 3500, ante: 3500, time: 15 },
            { level: 13, sb: 2000, bb: 4000, ante: 4000, time: 15 },
            { level: 14, sb: 2500, bb: 5000, ante: 5000, time: 15 },
            { level: 15, sb: 3000, bb: 6000, ante: 6000, time: 15 },
            { level: 16, sb: 4000, bb: 8000, ante: 8000, time: 15 },
            { level: 17, sb: 6000, bb: 12000, ante: 12000, time: 15 },
            { level: 18, sb: 8000, bb: 16000, ante: 16000, time: 15 },
            { level: 19, sb: 10000, bb: 20000, ante: 20000, time: 15 },
            { level: 20, sb: 15000, bb: 30000, ante: 30000, time: 15 },
            { level: 21, sb: 20000, bb: 40000, ante: 40000, time: 15 },
            { level: 22, sb: 25000, bb: 50000, ante: 50000, time: 15 },
            { level: 23, sb: 30000, bb: 60000, ante: 60000, time: 15 },
            { level: 24, sb: 40000, bb: 80000, ante: 80000, time: 15 },
            { level: 25, sb: 50000, bb: 100000, ante: 100000, time: 15 },
        ],
    },
    rapido: {
        name: "Rápido",
        levels: [
            { level: 1, sb: 100, bb: 200, ante: 100, time: 15 },
            { level: 2, sb: 200, bb: 400, ante: 400, time: 15 },
            { level: 3, sb: 300, bb: 600, ante: 600, time: 15 },
            { level: 4, sb: 400, bb: 800, ante: 800, time: 15 },
            { level: 5, sb: 500, bb: 1000, ante: 1000, time: 15 },
            { level: 6, sb: 600, bb: 1200, ante: 1200, time: 15 },
            { level: 7, sb: 800, bb: 1600, ante: 1600, time: 15 },
            { level: 8, sb: 1000, bb: 2000, ante: 2000, time: 15 },
            { level: "Descanso", sb: "Descanso", bb: "Descanso", ante: "Descanso", time: 45 },
            { level: 9, sb: 1500, bb: 3000, ante: 3000, time: 15 },
            { level: 10, sb: 2000, bb: 4000, ante: 4000, time: 15 },
            { level: 11, sb: 2500, bb: 5000, ante: 5000, time: 15 },
            { level: 12, sb: 3000, bb: 6000, ante: 6000, time: 15 },
            { level: 13, sb: 4000, bb: 8000, ante: 8000, time: 15 },
            { level: 14, sb: 6000, bb: 12000, ante: 12000, time: 15 },
            { level: 15, sb: 8000, bb: 16000, ante: 16000, time: 15 },
            { level: 16, sb: 10000, bb: 20000, ante: 20000, time: 15 },
            { level: 17, sb: 15000, bb: 30000, ante: 30000, time: 15 },
            { level: 18, sb: 20000, bb: 40000, ante: 40000, time: 15 },
            { level: 19, sb: 25000, bb: 50000, ante: 50000, time: 15 },
            { level: 20, sb: 30000, bb: 60000, ante: 60000, time: 15 },
            { level: 21, sb: 40000, bb: 80000, ante: 80000, time: 15 },
            { level: 22, sb: 50000, bb: 100000, ante: 100000, time: 15 },
        ],
    },
};
//****************************************************************
//                            FUNCIONES
//****************************************************************
//*************************** DATE/TIME **************************
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}

function updateCurrentTime() {
    currentTime.textContent = updateTime();
}

function timeToSeconds(timeString = "00:00:00") {
    const temp = timeString.split(":").map(Number);

    if (temp.length === 3) {
        return temp[0] * 3600 + temp[1] * 60 + temp[2];
    } else if (temp.length === 2) {
        return temp[0] * 60 + temp[1];
    }

    throw new Error("Formato de tiempo no válido. Usa 'HH:MM:SS' o 'MM:SS'.");
}

function secondsToTime(seconds = 0) {
    const hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    secs = secs < 10 ? "0" + secs : secs;
    mins = mins < 10 ? "0" + mins : mins;

    let result = `${hours}:${mins}:${secs}`;

    if (hours === 0) {
        mins = Number(mins);
        result = `${mins}:${secs}`;
    }

    return result;
}

function createTimer(renderElement, isCountDown = true, time = "00:00:00") {
    let secs = timeToSeconds(time);
    const soundMinute = new Audio('./audio/unMinuto.mp3');
    const soundEnd = new Audio('./audio/subenCiegas.mp3');
    soundMinute.preload = 'auto';
    soundEnd.preload = 'auto';

    const interval = setInterval(() => {
        if (isCountDown) {
            secs--;

            if (secs === 65) {
                soundMinute.play().catch(err => console.log('Error audio:', err));
            }

            if (secs === 0) {
                if (!upLevel.disabled) {
                    soundEnd.play().catch(err => console.log('Error audio:', err));
                }

                if (upLevel.disabled) {
                    end = true;
                    pauseTimer(timerET);
                    pauseTimer(timerBreak);
                    pauseTimer(timerLevel);
                    renderElement.textContent = "FIN";
                    pauseBtn.style.display = "none";
                } else {
                    upLevel.click();
                }
            }
        } else {
            secs++;
        }

        if (!end && secs !== 0) {
            renderElement.textContent = secondsToTime(secs);
        }
    }, 1000);

    return interval;
}

function pauseTimer(interval) {
    clearInterval(interval);
}

function startTimers() {
    timerLevel = createTimer(time, true, time.textContent);

    if (nextBreak.textContent !== "-" && nextBreakP.textContent !== "Último nivel:") {
        timerBreak = createTimer(nextBreak, true, nextBreak.textContent);
    }
}
//**************************** NUMBERS ***************************
function formatNum(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function removeDecimals(num, threshold = 0.01) {
    const roundedNum = parseFloat(num.toFixed(2));
    return Math.abs(roundedNum - Math.round(roundedNum)) < threshold
        ? Math.round(roundedNum)
        : roundedNum;
}

function roundToNearest(num, multiple = 1) {
    const integerNum = Math.round(num);
    return Math.round(integerNum / multiple) * multiple;
}
//*************************** STRINGS ****************************
function normalizeText(str) {
    return str
        .toLowerCase()
        .normalize()
        .replace(/[áàäâ]/g, "a")
        .replace(/[éèëê]/g, "e")
        .replace(/[íìïî]/g, "i")
        .replace(/[óòöô]/g, "o")
        .replace(/[úùüû]/g, "u");
}

function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
//----------------------------- MAIN -----------------------------
function getLevel(index) {
    if (arrayLevels.length === 0) return;

    level.textContent = "Nivel " + arrayLevels[index][0];
    time.textContent = secondsToTime(timeToSeconds(`${arrayLevels[index][4]}:00`));
    blindText.textContent = `${formatNum(arrayLevels[index][1])} / ${formatNum(arrayLevels[index][2])}`;
    anteText.textContent = " ante ";
    ante.textContent = `${formatNum(arrayLevels[index][3])}`;
    nextBlinds.textContent = " - ";
    nextAnteText.textContent = " ante ";
    nextAnte.textContent = " - ";

    if (arrayLevels[index][0] === "Descanso") {
        level.textContent = arrayLevels[index][0];
        blindText.textContent = " - ";
        ante.textContent = " - ";
    }

    if (arrayLevels[index][3] === "0") {
        ante.textContent = " - ";
    }

    if (arrayLevels[index + 1]) {
        nextBlinds.textContent = `${formatNum(arrayLevels[index + 1][1])} / ${formatNum(arrayLevels[index + 1][2])}`;

        if (arrayLevels[index + 1][3] !== "0") {
            nextAnte.textContent = `${formatNum(arrayLevels[index + 1][3])}`;
        }

        if (arrayLevels[index + 1][1] === "Descanso") {
            nextBlinds.textContent = "Descanso";
            nextAnteText.textContent = "";
            nextAnte.textContent = "";
        }
    }
}

function resetLevelMain() {
    level.textContent = "-";
    time.textContent = "-";
    blindText.textContent = "-";
    ante.textContent = "-";
    nextBlinds.textContent = "-";
    nextAnte.textContent = "-";
}

function actionBtnsGame() {
    startBtn.disabled = !(mtt && levels && Number(entries.textContent) > 0);
}

function calcAvg() {
    const stackValue = Number(stackM.value);
    const left = Number(players.textContent.split("/")[0]);
    const total = Number(players.textContent.split("/")[1]);
    const rebuy = Number(rebuys.innerHTML);
    const addon = Number(addons.innerHTML);
    let result = Number(total + rebuy + addon);
    avg.textContent = formatNum(roundToNearest((stackValue * result) / left, 100));
}

function calcBetweenBreaksTime() {
    let countTime = 0;
    breaks = [];

    arrayLevels.forEach((row) => {
        if (row[0] !== "Descanso") {
            countTime += Number(row[4]);
        } else {
            breaks.push(countTime);
            countTime = 0;
        }
    });

    if (countTime !== 0) breaks.push(countTime);

    return breaks.length === 1 ? [] : breaks;
}

function showNextBreakTime(index) {
    const breakTime = calcBetweenBreaksTime()[index];
    const h = parseInt(breakTime / 60);
    let m = roundToNearest((breakTime / 60 - h) * 60);
    const s = "00";

    m = m < 10 ? "0" + m : m;
    nextBreak.textContent = `${h}:${m}:${s}`;
    return `${h}:${m}:${s}`;
}

function updateNextBreakTime(operation) {
    const totalMRender = Number(breaks[iNextBreak]);
    let totalMPrev = 0;

    for (let i = iArrayLevels - 1; i >= 0; i--) {
        if (arrayLevels[i][0] === 'Descanso') break;
        totalMPrev += Number(arrayLevels[i][4]);
    }

    const resultM = totalMRender - totalMPrev;
    const hours = parseInt(resultM / 60);
    const mins = Math.round((resultM / 60 - hours) * 60);

    return `${hours}:${mins}:00`;
}
//----------------------------- MODAL -----------------------------
function updateTotalPrizes() {
    let totalPercent = 0;
    let totalPrize = 0;

    arrayPrizes.forEach((item) => {
        totalPercent += item.percent;
        totalPrize += item.prize;
    });

    totalPrizesRowM.cells[1].textContent = removeDecimals(totalPercent);
    totalPrizesRowM.cells[2].textContent = removeDecimals(totalPrize);

    const isValid = totalPrizesRowM.cells[1].textContent === "100";
    const color = isValid ? "var(--black)" : "var(--red)";

    totalPrizesRowM.cells[0].style.color = color;
    totalPrizesRowM.cells[1].style.color = color;
    totalPrizesRowM.cells[2].style.color = color;
    sendPrizesBtnM.disabled = !isValid;
}

function changeInputPrizes() {
    inputPercent.forEach((input, i) => {
        input.addEventListener("input", (e) => {
            const newPercent = Number(e.target.value);
            const newPrize = (newPercent / 100) * Number(totalPrizeM.value);

            inputPrize[i].value = newPrize.toFixed(2);
            arrayPrizes[i].percent = newPercent;
            arrayPrizes[i].prize = newPrize;
            updateTotalPrizes();
        });
    });

    inputPrize.forEach((input, i) => {
        input.addEventListener("input", (e) => {
            const newPrize = Number(e.target.value);
            const newPercent = (newPrize / Number(totalPrizeM.value)) * 100;

            inputPercent[i].value = newPercent.toFixed(2);
            arrayPrizes[i].percent = newPercent;
            arrayPrizes[i].prize = newPrize;
            updateTotalPrizes();
        });
    });
}

function updateTotalPrize() {
    const total = Number(entries.textContent) || 0;
    const rebuy = Number(rebuys.textContent) || 0;
    const addon = Number(addons.textContent) || 0;
    totalPrizeM.value = buyInM.value * (total + rebuy + addon);
}

function updateTotalLevels() {
    const rows = tbodyLevelsM.querySelectorAll("tr");
    let totalTime = 0;

    rows.forEach((row) => {
        countLevelsRows = rows.length;

        if (row.cells[4].children[0]) {
            totalTime += Number(row.cells[4].children[0].value);
        }
    });

    const totalH = parseInt(totalTime / 60);
    let totalM = Math.round((totalTime / 60 - totalH) * 60);
    totalM = totalM < 10 ? "0" + totalM : totalM;

    return `${totalH} : ${totalM} h`;
}

function updateLevels() {
    const rows = Array.from(tbodyLevelsM.querySelectorAll("tr"));
    let level = 0;
    countLevelsRows = rows.length;

    rows.forEach((row, index) => {
        const deleteRowBtn = row.querySelector(".deleteRowLevels");
        const addBreakRowBtn = row.querySelector(".addBreakRowLevels");
        const addRowBtn = row.querySelector(".addRowLevels");

        if (deleteRowBtn && addBreakRowBtn && addRowBtn) {
            deleteRowBtn.disabled = false;
            addBreakRowBtn.disabled = false;
            addRowBtn.disabled = false;

            if (countLevelsRows >= 26) {
                addBreakRowBtn.disabled = true;
                addRowBtn.disabled = true;
            }

            if (countLevelsRows === 1) {
                deleteRowBtn.disabled = true;
            }
        }

        if (rows[index - 1] && row.cells[0] && row.cells[0].textContent === "Descanso") {
            row.cells[5].children[1].style.display = "none";
            row.cells[5].children[0].style.marginRight = "1.45rem";
            rows[index - 1].cells[5].children[1].disabled = true;
        } else if (row.cells[0].children[0]) {
            row.cells[0].children[0].value = level + 1;
            totalLevelsLevelsM.textContent = Number(row.cells[0].textContent) - 1;
            level++;
        }

        totalLevelsLevelsM.textContent = level;
        totalTimeLevelsM.textContent = updateTotalLevels();
    });

    if (rows.length > 0 && rows[rows.length - 1].querySelector("td").textContent === "Descanso") {
        rows.pop();
    }
}

function resetLevels() {
    return `
    <tr>
      <td><input type="text" class="tdLevelsModal" value="1" readonly/></td>
      <td><input type="number" class="tdLevelsModal" min="100" step="100" value="100"/></td>
      <td><input type="number" class="tdLevelsModal" min="100" step="100" value="100"/></td>
      <td><input type="number" class="tdLevelsModal" min="0" step="100" value="0"/></td>
      <td><input type="number" class="tdLevelsModal" step="1" min="10" value="15"/></td>
      <td>
        <button class="deleteRowLevels" disabled><i class="fa-solid fa-x"></i></button>
        <button class="addBreakRowLevels"><i class="fa-solid fa-pause"></i></button>
        <button class="addRowLevels"><i class="fa-solid fa-plus"></i></button>
      </td>
    </tr>
  `;
}

function actionTableLevels(bool) {
    tbodyLevelsM.querySelectorAll(".tdLevelsModal, .deleteRowLevels, .addBreakRowLevels, .addRowLevels")
        .forEach(el => el.disabled = bool);
}

function optionToCustom() {
    selectLevelsM.value = "custom";
    inputLevelCustomM.style.display = "block";
    saveLevelBtnM.style.display = "block";
    deleteLevelBtnM.style.display = "none";
    resetLevelBtnM.style.display = "block";
}

function updatePlayerMax() {
    const maxPlayers = players.innerHTML.split('/')[0];
    paidPlacesM.max = maxPlayers;

    if (Number(paidPlacesM.value) > Number(maxPlayers)) {
        paidPlacesM.value = maxPlayers;
    }
}
//****************************************************************
//                            EJECUCIÓN
//****************************************************************
// Prevenir recarga
// window.addEventListener('beforeunload', (event) => {
//     if (!window.allowReload) {
//         event.preventDefault();
//         event.returnValue = '';
//     }
// });
// document.addEventListener('keydown', (event) => {
//     if ((event.key === 'F5') || (event.ctrlKey && event.key === 'r') || (event.metaKey && event.key === 'r')) {
//         if (!window.allowReload) event.preventDefault();
//     }
// });

// Ajustes Carlos
checkRebuysM.checked = true;
checkAddonsM.checked = true;
endRebuysDivM.style.display = "block";
endRebuysM.value = 7;
sendMttBtnM.disabled = false;
nameM.value = 'Torneo Cortijo Jueves';
stackM.value = 25000;
buyInM.value = 30;

//----------------------------- MAIN -----------------------------
settingsBtn.addEventListener("click", () => modalM.style.display = "flex");
closeM.addEventListener("click", () => modalM.style.display = "none");
document.addEventListener("click", (event) => {
    if (event.target === modalM) modalM.style.display = "none";
});
// THEME
themeBtn.addEventListener("click", () => {
    const nextIndex = (themeSelect.selectedIndex + 1) % themeSelect.options.length;
    themeSelect.selectedIndex = nextIndex;
    themeSelect.dispatchEvent(new Event("change"));
});
themeSelect.addEventListener("change", () => {
    const colors = {
        blue: ["--blue1", "--blue2", "--blue3", "--blue4"],
        red: ["--red1", "--red2", "--red3", "--red4"],
        green: ["--green1", "--green2", "--green3", "--green4"]
    };
    const selectedColors = colors[themeSelect.value] || colors.blue;

    document.body.style.backgroundColor = `var(${selectedColors[0]})`;
    classTwo.forEach(el => el.style.backgroundColor = `var(${selectedColors[1]})`);
    classThree.forEach(el => el.style.backgroundColor = `var(${selectedColors[2]})`);
    classOne.forEach(el => el.style.backgroundColor = `var(${selectedColors[3]})`);
});
// LEVEL
upLevel.disabled = 'true';
function handleLevelChange(direction) {
    return (event) => {
        const delta = direction === 'up' ? 1 : -1;
        arrayActLevel.push(arrayLevels[iArrayLevels + delta][0]);
        if (arrayActLevel.length > 3) arrayActLevel.shift();

        if (Number(arrayActLevel[2]) === Number(arrayActLevel[0]) + delta && !Number.isNaN(arrayActLevel[2])) {
            iNextBreak += delta;
        }

        upLevel.disabled = direction === 'down' ? false : rowsLevels.length - 1 - iArrayLevels === 1;
        downLevel.disabled = direction === 'up' ? false : iArrayLevels === 1;

        iArrayLevels += delta;
        getLevel(iArrayLevels);
        themeBtn.click();

        // Actualizar tiempo de descanso
        const isBreak = arrayLevels[iArrayLevels][0] === "Descanso";
        const isLastLevel = nextBreakP.textContent === "Último nivel:";

        if (isBreak) {
            nextBreakP.textContent = "Descanso en";
            nextBreak.textContent = "-";
        } else if (direction === 'up' && calcBetweenBreaksTime().length > 0) {
            const isLastBreak = calcBetweenBreaksTime().length - 1 === iNextBreak;
            if (isLastBreak) {
                nextBreakP.textContent = "Último nivel:";
                nextBreak.textContent = arrayLevels[arrayLevels.length - 1][0];
            } else {
                let [hours, mins, secs] = updateNextBreakTime("lev+").split(':');
                nextBreak.textContent = `${hours}:${mins.padStart(2, '0')}:${secs}`;
            }
        } else if (!isLastLevel) {
            let [hours, mins, secs] = updateNextBreakTime("lev-").split(':');
            nextBreak.textContent = `${hours}:${mins.padStart(2, '0')}:${secs}`;
        }

        pauseTimer(timerLevel);
        pauseTimer(timerET);
        pauseTimer(timerBreak);

        if (event.isTrusted) {
            pauseBtn.textContent = "Reanudar";
            play = false;
        } else {
            startTimers();
            if (level.textContent === "Descanso") pauseTimer(timerET);
        }
    };
}
downLevel.addEventListener("click", handleLevelChange('down'));
upLevel.addEventListener("click", handleLevelChange('up'));
// TIME
updateCurrentTime();
setInterval(updateCurrentTime, 1000);
// GAME BTNS
startBtn.addEventListener("click", () => {
    play = true;
    startBtn.style.display = "none";
    startBtn.disabled = true;
    pauseBtn.style.display = "block";
    pauseBtn.disabled = false;
    resetBtn.style.display = "block";
    btnsModal.forEach(btn => btn.disabled = true);
    gameInfo = [
        { date: dateM.value },
        { time: currentTime.textContent },
        { name: nameM.value },
        { buyIn: buyInM.value },
        { stack: stackM.value },
        { rebuys: checkRebuysM.checked },
        { addons: checkAddonsM.checked },
        { nameLevel: selectLevelsM.value }
    ];
    timerET = createTimer(elapsedTime, false);
    timerLevel = createTimer(time, true, time.textContent);
    if (nextBreak.textContent !== "-" && nextBreakP.textContent !== "Último nivel:") {
        timerBreak = createTimer(nextBreak, true, nextBreak.textContent);
    }
});
pauseBtn.addEventListener("click", () => {
    if (play) {
        pauseBtn.textContent = "Reanudar";
        pauseTimer(timerLevel);
        pauseTimer(timerBreak);
        play = false;
    } else {
        pauseBtn.textContent = "Pausar";
        startTimers();
        play = true;
    }
});
resetBtn.addEventListener("click", () => {
    if (confirm("¿Seguro que quieres RESETEAR la partida?")) {
        location.reload();
    }
});
// CONTROL PANEL
function updateEntries(delta) {
    entries.textContent = Math.max(0, Number(entries.textContent) + delta);
    playersLeft = Number(playersLeft) + delta;
    downEntry.disabled = entries.textContent === "0";
    upEntry.disabled = false;
    if (playersLeft === 1) {
        downEntry.disabled = true;
        downPlayer.disabled = true;
    }
    if (delta < 0 && Number(entries.textContent) < Number(addons.textContent)) {
        addons.textContent = entries.textContent;
    }
    if (delta > 0) {
        if (Number(entries.textContent) > 0 && playersLeft > 0) downPlayer.disabled = false;
        if (checkedRebuys && playersLeft > 0) upRebuy.disabled = false;
        if (checkedAddons && playersLeft > 0) upAddon.disabled = false;
    }
    players.textContent = `${playersLeft}/${entries.textContent}`;
    calcAvg();
    updateTotalPrize();
    updatePlayerMax();
    if (delta > 0) actionBtnsGame();
}
downEntry.addEventListener("click", () => updateEntries(-1));
upEntry.addEventListener("click", () => updateEntries(1));
function updateRebuys(delta) {
    rebuys.textContent = Math.max(0, Number(rebuys.textContent) + delta);
    downRebuy.disabled = rebuys.textContent === "0";
    calcAvg();
    updateTotalPrize();
}
downRebuy.addEventListener("click", () => updateRebuys(-1));
upRebuy.addEventListener("click", () => updateRebuys(1));
function updateAddons(delta) {
    const currentAddons = Number(addons.textContent);
    const newAddons = Math.max(0, Math.min(playersLeft, currentAddons + delta));
    addons.textContent = newAddons;
    upAddon.disabled = newAddons === playersLeft;
    downAddon.disabled = newAddons === 0;
    calcAvg();
    updateTotalPrize();
}
downAddon.addEventListener("click", () => updateAddons(-1));
upAddon.addEventListener("click", () => updateAddons(1));
function updatePlayersLeft(delta) {
    const totalEntries = Number(entries.textContent);
    playersLeft = Math.max(1, Math.min(totalEntries, playersLeft + delta));
    downPlayer.disabled = playersLeft === 1;
    upPlayer.disabled = playersLeft === totalEntries;
    downEntry.disabled = playersLeft === 1;
    if (playersLeft > Number(addons.textContent)) upAddon.disabled = false;
    players.textContent = `${playersLeft}/${totalEntries}`;
    calcAvg();
    updatePlayerMax();
}
downPlayer.addEventListener("click", () => updatePlayersLeft(-1));
upPlayer.addEventListener("click", () => updatePlayersLeft(1));
//---------------------------- MODAL -----------------------------
// GENERAL
document.addEventListener('input', (event) => {
    const input = event.target;
    if ((input.classList.contains('input') || input.classList.contains('tdLevelsModal')) && input.id !== 'nameModal') {
        let cleanValue = input.value.replace(/[.,]/g, '');
        if (cleanValue === '') return;
        input.value = Math.round(Number(cleanValue));
    }
});
document.addEventListener('blur', (event) => {
    const input = event.target;
    if ((input.classList.contains('input') || input.classList.contains('tdLevelsModal')) && input.id !== 'nameModal') {
        if (input.value === '' || input.value === null) {
            input.value = input.min || 0;
        }
    }
}, true);
// TORNEO
dateM.value = `${day}/${month}/${year}`;
elementsMttM.forEach((input) => {
    input.addEventListener("input", () => {
        allFilled = Array.from(elementsMttM).every(input => input.value.trim() !== "");
        sendBtnMttState = allFilled;
        sendMttBtnM.disabled = !allFilled;
    });
});
['stackM', 'buyInM'].forEach(inputId => {
    const input = eval(inputId);
    const defaultValue = inputId === 'stackM' ? 100 : 5;
    input.addEventListener('input', function () {
        if (isNaN(parseFloat(this.value)) || parseFloat(this.value) < 0) {
            this.value = defaultValue;
        }
    });
});
checkRebuysM.addEventListener("change", function () {
    endRebuysDivM.style.display = this.checked ? "block" : "none";
    endRebuysM.value = this.checked ? endRebuysM.value : "";
    sendMttBtnM.disabled = this.checked ? true : !allFilled;
});
endRebuysM.addEventListener("input", () => {
    filled = endRebuysM.value.trim() !== "";
    sendMttBtnM.disabled = !(filled && sendBtnMttState);
});
endRebuysM.addEventListener('blur', () => {
    filled = endRebuysM.value.trim() !== "";
    if (filled && sendBtnMttState) sendMttBtnM.disabled = false;
});
endRebuysM.max = totalLevelsLevelsM.innerHTML;
endRebuysM.addEventListener('input', function () {
    if (isNaN(parseFloat(this.value)) || parseFloat(this.value) < 0) {
        this.value = 1;
    }
});
sendMttBtnM.addEventListener("click", () => {
    title.textContent = nameM.value;
    stack.textContent = formatNum(stackM.value);
    buyIn.textContent = formatNum(buyInM.value);
    checkedRebuys = checkRebuysM.checked;
    checkedAddons = checkAddonsM.checked;
    upEntry.disabled = false;
    const textConfig = {
        both: { buyIn: "| Entrada/recompra/add-on:", endRebuys: endRebuysM.value },
        rebuys: { buyIn: "| Entrada/recompra:", endRebuys: endRebuysM.value },
        addons: { buyIn: "| Entrada/add-on:", endRebuys: "" },
        none: { buyIn: "| Entrada:", endRebuys: "" }
    };
    const key = checkedRebuys && checkedAddons ? 'both'
        : checkedRebuys ? 'rebuys'
            : checkedAddons ? 'addons'
                : 'none';
    buyInText.textContent = textConfig[key].buyIn;
    endRebuys.textContent = textConfig[key].endRebuys;
    endRebuysText.textContent = textConfig[key].endRebuys ? "| Recompras hasta final Nivel " : "";
    rebuys.textContent = checkedRebuys ? (rebuys.textContent === "-" ? 0 : rebuys.textContent) : "-";
    addons.textContent = checkedAddons ? (addons.textContent === "-" ? 0 : addons.textContent) : "-";
    elementsMttM.forEach(el => el.disabled = true);
    checkAddonsM.disabled = true;
    endRebuysM.disabled = true;
    sendMttBtnM.disabled = true;
    resetMttBtnM.disabled = false;
    mtt = true;
    actionBtnsGame();
});
resetMttBtnM.addEventListener("click", () => {
    elementsMttM.forEach(el => el.disabled = false);
    title.textContent = "-";
    entries.textContent = 0;
    rebuys.textContent = "-";
    addons.textContent = "-";
    players.textContent = "0/0";
    stack.textContent = "-";
    buyIn.textContent = "-";
    endRebuys.textContent = "-";
    nameM.value = "";
    stackM.value = "";
    buyInM.value = "";
    endRebuysM.value = "";
    endRebuysDivM.style.display = "none";
    endRebuysM.disabled = false;
    resetMttBtnM.disabled = true;
    sendMttBtnM.disabled = true;
    checkRebuysM.checked = false;
    checkAddonsM.checked = false;
    checkAddonsM.disabled = false;
    stackP.textContent = "Stack inicial: ";
    buyInText.textContent = "| Entrada/recompra/add-on: ";
    euroSymbol.textContent = " €";
    endRebuysText.textContent = "| Recompras hasta final Nivel ";
    mtt = false;
    actionBtnsGame();
});
// PREMIOS
resetLevelBtnM.style.display = "none";
paidPlacesM.addEventListener("input", () => {
    if (Number(paidPlacesM.value) > 9) {
        paidPlacesM.value = 9;
    }

    if (paidPlacesM.value !== "" && Number(paidPlacesM.value) < Number(paidPlacesM.min)) {
        paidPlacesM.value = paidPlacesM.min;
    }

    const paidPlacesValue = Number(paidPlacesM.value);
    const isValid = paidPlacesValue >= Number(paidPlacesM.min) &&
        paidPlacesValue <= 9 &&
        totalPrizeM.value.trim() !== "" &&
        paidPlacesM.value !== "";

    generatePrizesBtnM.disabled = !isValid;
});
paidPlacesM.addEventListener('input', function () {
    if (isNaN(parseFloat(this.value)) || parseFloat(this.value) < 0) {
        this.value = 2;
    }
});
generatePrizesBtnM.addEventListener("click", () => {
    const distribucion = {
        2: [{ place: "1°", percent: 60 }, { place: "2°", percent: 40 }],
        3: [{ place: "1°", percent: 47 }, { place: "2°", percent: 33 }, { place: "3°", percent: 20 }],
        4: [{ place: "1°", percent: 44 }, { place: "2°", percent: 29 }, { place: "3°", percent: 17 }, { place: "4°", percent: 10 }],
        5: [{ place: "1°", percent: 40 }, { place: "2°", percent: 27 }, { place: "3°", percent: 16 }, { place: "4°", percent: 10 }, { place: "5°", percent: 7 }],
        6: [{ place: "1°", percent: 40 }, { place: "2°", percent: 25 }, { place: "3°", percent: 15 }, { place: "4°", percent: 10 }, { place: "5°", percent: 6 }, { place: "6°", percent: 4 }],
        7: [{ place: "1°", percent: 38 }, { place: "2°", percent: 24 }, { place: "3°", percent: 14 }, { place: "4°", percent: 10 }, { place: "5°", percent: 7 }, { place: "6°", percent: 5 }, { place: "7°", percent: 2 }],
        8: [{ place: "1°", percent: 37 }, { place: "2°", percent: 21 }, { place: "3°", percent: 14 }, { place: "4°", percent: 9 }, { place: "5°", percent: 7 }, { place: "6°", percent: 5 }, { place: "7°", percent: 4 }, { place: "8°", percent: 3 }],
        9: [{ place: "1°", percent: 35 }, { place: "2°", percent: 20 }, { place: "3°", percent: 14 }, { place: "4°", percent: 10 }, { place: "5°", percent: 7 }, { place: "6°", percent: 5 }, { place: "7°", percent: 4 }, { place: "8°", percent: 3 }, { place: "9°", percent: 2 }],
    };
    tbodyPrizesM.textContent = "";
    arrayPrizes = [];
    distribucion[Number(paidPlacesM.value)].forEach((item) => {
        const prize = Number(totalPrizeM.value * (item.percent / 100));
        tbodyPrizesM.innerHTML += `
  <tr>
    <td><input type="text" class="inputPrize" value="${item.place}" readonly/></td>
    <td><input type="number" class="inputPrizesPercent" min="1" step="any" value="${item.percent}"/></td>
    <td><input type="number" class="inputPrizesPrize" min="1" step="any" value="${removeDecimals(prize)}"/></td>
  </tr>
`;

        arrayPrizes.push({ place: item.place, percent: item.percent, prize });
    });
    inputPercent = document.querySelectorAll(".inputPrizesPercent");
    inputPrize = document.querySelectorAll(".inputPrizesPrize");
    paidPlacesM.disabled = true;
    generatePrizesBtnM.style.display = "none";
    resetPrizesBtnM.disabled = false;
    prizesDivBtnM.style.display = "block";
    tablePrizesM.style.display = "block";
    changeInputPrizes();
    updateTotalPrizes();
});
sendPrizesBtnM.addEventListener("click", () => {
    pPrizes.innerHTML = arrayPrizes.map(item => {
        let prize = parseFloat(item.prize);
        if (isNaN(prize)) return '';
        const roundedPrize = Math.round(prize * 100) / 100;
        prize = roundedPrize % 1 === 0 ? Math.floor(roundedPrize) : roundedPrize.toFixed(2);
        return `${item.place}: ${prize} €`;
    }).filter(Boolean).join(' | ');
    sendPrizesBtnM.disabled = true;
    pPrizes.style.display = "block";
    pInfoMtt.style.display = "none";
    [...inputPercent, ...inputPrize].forEach(el => el.readOnly = true);
    [upAddon, downAddon, upRebuy, downRebuy, upEntry, downEntry].forEach(btn => btn.disabled = true);
});
resetPrizesBtnM.addEventListener("click", () => {
    paidPlacesM.disabled = false;
    paidPlacesM.value = "";
    tbodyPrizesM.innerHTML = "";
    tablePrizesM.style.display = "none";
    prizesDivBtnM.style.display = "none";
    pPrizes.style.display = "none";
    pInfoMtt.style.display = "block";
    generatePrizesBtnM.style.display = "block";
    if (checkedRebuys) {
        upRebuy.disabled = false;
        downRebuy.disabled = false;
    }
    if (checkedAddons) {
        upAddon.disabled = false;
        downAddon.disabled = false;
    }
    if (Number(entries.textContent) > 1) downEntry.disabled = false;
    upEntry.disabled = false;
});
// NIVELES
updateLevels();
Object.keys(objLevels).forEach((key) => {
    selectLevelsM.innerHTML += `<option value="${normalizeText(objLevels[key].name)}">${capitalize(objLevels[key].name)}</option>`;
});
selectLevelsM.addEventListener("change", () => {
    const selectedLevel = normalizeText(selectLevelsM.value);

    if (selectedLevel === "custom") {
        saveLevelBtnM.style.display = "block";
        deleteLevelBtnM.style.display = "none";
        inputLevelCustomM.style.display = "block";
        tbodyLevelsM.innerHTML = resetLevels();
    } else {
        const nameLevel = objLevels[selectedLevel];

        // --- VALIDACIÓN DE SEGURIDAD ---
        if (!nameLevel || !nameLevel.levels) {
            console.error(`No se encontró el nivel: ${selectedLevel}`);
            return;
        }

        resetLevelBtnM.style.display = "none";
        let newContent = "";

        nameLevel.levels.forEach((level) => {
            const isBreak = level.level === "Descanso";
            const sb = level.sb || 0;
            const bb = level.bb || 0;
            const ante = level.ante || 0;
            const time = level.time || 10;
            const lvlName = level.level || "";
            const html = isBreak
                ? `<td class="break tdLevelsModal">${lvlName}</td>
                   <td class="break tdLevelsModal">${sb}</td>
                   <td class="break tdLevelsModal">${bb}</td>
                   <td class="break tdLevelsModal">${ante}</td>
                   <td><input type="number" class="break tdLevelsModal" min="10" step="1" value="${time}"/></td>`
                : `<td><input type="text" class="tdLevelsModal" value="${lvlName}" readonly/></td>
                   <td><input type="number" class="tdLevelsModal" min="100" step="100" value="${sb}"/></td>
                   <td><input type="number" class="tdLevelsModal" min="100" step="100" value="${bb}"/></td>
                   <td><input type="number" class="tdLevelsModal" min="0" step="100" value="${ante}"/></td>
                   <td><input type="number" class="tdLevelsModal" min="10" step="1" value="${time}"/></td>`;

            newContent += `
                <tr>
                  ${html}
                  <td>
                    <button class="deleteRowLevels"><i class="fa-solid fa-x"></i></button>
                    <button class="addBreakRowLevels"><i class="fa-solid fa-pause"></i></button>
                    <button class="addRowLevels"><i class="fa-solid fa-plus"></i></button>
                  </td>
                </tr>`;
        });

        tbodyLevelsM.innerHTML = newContent;
        saveLevelBtnM.style.display = "none";
        deleteLevelBtnM.style.display = "block";
        deleteLevelBtnM.disabled = false;
        inputLevelCustomM.style.display = "none";
        inputLevelCustomM.value = "";
    }

    updateLevels();
    tbodyLevelsMLength = tbodyLevelsM.querySelectorAll("tr").length;
    endRebuysM.max = totalLevelsLevelsM.textContent || 0;
});
inputLevelCustomM.addEventListener("input", (event) => {
    const value = event.target.value;
    const options = selectLevelsM.querySelectorAll("option");
    saveLevelBtnM.disabled = !value ||
        Array.from(options).some(option => option.value === normalizeText(value));
});
deleteLevelBtnM.addEventListener("click", () => {
    selectLevelsM.remove(selectLevelsM.selectedIndex);
    selectLevelsM.selectedIndex = 0;
    selectLevelsM.dispatchEvent(new Event("change"));
});
saveLevelBtnM.addEventListener("click", () => {
    const name = inputLevelCustomM.value.trim();
    const levels = tbodyLevelsM.querySelectorAll("tr");
    objLevels[name] = { name, levels: [] };
    for (let i = 0; i < levels.length; i++) {
        const row = {};
        for (let j = 0; j < levels[i].cells.length - 1; j++) {
            let cellContent = levels[i].cells[j].textContent.trim();

            if (levels[i].cells[j].textContent !== "Descanso" && j > 0) {
                cellContent = levels[i].cells[j].querySelector("input").value;
            } else if (j === 4 && levels[i].cells[j].textContent === "Descanso") {
                cellContent = levels[i].cells[j].querySelector("input").value;
            }

            const keys = ['level', 'sb', 'bb', 'ante', 'time'];
            row[keys[j]] = j === 3 && cellContent === "Descanso"
                ? cellContent
                : parseInt(cellContent) || cellContent;
        }

        objLevels[name].levels.push(row);
    }
    selectLevelsM.innerHTML += `<option value="${normalizeText(name)}">${capitalize(name)}</option>`;
    selectLevelsM.value = normalizeText(name);
    selectLevelsM.dispatchEvent(new Event("change"));
    updateLevels();
});
tbodyLevelsM.addEventListener("click", (event) => {
    const btnClicked = event.target.closest("button");
    const targetTr = event.target.closest("tr");
    if (!btnClicked || !targetTr) return;
    if (btnClicked.classList.contains("addRowLevels")) {
        let newRow = targetTr.cloneNode(true);
        if (newRow.children[0].textContent === "Descanso") {
            newRow = targetTr.previousElementSibling.cloneNode(true);
        }
        resetLevelBtnM.style.display = "block";
        targetTr.insertAdjacentElement("afterend", newRow);
        updateLevels();
    }
    if (btnClicked.classList.contains("addBreakRowLevels")) {
        btnClicked.disabled = true;
        const newRow = targetTr.cloneNode(true);
        for (let i = 0; i < newRow.cells.length - 2; i++) {
            newRow.cells[i].classList.add("break");
            newRow.cells[i].textContent = "Descanso";
        }

        newRow.cells[4].children[0].classList.add("break");
        newRow.cells[4].children[0].value = 45;
        newRow.cells[5].children[1].style.display = "none";

        targetTr.insertAdjacentElement("afterend", newRow);
        updateLevels();
    }
    if (btnClicked.classList.contains("deleteRowLevels")) {
        targetTr.remove();
        countLevelsRows = tbodyLevelsM.querySelectorAll("tr").length;
        if (countLevelsRows === 1) {
            tbodyLevelsM.innerHTML = resetLevels();
            resetLevelBtnM.style.display = "none";
        }

        const levelTable = tbodyLevelsM.querySelectorAll("tr");
        for (let i = 0; i < levelTable.length - 1; i++) {
            if (levelTable[i].querySelector("td").textContent === "Descanso" &&
                levelTable[i + 1]?.querySelector("td").textContent === "Descanso") {
                levelTable[i + 1].remove();
            }
        }

        updateLevels();
        endRebuysM.max = totalLevelsLevelsM.innerHTML;
        if (Number(endRebuysM.value) > Number(totalLevelsLevelsM.innerHTML)) {
            endRebuysM.value = totalLevelsLevelsM.innerHTML;
        }
    }
    if (tbodyLevelsMLength !== tbodyLevelsM.querySelectorAll("tr").length) {
        optionToCustom();
    }
    endRebuysM.max = totalLevelsLevelsM.innerHTML;
});
sendLevelBtnM.addEventListener("click", () => {
    rowsLevels = Array.from(tbodyLevelsM.querySelectorAll("tr"));
    iArrayLevels = 0;
    arrayLevels = [];
    for (let i = 0; i < rowsLevels.length; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(rowsLevels[i].cells[j].textContent === "Descanso"
                ? rowsLevels[i].cells[j].textContent
                : rowsLevels[i].cells[j].querySelector("input").value);
        }
        arrayLevels.push(row);
    }
    if (arrayLevels[arrayLevels.length - 1][0] === "Descanso") {
        arrayLevels.pop();
        tbodyLevelsM.querySelectorAll("tr")[tbodyLevelsM.querySelectorAll("tr").length - 1].remove();
    }
    upLevel.disabled = arrayLevels.length < 2;
    selectLevelsM.disabled = true;
    inputLevelCustomM.value = "";
    inputLevelCustomM.disabled = true;
    saveLevelBtnM.disabled = true;
    deleteLevelBtnM.disabled = true;
    sendLevelBtnM.disabled = true;
    resetLevelBtnM.style.display = "block";
    actionTableLevels(true);
    getLevel(iArrayLevels);
    levels = true;
    actionBtnsGame();
    calcBetweenBreaksTime();
    if (calcBetweenBreaksTime().length !== 0) {
        showNextBreakTime(iNextBreak);
    }
    // --- Gestión de Niveles y Descansos ---
    const updateBreakDisplay = () => {
        const breaksTime = calcBetweenBreaksTime();
        const hasBreaks = breaksTime.length > 0;

        if (hasBreaks) {
            showNextBreakTime(iNextBreak);
        } else {
            nextBreakP.textContent = "Último nivel:";
            // Acceso seguro al último elemento
            const lastLevel = arrayLevels[arrayLevels.length - 1];
            nextBreak.textContent = lastLevel ? lastLevel[0] : "-";
        }

        arrayActLevel.push(arrayLevels[iArrayLevels][0]);
        totalTimeLevelsM.textContent = updateTotalLevels();

        // Deshabilitar si hay menos de 2 filas
        upLevel.disabled = rowsLevels.length < 2;
    };

    // --- Click en Resetear ---
    resetLevelBtnM.addEventListener("click", () => {
        // UI Reset
        resetLevelBtnM.style.display = "none";
        [selectLevelsM, deleteLevelBtnM, inputLevelCustomM, sendLevelBtnM].forEach(el => el.disabled = false);
        [downLevel, upLevel].forEach(el => el.disabled = true);

        inputLevelCustomM.value = "";
        nextBreakP.textContent = "Descanso en";
        nextBreak.textContent = "-";

        // Reset de variables de estado
        breaks = [];
        arrayLevels = [];
        arrayActLevel = [];
        iArrayLevels = 0;
        iNextBreak = 0;
        tbodyLevelsMLength = 1;
        countLevelsRows = 1;
        levels = false;

        // Reset de Lógica y Tabla
        selectLevelsM.selectedIndex = 0;
        selectLevelsM.dispatchEvent(new Event("change"));

        actionTableLevels(false);
        resetLevelMain();
        actionBtnsGame();
    });

    // --- Validaciones en Tabla (Tbody) ---
    tbodyLevelsM.addEventListener("change", () => {
        optionToCustom();
        updateLevels();
    });

    tbodyLevelsM.addEventListener('focus', (e) => {
        if (e.target.matches('.tdLevelsModal[type="number"]')) {
            e.target.dataset.previousValue = e.target.value;
        }
    }, true);

    tbodyLevelsM.addEventListener('input', (e) => {
        const input = e.target;
        if (input.matches('.tdLevelsModal[type="number"]')) {
            // Si el valor es negativo o vacío, restaurar el anterior
            if (Number(input.value) < 0 || input.value === "") {
                input.value = input.dataset.previousValue || 0;
            }
        }
    });
});
