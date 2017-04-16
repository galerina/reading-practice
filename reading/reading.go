package reading

import (
	"strings"
	"github.com/ikawaha/kagome/tokenizer"
)

type Blocks struct {
	Readings [][]Reading
}

type Reading struct {
	Token  string
	ReadAs []string
}

func toHiragana(s string) string {
	return strings.Map(func(r rune) rune { return r + ('あ' - 'ア') }, s)
}

func isKatakana(s string) bool {
	for _, r := range s {
		if r < 'ァ' || r > 'ヺ' {
			return false
		}
	}

	return true
}

func hasKanji(s string) bool {
	for _, r := range s {
		if r >= '一' && r <= '龯' {
			return true
		}
	}

	return false
}

func contains(ss []string, elem string) bool {
	for _, s := range ss {
		if s == elem {
			return true
		}
	}

	return false
}

func GetReadings(tokens []tokenizer.Token) []Reading {
	var rs []Reading
	var textParts []string
	for _, token := range tokens {
		if token.Class == tokenizer.DUMMY {
			// BOS: Begin Of Sentence, EOS: End Of Sentence.
			continue
		}

		if hasKanji(token.Surface) {
			if len(textParts) > 0 {
				s := strings.Join(textParts, "")
				rs = append(rs, Reading{s, []string{s}})
				textParts = textParts[:0]
			}

			r := Reading{token.Surface, []string{}}
			for i := len(token.Features()) - 1; i >= 0; i-- {
				feature := token.Features()[i]
				if !isKatakana(feature) {
					continue
				}

				hiraganaStr := toHiragana(feature)
				if !contains(r.ReadAs, hiraganaStr) {
					r.ReadAs = append(r.ReadAs, hiraganaStr)
				}
			}

			rs = append(rs, r)
		} else {
			textParts = append(textParts, token.Surface)
		}
	}

	if len(textParts) > 0 {
		s := strings.Join(textParts, "")
		rs = append(rs, Reading{s, []string{s}})
	}

	return rs
}
