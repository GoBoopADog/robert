![Logo](https://cdn.discordapp.com/emojis/843908573578002512.gif) Ro🅱ert

the most shitty generic node js http package

# What is robert?

![robert](https://cdn.discordapp.com/attachments/861222626915647489/866269177110855690/file.png)

its description should pro🅱a🅱ly 🅱e something like the 🅱est unopinionated easy to use minimal node js http framework

ok docs time

NOTE: ~~fuck typings i gave up on that shit it made me angry~~

NOTE #2: i have reconsidered my previous anger and it is now in typescript

# Usage

```js
const robert = require("robert");
```

Make a simple GET request

```js
robert
    .get('https://api.zeppelin.gg/')
    .send()
    .json();

// Returns
{
    data: { status: 'cookies', with: 'milk' },
    statusCode: 200,
    statusMessage: 'OK',
    headers: { ... }
};
```

Send a Discord Message

```js
robert
    .post('https://discord.com/api/v9/channels/{CHANNEL}/messages')
    .json({ content: 'robert best http client' })
    .header('Authorization', 'Bot {TOKEN}')
    .send()
    .json();

// Returns
{
    data: { content: 'robert best http client', ... },
    statusCode: 200,
    statusMessage: 'OK',
    headers: { ... }
};
```

Execute a Discord webhook using a client

```js
const client = new robert.Client({ base: 'https://discord.com/api/v9', headers: {} /* Optional */ })

client
    .post('/webhooks/{WEBHOOK_ID}/{WEBHOOK_TOKEN}')
    .query('wait', true)
    .json({ embeds: [{ description: 'this is from a robert client with base ' + client.base }] })
    .send()
    .json()

// Returns
{
    data: { embeds: [{ description: 'this is from a robert client with base https://discord.com/api/v9' }], ... },
    statusCode: 200,
    statusMessage: 'OK',
    headers: { ... }
};
```

# Documentation

Client (`Default`)

```js
// NOTE: All options are optional, by default robert is equal to new robert.Client()
const client = new robert.Client({
    base: 'A base URL for all requests',
    port: 443 /* HTTPS default is 443 */,
    headers: { Some: 'default headers' }
})

client.setPort(port) // Set the default port
client.header(key, value) // Set a default header
client.setHeaders({ key: value }) // Sets default headers

// All HTTPS methods (Returns request)
client.get(url)
client.post(url)
...etc
```

Request

```js
const request = robert.get("https://api.zeppelin.gg/");

request.query(key, value); // Add a new query to the URL's parameters
request.setQuery({ key: value }); // Set the URL's query parameters
request.header(key, value); // Set a header
request.setHeaders({ key: value }); // Sets all headers
request.buffer(buffer); // Set a buffer for the request body
request.text(text); // Set text for the request body
request.json({ key: value }); // Set a json for the request body
request.form({ key: value }); // Set a multipart form data for the request body
request.send(); // Send the request, returns Response
```

Response

```js
const response = robert.get("https://api.zeppelin.gg/").send();

// All return a promise
// NOTE: ... = { statusCode: Number, statusMessage: String, headers: Object }

response.stream(); // { data: ReadableStream, ... }
response.buffer(); // { data: Buffer, ...  }
response.bufferArray(); // { data: Array<Buffer>, ...  }
response.arrayBuffer(); // { data: arrayBuffer, ...  }
response.blob(); // { data: Blob, ...  }
response.text(); // { data: String, ... }
response.json(); // { data: Object, ... }
```
