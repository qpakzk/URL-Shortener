# URL Shortener
__The assignment of Smilegate Server Development Camp 2nd interview__

## API

### 1. registerURL
- 입력 url의 id 값을 이용하여 shortening URL을 생성
- method: post
- body: _id, long_url
- url: /shorten
- response: shortening URL

### 2. searchURL
- shortening URL을 입력하면 원래 URL로 리다이렉트
- method: get
- params: encoded_id
- url: /:encoded_id
- response: 원래 URL


## Model

### 1. URL
- _id
  - type: Number
  - index: true
- long_url
  - type: String

### 2. COUNTER
- _id
  - type: String
  - required: true

- seq
  - type: Number
  - default: 0

## MongoDB Setting

```sh
Frodo@Sangwon-Hong-MacBook-Pro:~/Github/URL-Shortener(master⚡)
» mongo
MongoDB shell version v3.4.10
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
Server has startup warnings:
2017-12-03T01:30:51.048+0900 I CONTROL  [initandlisten]
2017-12-03T01:30:51.048+0900 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-12-03T01:30:51.048+0900 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2017-12-03T01:30:51.048+0900 I CONTROL  [initandlisten]
2017-12-03T01:30:51.048+0900 I CONTROL  [initandlisten]
2017-12-03T01:30:51.048+0900 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
> use url_shortener
switched to db url_shortener
> db
url_shortener
> db.counters.insert({ _id: 'url_count', seq: 1 })
WriteResult({ "nInserted" : 1 })
```

## Demo
[![demo](https://j.gifs.com/PZzXgW.gif)](https://youtu.be/I34jnpuGRM0)
