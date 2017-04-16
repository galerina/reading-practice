/**
 * Created by andrewspencer on 4/15/17.
 */

function Passage(tokens) {
    this.tokens = tokens;
    this.matchedTokensCount = 0;
    this.correctText = "";
    this.inputText = "";
    this.origText = data.map(function(d) { return d.Token; }).join("");

    this.updateInputText = function(inpText) {
        var matchTextHelper = function(text) {
            if (this.matchedTokensCount == tokens.length) {
                return this.correctText;
            }

            var nextToken = tokens[matchedTokensCount];
            if (text.length < this.correctText.length) {
                return this.correctText;
            } else if (text.length == this.correctText.length) {
                // Advance correct text if the next token is not a kanji token
                if (!hasKanji(nextToken.Token)) {
                    this.correctText += tokens[matchedTokensCount].Token;
                    this.matchedTokensCount++;
                    return matchTextHelper(this.correctText);
                }
            } else { // text.length > correctText.length; do we match?
                var textAsHiragana = this.correctText + asHiragana(text.substring(correctText.length));
                var unmatchedText = textAsHiragana.substring(correctText.length);
                var foundMatch = false;
                for (var i = 0; i < nextToken.ReadAs.length; i++) {
                    if (nextToken.ReadAs[i] == unmatchedInputText) {
                        // We matched a token !
                        foundMatch = true;
                        break;
                    }
                }

                if (!foundMatch) {
                    return textAsHiragana;
                }

                // Update correct text, and matched tokens count.
                this.correctText = textAsHiragana;
                this.matchedTokensCount++;
                return matchTextHelper();
            }
        }

        this.inputText = matchTextHelper(inpText);
    };

    this.allMatched = function() {
        return (this.matchedTokensCount == tokens.length);
    };

    this.asHTML = function() {
        if (this.matchedTokensCount == this.tokens.length) {
            srcEl.html('<span style="color: #39ff47">' + this.origText + '</span>');
        } else {
            var correctLen = this.tokens.slice(0, this.matchedTokensCount).map(function (x) {
                return x.Token.length;
            }).reduce(function(acc, val) {
                return acc + val;
            }, 0);
            var nextToken = this.tokens[this.matchedTokensCount];
            srcEl.html('<span style="color: #39ff47">' + this.origText.substring(0, correctLen) + '</span>' +
                '<span style="color: #ff8053">' + this.origText.substring(correctLen, correctLen + nextToken.Token.length) + '</span>' +
                this.origText.substring(correctLen + nextToken.Token.length));
        }
    };

    this.getInputText = function() {
        return this.inputText;
    }
}
