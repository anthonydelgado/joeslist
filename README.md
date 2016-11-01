# joeslist

A craigslist API written in NodeJS

![Alt text](https://raw.githubusercontent.com/anthonydelgado/joeslist/master/screenshot.png)


### API Endpoints

List of latest for sale items in New York City. 

```
https://dreadful-crypt-32491.herokuapp.com/api/list
```
Example response:
```
{
category: "",
date: "2016-11-01 00:11",
hasPic: true,
location: "Harlem / Morningside",
pid: "5838654087",
price: "$160",
title: "Vintage Italy crushed velvet bedspread with cherubs roses Full Double",
url: "https://newyork.craigslist.org/mnh/clt/5838654087.html"
}
```
Search for items in New York City
```
https://dreadful-crypt-32491.herokuapp.com/api/search/macbook/
```
Example response:
```
{
category: "",
date: "2016-10-29 12:47",
hasPic: true,
location: "BROOKLYN / EAST FLATBUSH",
pid: "5848667341",
price: "$375",
title: "APPLE MacBook Pro 15.4"A1260 NEW 250 GB SSD EL Captain OFFICE 2016",
url: "https://newyork.craigslist.org/brk/sys/5848667341.html"
}
```