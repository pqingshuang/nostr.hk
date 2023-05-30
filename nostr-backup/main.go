package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	url := "https://api.nostr.watch/v1/online"

	// Send a GET request to the specified URL
	response, err := http.Get(url)
	if err != nil {
		fmt.Printf("Error while fetching the URL: %s\n", err)
		return
	}

	defer response.Body.Close()

	// Read the response body
	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		fmt.Printf("Error while reading the response body: %s\n", err)
		return
	}

	// Print the response body
	
	fmt.Println(string(body))
	for i := 0; i < len(body); i++ {
		fmt.Println(string(body[i]))
	}

}
