/**
 * Created by andrewspencer on 2/19/17.
 */

var romaji_map = {
    "a" : "あ",
    "i" : "い",
    "u" : "う",
    "e" : "え",
    "o" : "お",
    "la" : "ぁ",
    "xa" : "ぁ",
    "li" : "ぃ",
    "xi" : "ぃ",
    "lyi" : "ぃ",
    "xyi" : "ぃ",
    "lu" : "ぅ",
    "xu" : "ぅ",
    "le" : "ぇ",
    "xe" : "ぇ",
    "lye" : "ぇ",
    "xye" : "ぇ",
    "lo" : "ぉ",
    "xo" : "ぉ",
    "ye" : "いぇ",
    "wha" : "うぁ",
    "whi" : "うぃ",
    "wi" : "うぃ",
    "whe" : "うぇ",
    "we" : "うぇ",
    "who" : "うぉ",
    "ka" : "か",
    "ca" : "か",
    "ki" : "き",
    "ku" : "く",
    "cu" : "く",
    "qu" : "く",
    "ke" : "け",
    "ko" : "こ",
    "co" : "こ",
    "kya" : "きゃ",
    "kyi" : "きぃ",
    "kyu" : "きゅ",
    "kye" : "きぇ",
    "kyo" : "きょ",
    "lka" : "ヵ",
    "xka" : "ヵ",
    "lke" : "ヶ",
    "xke" : "ヶ",
    "qa" : "くぁ",
    "qi" : "くぃ",
    "qe" : "くぇ",
    "qo" : "くぉ",
    "ga" : "が",
    "gi" : "ぎ",
    "gu" : "ぐ",
    "ge" : "げ",
    "go" : "ご",
    "gya" : "ぎゃ",
    "gyi" : "ぎぃ",
    "gyu" : "ぎゅ",
    "gye" : "ぎぇ",
    "gyo" : "ぎょ",
    "gwa" : "ぐぁ",
    "gwi" : "ぐぃ",
    "gwu" : "ぐぅ",
    "gwe" : "ぐぇ",
    "gwo" : "ぐぉ",
    "sa" : "さ",
    "si" : "し",
    "ci" : "し",
    "shi" : "し",
    "su" : "す",
    "se" : "せ",
    "ce" : "せ",
    "so" : "そ",
    "sya" : "しゃ",
    "sha" : "しゃ",
    "syi" : "しぃ",
    "syu" : "しゅ",
    "shu" : "しゅ",
    "sye" : "しぇ",
    "she" : "しぇ",
    "syo" : "しょ",
    "sho" : "しょ",
    "za" : "ざ",
    "zi" : "じ",
    "ji" : "じ",
    "zu" : "ず",
    "ze" : "ぜ",
    "zo" : "ぞ",
    "zya" : "じゃ",
    "ja" : "じゃ",
    "jya" : "じゃ",
    "zyi" : "じぃ",
    "jyi" : "じぃ",
    "zyu" : "じゅ",
    "ju" : "じゅ",
    "jyu" : "じゅ",
    "zye" : "じぇ",
    "je" : "じぇ",
    "jye" : "じぇ",
    "zyo" : "じょ",
    "jo" : "じょ",
    "jyo" : "じょ",
    "ta" : "た",
    "ti" : "ち",
    "chi" : "ち",
    "tu" : "つ",
    "tsu" : "つ",
    "te" : "て",
    "to" : "と",
    "tya" : "ちゃ",
    "cha" : "ちゃ",
    "cya" : "ちゃ",
    "tyi" : "ちぃ",
    "cyi" : "ちぃ",
    "tyu" : "ちゅ",
    "chu" : "ちゅ",
    "cyu" : "ちゅ",
    "tye" : "ちぇ",
    "che" : "ちぇ",
    "cye" : "ちぇ",
    "tyo" : "ちょ",
    "cho" : "ちょ",
    "cyo" : "ちょ",
    "ltu" : "っ",
    "xtu" : "っ",
    "ltsu" : "っ",
    "tsa" : "つぁ",
    "tsi" : "つぃ",
    "tse" : "つぇ",
    "tso" : "つぉ",
    "tha" : "てゃ",
    "thi" : "てぃ",
    "thu" : "てゅ",
    "the" : "てぇ",
    "tho" : "てょ",
    "twa" : "とぁ",
    "twi" : "とぃ",
    "twu" : "とぅ",
    "twe" : "とぇ",
    "two" : "とぉ",
    "da" : "だ",
    "di" : "ぢ",
    "du" : "づ",
    "de" : "で",
    "do" : "ど",
    "dya" : "ぢゃ",
    "dyi" : "ぢぃ",
    "dyu" : "ぢゅ",
    "dye" : "ぢぇ",
    "dyo" : "ぢょ",
    "dha" : "でゃ",
    "dhi" : "でぃ",
    "dhu" : "でゅ",
    "dhe" : "でぇ",
    "dho" : "でょ",
    "dwa" : "どぁ",
    "dwi" : "どぃ",
    "dwu" : "どぅ",
    "dwe" : "どぇ",
    "dwo" : "どぉ",
    "na" : "な",
    "ni" : "に",
    "nu" : "ぬ",
    "ne" : "ね",
    "no" : "の",
    "nya" : "にゃ",
    "nyi" : "にぃ",
    "nyu" : "にゅ",
    "nye" : "にぇ",
    "nyo" : "にょ",
    "ha" : "は",
    "hi" : "ひ",
    "hu" : "ふ",
    "fu" : "ふ",
    "he" : "へ",
    "ho" : "ほ",
    "hya" : "ひゃ",
    "hyi" : "ひぃ",
    "hyu" : "ひゅ",
    "hye" : "ひぇ",
    "hyo" : "ひょ",
    "fya" : "ふゃ",
    "fyu" : "ふゅ",
    "fyo" : "ふょ",
    "fa" : "ふぁ",
    "fi" : "ふぃ",
    "fe" : "ふぇ",
    "fo" : "ふぉ",
    "ba" : "ば",
    "bi" : "び",
    "bu" : "ぶ",
    "be" : "べ",
    "bo" : "ぼ",
    "bya" : "びゃ",
    "byi" : "びぃ",
    "byu" : "びゅ",
    "bye" : "びぇ",
    "byo" : "びょ",
    "va" : "ゔぁ",
    "vi" : "ゔぃ",
    "vu" : "ゔ",
    "ve" : "ゔぇ",
    "vo" : "ゔぉ",
    "vya" : "ゔゃ",
    "vyi" : "ゔぃ",
    "vyu" : "ゔゅ",
    "vye" : "ゔぇ",
    "vyo" : "ゔょ",
    "pa" : "ぱ",
    "pi" : "ぴ",
    "pu" : "ぷ",
    "pe" : "ぺ",
    "po" : "ぽ",
    "pya" : "ぴゃ",
    "pyi" : "ぴぃ",
    "pyu" : "ぴゅ",
    "pye" : "ぴぇ",
    "pyo" : "ぴょ",
    "ma" : "ま",
    "mi" : "み",
    "mu" : "む",
    "me" : "め",
    "mo" : "も",
    "mya" : "みゃ",
    "myi" : "みぃ",
    "myu" : "みゅ",
    "mye" : "みぇ",
    "myo" : "みょ",
    "ya" : "や",
    "yu" : "ゆ",
    "yo" : "よ",
    "lya" : "ゃ",
    "xya" : "ゃ",
    "lyu" : "ゅ",
    "xyu" : "ゅ",
    "lyo" : "ょ",
    "xyo" : "ょ",
    "ra" : "ら",
    "ri" : "り",
    "ru" : "る",
    "re" : "れ",
    "ro" : "ろ",
    "rya" : "りゃ",
    "ryi" : "りぃ",
    "ryu" : "りゅ",
    "rye" : "りぇ",
    "ryo" : "りょ",
    "wa" : "わ",
    "wo" : "を",
    "nn" : "ん",
    "xn" : "ん",
    "lwa" : "ゎ",
    "xwa" : "ゎ"
};

var consonants = new Set([
    "q",
    "w",
    "r",
    "t",
    "y",
    "p",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m"
]);

var tsu_exceptions = new Set([
    "w",
    "n",
]);

var n_exceptions = new Set([
    "y",
    "n",
]);

function addToStates(states, s, i) {
    if (i == s.length - 1) {
        states[s[i]] = romaji_map[s];
        return states;
    } else {
        states[s[i]] = addToStates(states[s[i]] || {}, s, i + 1);
    }

    return states;
}

function buildAutomata(map) {
    var states = {};

    var romaji_strings = Object.keys(map).sort();

    for (var i = 0; i < romaji_strings.length; i++) {
        states = addToStates(states, romaji_strings[i], 0);
    }

    return states;
}

var romaji_automata = buildAutomata(romaji_map);

function isString(s) {
    return (typeof s === 'string' || s instanceof String);
}

function asHiragana(s) {
    var newStr = "";
    for (var i = 0; i < s.length;) {
        if (i + 1 < s.length && consonants.has(s[i])) {
            if (s[i + 1] == s[i] && !tsu_exceptions.has(s[i])) {
                newStr += "っ";
                i++;
                continue;
            }

            if (s[i] == "n" && consonants.has(s[i + 1]) && !n_exceptions.has(s[i + 1])) {
                newStr += "ん";
                i++;
                continue;
            }
        }

        var state = romaji_automata;
        var replacement = s[i];
        for (var j = i; j < s.length; j++) {
            if (s[j] in state) {
                if (isString(state[s[j]])) {
                    replacement = state[s[j]];
                    i = j;
                    break;
                } else {
                    state = state[s[j]];
                }
            } else {
                break;
            }
        }

        newStr += replacement;
        i++;
    }

    return newStr;
}
