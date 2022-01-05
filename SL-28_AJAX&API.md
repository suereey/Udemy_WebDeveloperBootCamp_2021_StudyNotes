# AJAX and API's

## Intro to AJAX
- ASYNCHRONOUS
- JAVASCRIPT
- AND
- XML
Recently XML not used. Instead AJAJ (J stand for JSON). JSON is widely used.

## Intro to APIs
Application programming interace

Example: https://www.cryptonator.com/api/
## Intro to JSON
Java Script Object Notation ([JSON](https://www.json.org/json-en.html))

- [JSON validator](https://jsonformatter.curiousconcept.com/)

- JSON can parse data and turn the string data into an object so that could be saved as a variable. Other direction: JSON.stringify

```
const parseData = JSON.parse(data)
```

## Postman APP and  Query Strings & Headers
https://www.postman.com/downloads/

- [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## Making XHR's (not important)

## The Fetch API (new method, important!)
The newer way of making requests via JS Supports promises!

Not supported in Internet Explorer :( 

```
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price)
    } catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e)
    }
}
```

## Intro to Axios
[Axios is a library for making HTTP requests](https://github.com/axios/axios)

```
const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("ERROR!", e)
    }
}
```

Axios: add headers
```
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
}
```