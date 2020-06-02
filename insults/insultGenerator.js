exports.generateInsult = function () {
    var words = [["Artless", "Bawdy", "Beslubbering"], ["Base-court", "Bat-fowling", "Beef-witted"], ["Apple-john", "Baggage", "Barnacle"]];
    var vowels = "AEIOU";
    var article = "an";
    var firstAdjective = words[0][Math.floor(Math.random() * words[0].length)];
    var secondAdjective = words[1][Math.floor(Math.random() * words[1].length)];
    var noun = words[2][Math.floor(Math.random() * words[2].length)];
    if (vowels.indexOf(firstAdjective.charAt(0)) == -1) {
        article = "a";
    }
    return "Thou art " +  article + " " + firstAdjective + " " + secondAdjective + " " + noun;
};