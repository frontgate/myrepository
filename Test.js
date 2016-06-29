function receiveData(data) {
console.log("got data from file read stream: %j", data);
}
readStream.on(“data”, receiveData);