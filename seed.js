module.exports = {
	"undefined": "http://localhost:3000",
	"dev": "http://localhost:3000",
	"prod": "http://localhost:3000"
}

// mongoimport --uri "mongodb://root:9hMv7N1kEmLOFYWH@atlas-host1:27017,atlas-host2:27017,atlas-host3:27017/cabinetsdatabase?ssl=true&replicaSet=myAtlasRS&authSource=admin" --collection users --drop --file users.json

//mongoimport doesn't work - the command runs and runs with no data imports
