async function wrapFact() {
    let fact = [
        await fetchTypes("facts_s1")
    ]
    return fact[Math.floor(Math.random() * fact.length)];
}

async function determineStyle(fact) {
    if (fact.text.includes("19") || fact.text.includes("old") || fact.text.includes("past") || fact.text.includes("former")) {
        document.getElementById("style").setAttribute("href", "/danny/day1/style-beigeblack.css")
    } if (fact.text.includes("ocean") || fact.text.includes("water") || fact.text.includes("sea")) {
        document.getElementById("style").setAttribute("href", "/danny/day1/style-bluebeige.css")
    } if (fact.text.includes("dark") || fact.text.includes("black") || fact.text.includes("death") || fact.text.includes("blood") || fact.text.includes("gray") || fact.text.includes("grey")) {
        document.getElementById("style").setAttribute("href", "/danny/day1/style-blackred.css")
    } if (fact.text.includes("nature") || fact.text.includes("leaves") || fact.text.includes("weed") || fact.text.includes("leaf") || fact.text.includes("spring") || fact.text.includes("summer") || fact.text.includes("winter") || fact.text.includes("autumn") || fact.text.includes("fall")) {
        
    }
}

async function main() {
    let fact = await wrapFact();
    determineStyle(fact);
    console.log(fact.text);
    document.getElementById("fact").innerText = fact.text;
};

main();