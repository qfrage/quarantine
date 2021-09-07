const pandemicStart = document.getElementById("pandemicStart")
const pandemicEnd = document.getElementById("pandemicEnd")
var counter = 0
var totalArea = 0
var infectedCount = 0

const pandemicStartMap = "01000000X000X011X0X"//u can change the values for test
const pandemicClass = {
    "0":"uninfected",
    "1":"infected",
    "X":"ocean"
}

function createBlock(pandemic) {//create blocks
    return pandemic.split("").map(e => {
        if(e != "X") counter++//count total area without ocean
        const block = document.createElement("div")
        block.className = `block ${pandemicClass[e]}`
        return block
    })
}

function infection(pandemic) {//coloring infected blocks
    return pandemic.split("X").map(e => {
        if(e.indexOf("1")==-1) return e
        return e.split("").map(e => "1").join("")
    }).join("X")
}

pandemicStart.append(...createBlock(pandemicStartMap))//show StartMap
totalArea = counter
pandemicEnd.append(...createBlock(infection(pandemicStartMap)))//show EndMap
//TOTAL:
let total = document.createElement("div")
total.className = "total"
total.innerHTML = `Total: ${totalArea}` 
document.body.append(total)
//================
//Infected:
infectedCount = (infection(pandemicStartMap).match(/1/g) || []).length
let totalInfected = document.createElement("div")
totalInfected.className = "totalInfected"
totalInfected.innerHTML = `Infected: ${infectedCount}` 
document.body.append(totalInfected)
//================
//Percent:
var infectedPercent = infectedCount*100/(totalArea)
let percent = document.createElement("div")
percent.className = "percent"
percent.innerHTML = `Percent: ${infectedPercent}%`
document.body.append(percent)
