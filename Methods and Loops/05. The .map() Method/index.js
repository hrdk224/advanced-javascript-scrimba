distanceWlakedInMilesArr = [140, 150, 161, 173, 190, 20, 1]
conversionFactorMilestoKm = 1.6
function milesToKm() {
    return distanceWlakedInMilesArr.map(function (distanceMiles, index) {
        return `Month ${index}: ${distanceMiles * conversionFactorMilestoKm} KM`
    })
}

console.log(milesToKm())
