class Statistics {
    constructor() {
        this.gameResults = [];
    }

    addGameToStatistic(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        this.gameResults.push(gameResult)
    }

    showGameStatistics() {
        let games = this.gameResults.length;
        //try to change below in the future
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        return [games, wins, losses];
    }
}