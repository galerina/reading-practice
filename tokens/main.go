package main

import (
	"fmt"

	"github.com/ikawaha/kagome/tokenizer"

	"bufio"
	"encoding/gob"
	"encoding/json"
	"log"
	"os"
	"reading-practice/reading"
)

const filename = "./noruwei.txt"

func main() {
	t := tokenizer.New()
	file, err := os.Open(filename)
	if err != nil {
		log.Fatalf("Failed to open %v\n", err)
	}
	defer file.Close()

	const (
		tokensPerBlock = 200
	)

	blocks := [][]reading.Reading{}
	scanner := bufio.NewScanner(file)
	var blockTokens []tokenizer.Token
	for scanner.Scan() {
		text := scanner.Text()
		tokens := t.Tokenize(text)

		for {
			if len(tokens)+len(blockTokens) >= tokensPerBlock {
				diff := tokensPerBlock - len(blockTokens)
				blockTokens = append(blockTokens, tokens[:diff]...)
				blocks = append(blocks, reading.GetReadings(blockTokens))
				blockTokens = blockTokens[:0]
				tokens = tokens[diff:]
				if len(blocks) % 100 == 0 {
					fmt.Printf("Processed %v blocks\n", len(blocks))
				}
			} else {
				blockTokens = append(blockTokens, tokens...)
				break
			}
		}
	}

	fmt.Printf("Total blocks: %v\n", len(blocks))

	j, err := json.Marshal(blocks)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Writing json file\n")
	f, err := os.Create("tokens.json")
	if err != nil {
		panic(err)
	}
	defer f.Close()

	_, err = f.Write(j)
	if err != nil {
		panic(err)
	}

	fmt.Printf("writing gob file\n")
	f, err = os.Create("tokens.gob")
	if err != nil {
		panic(err)
	}
	defer f.Close()
	encoder := gob.NewEncoder(f)
	err = encoder.Encode(reading.Blocks{blocks})
	if err != nil {
		panic(err)
	}
}
