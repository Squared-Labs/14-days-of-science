async function wrapFact() {
    let fact = [
        await fetchTypes("facts_s1")
    ]
    return fact[Math.floor(Math.random() * fact.length)];
}

async function main() {
    let fact = await wrapFact();
    console.log(fact.text)
    document.getElementById("fact").innerText = fact.text;
};

main();