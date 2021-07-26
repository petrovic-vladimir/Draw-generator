// Errors
exports.errors = {
    rankError:"Ranking mora biti broj veći od 0",
    fieldNumberError:"Morate uneti broj za odgovarajuce polje",
    underLimitNumber: "Uneli ste manje od dozvoljenog",
    overLimitNumber: "Uneli ste vise od dozvoljenog",
    fillAllFields   : "Niste popunili sva polja",
    rankingPositions: "Teniseri ne mogu deliti isti ranking"

}

// readlineSync questions
exports.questions = {
    inputNumber :  "Unesite broj tenisera (min 4 - max 64):",
    inputType   :  "Tip unosa: (json/manual) [json]:",
    inputPlayers:  "Unesite tenisera u obliku [ime],[prezime],[drzava],[ranking]:"
}

exports.textColors = {
    FgBlack  : "\x1b[30m",
    FgRed    : "\x1b[31m",
    FgGreen  : "\x1b[32m",
    FgYellow : "\x1b[33m",
    FgBlue   : "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan   : "\x1b[36m",
    FgWhite  : "\x1b[37m",
}


