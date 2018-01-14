# Simple-Beacon-Manager
#### It is a npm package which helps you to manage your beacons

## Installation
#### This library requires the npm package request
###### npm install request
#### After that install simple-beacon-manager package
###### npm install simple-beacon-manager

## Usage

- Register the beacon
- Activate the beacon
- Deactivate the beacon
- Decommissioned the beacon
- getting info of one beacon
- getting the list of beacon
- setting attachment to the beacon
- delete attachment to the beacon
- getting attachment list of the beacon
- Update the info of beacon
- getting Diagnostics of beacon

###### For more details visit:-[link to Proximity Google Api](https://developers.google.com/beacons/proximity/guides)

## Register the beacon
```
let beacon = require('simple-beacon-manager')

let det = {
    projectId:'Your Project Id',
    token:'Your access token',
    adtype:'Advertised type',
    adid:'Avertised Id',
    status:'Status',
    placeId:'placeId',
    lat:'Latitude',
    lon:'Longitude',
    name:'Name',
    eS:'ExpectedStability',
    desc:'description',
    prop:'Properties'
}

beacon.register(det).then(res=>{
    console.log(res)
    // Do your code here
})
```

## Activate the Beacon

```
let beacon = require('simple-beacon-manager')

let det = {
    projectId:'Your Project Id',
    token:'Your access token',
    beaconName:'Your beacon name'
}

beacon.activate(det).then(res=>{
    console.log(res)
    // Do your code here
})
```

## List of Beacons that user has Registered

```
let beacon = require('simple-beacon-manager')


let det = {
    q:'Filter query string',
    pT:'pageToken',
    pS:'page Size',
    pI:'Project Id',
    token:'Access token'
}

beacon.listBeacons(det).then(res=>{
    console.log(res)
    // Do your code here
})
```

## Getting all info of one beacon
```
let beacon = require('simple-beacon-manager')

let det = {
    projectId:'Your Project Id',
    token:'Your access token',
    beaconName:'Your beacon name'
}

beacon.getinfoPerBeacon(det).then(res=>{
    console.log(res)
    // Do your code here
})
```

## Setting Attachment data to a beacon
```
let beacon = require('simple-beacon-manager')

let det = {
    projectId:'Your Project Id',
    token:'Your access token',
    beaconName:'Your beacon name',
    data: 'data in base64 encoded',
    nT: 'namespaceType'
}

beacon.setAttachment(det).then(res=>{
    console.log(res)
    // Do your code here
})
```

## Getting Attachment details of a beacon

```
let beacon = require('simple-beacon-manager')

let det = {
    pI:'Your Project Id',
    token:'Your access token',
    beaconName:'Your beacon name',
    nT: 'namespaceType'
}

beacon.getAttachmentDetails(det).then(res=>{
    console.log(res)
    // Do your code here
})
```

## Deactivate Beacon
```
let beacon = require('simple-beacon-manager')

let det = {
    pI:'Your Project Id',
    token:'Your access token',
    beaconName:'Your beacon name',
}

beacon.deactivateBeacon(det).then(res=>{
    console.log(res)
    // Do your code here
})
```

## Decommission Beacon

```
let beacon = require('simple-beacon-manager')

let det = {
    pI:'Your Project Id',
    token:'Your access token',
    beaconName:'Your beacon name',
}

beacon.decommission(det).then(res=>{
    console.log(res)
    // Do your code here
})
```

## Delete one Attachment of a beacon

```
let beacon = require('simple-beacon-manager')

let det = {
    pI:'Your Project Id',
    token:'Your access token',
    attachName:'beacon's attachment name',
}

beacon.deleteAttachment(det).then(res=>{
    console.log(res)
    // Do your code here
})
```
## Diagnostics

```
let beacon = require('simple-beacon-manager')

let det = {
    projectId:'projectId',
    pageToken:'pageToken'
    pageSize:'PageSize',
    token:'Your access token',
    beaconName:'Your beacon name',
}

beacon.dia(det).then(res=>{
    console.log(res)
    // Do your code here
})
```

## Lists all attachment namespaces
```
let beacon = require('simple-beacon-manager')

let det = {
    pI:'projectId',
    token:'Your access token',
}

beacon.NamespacesList(det).then(res=>{
    console.log(res)
    // Do your code here
})
```

### How to take the access-token

1. First authenticate the user with the google account
2. take the access token from google oAuth authentication procedure
