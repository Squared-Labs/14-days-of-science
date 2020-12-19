async function wrapFact() {
    let fact = await getElement(await fetchTypes("fact"));
    if (fact.category !== "science") {
        wrapFact();
    }
    return fact;
}

async function main() {
    let fact = await wrapFact();
    console.log(fact.fact)
    document.getElementById("fact").innerText = fact.fact
};

main();