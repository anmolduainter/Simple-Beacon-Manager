const request = require('request')

//Registering the beacon
let register=(details)=>{
    return new Promise((resolve)=>{
        let projectId = details.projectId;
    let token = details.token;
    let adtype = details.adtype;
    let adid = details.adid;
    let status = details.status;
    let placeId = details.placeId;
    let lat = details.lat;
    let lon = details.lon;
    let name = details.name;
    let expectedStab = details.eS;
    let desc = details.desc;
    let prop = details.prop;
    var options = { method: 'POST',
        url: 'https://proximitybeacon.googleapis.com/v1beta1/beacons:register',
        qs: { projectId: projectId },
        headers: { authorization: 'Bearer '+token},
        body:{
            "advertisedId": {
                "type": adtype,
                "id": adid
            },
            "status": status,
            "placeId": placeId,
            "latLng": {
                "latitude": lat,
                "longitude": lon
            },
            "indoorLevel": {
                "name": name
            },
            "expectedStability": expectedStab,
            "description": desc,
            "properties":prop
        },
        json: true
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        resolve(body)
    })
})};

// activate the beacon
let activate = (details)=>{
    return new Promise((resolve)=>{let beaconName = details.beaconName;
    let projectId = details.projectId;
    let token = details.token;
    let options = { method: 'POST',
        url: 'https://proximitybeacon.googleapis.com/v1beta1/'+beaconName+':activate',
        qs: { projectId: projectId },
        headers: { authorization: 'Bearer '+token } };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        resolve(body);
    });
})}

//list beacons
let listBeacons = (details)=>{
    return new Promise((resolve)=>{let q = details.q;
    let pT = details.pT;
    let pS = details.pS;
    let pI = details.pI;
    let token = details.token;
    let options = { method: 'GET',
        url: 'https://proximitybeacon.googleapis.com/v1beta1/beacons',
        qs:
            {   q:q,
                pageToken:pT,
                pageSize:pS,
                projectId:pI},
        headers: { authorization: 'Bearer '+token}};
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        resolve(body)
    });
})};

//getting info of one beacon
let getinfoPerBeacon = (details)=>{
    return new Promise((resolve)=>{let beaconName = details.beaconName;
    let pI = details.projectId;
    let token = details.token;
    let options = { method: 'GET',
        url: 'https://proximitybeacon.googleapis.com/v1beta1/'+beaconName,
        qs: { projectId:pI},
        headers: { authorization:'Bearer '+token} };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        resolve(body)
    });
})}

// Setting Attachment data to a beacon
let setAttachment = (details)=>{
    return new Promise((resolve)=>{
            let BeaconName = details.beaconName;
    let pI = details.projectId;
    let token = details.token;
    let data = details.data;
    let nT = details.nT;
    let options = { method: 'POST',
        url: 'https://proximitybeacon.googleapis.com/v1beta1/'+BeaconName+'/attachments',
        qs: { projectId: pI },
        headers: { authorization: 'Bearer '+token },
        body:
            {   data:data,
                namespacedType:nT},
        json: true };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        resolve(body)
    });
})
}

//getting Attachment for the beacon
let getAttachmentDetails = (details)=>{
    return new Promise((resolve)=>{ let beaconName = details.beaconName;
    let pI = details.pI;
    let nT = details.nT;
    let token = details.token;
    let options = { method: 'GET',
        url: 'https://proximitybeacon.googleapis.com/v1beta1/'+beaconName+'/attachments',
        qs:
            { namespacedType: nT,
                projectId: pI },
        headers: { authorization: 'Bearer '+token } };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        resolve(body);
    });
})}

//deactivate beacon
let deactivateBeacon = (details)=>{
    return new Promise((resolve)=>{let beaconName = details.beaconName;
    let pI = details.pI;
    let token = details.token;
    let options = { method: 'POST',
        url: 'https://proximitybeacon.googleapis.com/v1beta1/'+beaconName+':deactivate',
        qs: { projectId: pI },
        headers: { authorization: 'Bearer '+token}};
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        resolve(body);
    });
})}

// decommission the beacon
let decommission = (details)=>{
    return new Promise((resolve)=>{let beaconName = details.beaconName;
    let pI = details.pI;
    let token = details.token;
    let options = { method: 'POST',
        url: 'https://proximitybeacon.googleapis.com/v1beta1/'+beaconName+':decommission',
        qs: { projectId:pI },
        headers: { authorization: 'Bearer '+token}};
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        resolve(body);
    });
})}

//Delete Attachment
let deleteAttachment = (details)=>{
    return new Promise((resolve)=>{ let attachName = details.attachName;
    let pI = details.pI;
    let token = details.token;
    var options = { method: 'DELETE',
        url: 'https://proximitybeacon.googleapis.com/v1beta1/'+attachName,
        qs: { projectId:pI },
        headers: { authorization: 'Bearer '+token } };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        resolve(body);
    });
})}

// Updates the info of specific beacon
let UpdateInfo = (details)=>{
    return new Promise((resolve)=>{let beaconName = beaconName;
    let projectId = details.projectId;
    let token = details.token;
    let adtype = details.adtype;
    let adid = details.adid;
    let status = details.status;
    let placeId = details.placeId;
    let lat = details.lat;
    let lon = details.lon;
    let name = details.name;
    let expectedStab = details.eS;
    let desc = details.desc;
    let prop = details.prop;
    var options = { method: 'PUT',
        url: 'https://proximitybeacon.googleapis.com/v1beta1/'+beaconName,
        qs: { projectId: projectId },
        headers: { authorization: 'Bearer '+token},
        body:{
            "advertisedId": {
                "type": adtype,
                "id": adid
            },
            "status": status,
            "placeId": placeId,
            "latLng": {
                "latitude": lat,
                "longitude": lon
            },
            "indoorLevel": {
                "name": name
            },
            "expectedStability": expectedStab,
            "description": desc,
            "properties":prop
        },
        json: true
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body)
        return body;
    })
})}

//Lists all attachment namespaces owned by your Google Developers Console project.
let NamespacesList = (details)=>{
    return new Promise((resolve)=>{let pI = details.pI;
    let tokens = details.token;
    let options = { method: 'GET',
        url: 'https://proximitybeacon.googleapis.com/v1beta1/namespaces',
        qs: { projectId: pI },
        headers: { authorization: 'Bearer '+tokens} };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        resolve(body);
    });
})}

//Diagnostics
let dia = (details)=>{
    return new Promise((resolve)=>{
            var options = { method: 'GET',
                url: 'https://proximitybeacon.googleapis.com/v1beta1/'+details.beaconName+'/diagnostics',
                qs:
                    { pageSize: details.pageSize,
                        pageToken: details.pageToken,
//                    alertFilter: details.alertFilter,
                    projectId: details.projectId },
                headers: { authorization: 'Bearer '+details.token} };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        resolve(body)
    });
})
}

module.exports.register = register
module.exports.activate = activate
module.exports.listBeacons = listBeacons
module.exports.getinfoPerBeacon = getinfoPerBeacon
module.exports.setAttachment = setAttachment
module.exports.deactivateBeacon = deactivateBeacon
module.exports.decommission = decommission
module.exports.deleteAttachment = deleteAttachment
module.exports.UpdateInfo = UpdateInfo;
module.exports.getAttachmentDetails = getAttachmentDetails
module.exports.NamespacesList = NamespacesList
module.exports.dia = dia
