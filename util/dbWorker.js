async function fetchTypes(type) {
    const typeList = {
        facts_s1: "https://uselessfacts.jsph.pl/random.json?language=en",
        covid: null
    }

    if (typeList.hasOwnProperty(type)) { 
        return (await fetch(typeList[type])).json()
    } else {
        throw new RangeError("DB type not found")
    }
}

async function getElement(data) {
    if (typeof data !== "object") throw new TypeError("JSON was not provided!");
    return data[Math.floor(Math.random() * data.length)];
}