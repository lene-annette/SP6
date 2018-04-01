
class JokesStore {
    constructor(jokes) {
        this._jokes = jokes;
    }

    addJoke(joke) {
        this._jokes.push(joke);
    }

    getRandomJoke() {
        return this._jokes[Math.floor(Math.random() * this._jokes.length)];
    }

    getJokes() {
        return this._jokes;
    }
}

let startJokes = [
    "I totally understand how batteries feel because I’m rarely ever included in things either",
    "I used to think the brain was the most important organ. Then I thought, what’s telling me that",
    "You kill vegetarian vampires with a steak to the heart",
]

export default new JokesStore(startJokes);