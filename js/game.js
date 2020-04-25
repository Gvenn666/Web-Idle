var moneyCount = 10;

const sofaInitPrice = 5;
var numOfSofas = 100;
var sofaPrice = sofaInitPrice;
var sofaRate = 1;

const investInitPrice = 50;
var numOfInvestors = 0;
var investPrice = investInitPrice;
var investRate = 0.005;

const lemonInitPrice = 500;
var numOfLemons = 0;
var lemonPrice = lemonInitPrice;
var lemonRate = 20;

const updateRate = 0.016;

setInterval(updateCounters,16);
function init() {
    document.getElementById('sofaUpgrade02').disabled = true;
    document.getElementById('investUpgrade01').disabled = true;
    document.getElementById('investUpgrade02').disabled = true;
    document.getElementById('lemonUpgrade01').disabled = true;
}

function addMoney() {
    moneyCount++;
}

function updateCounters() {
    document.getElementById('money').innerHTML = (moneyCount).toFixed(2);
    document.getElementById('sofaPrice').innerHTML = sofaPrice.toFixed(2);
    document.getElementById('sofaCount').innerHTML = numOfSofas + " +£"+(sofaRate*numOfSofas).toFixed(2)+"/s";
    document.getElementById('sofaRate').innerHTML = sofaRate;
    
    document.getElementById('investPrice').innerHTML = investPrice;
    document.getElementById('investCount').innerHTML = numOfInvestors + " +£"+(((investRate / 100) * moneyCount) * numOfInvestors).toFixed(2)+"/s ("+(investRate * numOfInvestors).toFixed(3)+"%)";
    document.getElementById('investRate').innerHTML = investRate;

    document.getElementById('lemonPrice').innerHTML = lemonPrice;
    document.getElementById('lemonCount').innerHTML = numOfLemons + " +£"+(lemonRate * numOfLemons).toFixed(2)+"/s";
    document.getElementById('lemonRate').innerHTML = lemonRate;

    var deltaMoney = 0;
    deltaMoney += sofaRate * numOfSofas;
    deltaMoney += (((investRate / 100) * moneyCount) * numOfInvestors);
    deltaMoney += lemonRate * numOfLemons;

    document.getElementById("pps").innerHTML = "£"+(deltaMoney).toFixed(2);
    moneyCount += deltaMoney * updateRate;
}

function buySofa() {
    if(moneyCount > sofaPrice) {
        moneyCount -= sofaPrice;
        sofaPrice = (sofaPrice * 1.05);
        numOfSofas++;
    }
}

function resetSofas() {
    numOfSofas = 0;
    sofaPrice = sofaInitPrice;
}

function resetLemonades() {
    numOfLemons = 0;
    lemonPrice = lemonInitPrice;
}

function resetInvestors() {
    numOfInvestors = 0;
    investPrice = investInitPrice;
}

function buyInvestor() {
    if(moneyCount > investPrice) {
        moneyCount -= investPrice;
        investPrice = Math.floor(investPrice * 1.5);
        numOfInvestors++;
    }
}

function buyLemonade() {
    if(moneyCount > lemonPrice) {
        moneyCount -= lemonPrice;
        lemonPrice = Math.floor(lemonPrice * 1.10);
        numOfLemons++;
    }
}
var nextUpgrade = 0;
function upgrade(item) {
    switch(item) {
        case 0: //New Upholstery (£100)
            if(moneyCount > 100 && nextUpgrade == 0) {
                nextUpgrade++;
                moneyCount -= 100;
                sofaRate *= 2;
                document.getElementById('sofaUpgrade01State').innerHTML = " (PURCHASED)"
                document.getElementById('sofaUpgrade01').disabled = true;
                document.getElementById('sofaUpgrade02State').innerHTML = ""
                document.getElementById('sofaUpgrade02').disabled = false;
            }
        break;

        case 1: //More Change (£1000)
            if(moneyCount > 1000 && nextUpgrade == 1) {
                nextUpgrade++;
                moneyCount -= 1000;
                sofaRate *= 4;
                document.getElementById('sofaUpgrade02State').innerHTML = " (PURCHASED)"
                document.getElementById('sofaUpgrade02').disabled = true;
                document.getElementById('investUpgrade01State').innerHTML = ""
                document.getElementById('investUpgrade01').disabled = false;
            }
        break;

        case 2: //Investing 101 (£10000)
        if(moneyCount > 10000 && nextUpgrade == 2) {
            nextUpgrade++;
            moneyCount -= 10000;
            investRate += 0.05;
            document.getElementById('investUpgrade01State').innerHTML = " (PURCHASED)"
            document.getElementById('investUpgrade01').disabled = true;
            document.getElementById('investUpgrade02State').innerHTML = ""
            document.getElementById('investUpgrade02').disabled = false;
        }
        break;

        case 3: //Faster Stock Exchanges (£20000)
        if(moneyCount > 20000 && nextUpgrade == 3) {
            nextUpgrade++;
            moneyCount -= 20000;
            investRate += 0.1;
            document.getElementById('investUpgrade02State').innerHTML = " (PURCHASED)"
            document.getElementById('investUpgrade02').disabled = true;
            document.getElementById('lemonUpgrade01').disabled = false;
        }
        break;

        case 4: //Better Lemons (£25000)
        if(moneyCount > 25000 && nextUpgrade == 4) {
            nextUpgrade++;
            moneyCount -= 20000;
            lemonRate *= 1.20;
            document.getElementById('lemonUpgrade01State').innerHTML = " (PURCHASED)"
            document.getElementById('lemonUpgrade01').disabled = true;
        }
        break;

    }
}

