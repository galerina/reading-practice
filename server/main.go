package main

import (
	"encoding/gob"
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"reading-practice/reading"
	"strconv"
	"strings"
)

var (
	filename = flag.String("file", "../tokens.gob", "Token gob file")
)

func main() {
	flag.Parse()
	f, err := os.Open(*filename)
	if err != nil {
		panic(err)
	}

	var b reading.Blocks
	decoder := gob.NewDecoder(f)
	err = decoder.Decode(&b)
	if err != nil {
		log.Printf("error decoding blocks object: %v", err)
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/get-token/", func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%v\n", r.RequestURI)
		urlParts := strings.Split(r.RequestURI, "/")
		if len(urlParts) != 3 {
			log.Printf("url is more than just '/get-token/<number>': %v", len(urlParts))
			http.NotFound(w, r)
			return
		}

		n, err := strconv.Atoi(urlParts[2])
		if err != nil {
			log.Printf("error atoi: %v\n", err)
			http.NotFound(w, r)
			return
		}

		if n >= len(b.Readings) {
			log.Printf("%v is larger than length of readings (%v)\n", n, len(b.Readings))
			http.NotFound(w, r)
			return
		}

		j, err := json.Marshal(b.Readings[n])
		if err != nil {
			log.Printf("error json.Marshall: %v\n", err)
			http.NotFound(w, r)
			return
		}

		w.Header().Set("Access-Control-Allow-Origin", "*")
		fmt.Fprintf(w, "%v", string(j))
	})

	log.Fatal(http.ListenAndServe(":8080", mux))
}
