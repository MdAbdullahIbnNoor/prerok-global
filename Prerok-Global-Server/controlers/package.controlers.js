const Country = require('../models/country.model');

const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const earthRadius = 6371; // Earth's radius in kilometers
    // Convert latitude and longitude from degrees to radians
    const lat1Rad = (lat1 * Math.PI) / 180;
    const lon1Rad = (lon1 * Math.PI) / 180;
    const lat2Rad = (lat2 * Math.PI) / 180;
    const lon2Rad = (lon2 * Math.PI) / 180;
    // Calculate the differences between latitudes and longitudes
    const deltaLat = lat2Rad - lat1Rad;
    const deltaLon = lon2Rad - lon1Rad;
    // Haversine formula
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) *
        Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c; // Distance in kilometers
    return Number(distance.toFixed(2));
}

const calculateDeliveryCost = (height, width, weight, distance, deliveryType) => {
    let deliveryCharge = 0;
    // Calculate base delivery charge
    if (distance === 0) {
        deliveryCharge = 15;
    } else {
        deliveryCharge = distance * 0.1;
    }

    // Calculate cost based on weight
    let cost = deliveryCharge;
    if (weight > 50) {
        const extraWeight = weight - 50;
        cost += Math.ceil(extraWeight / 20) * 5;
    }

    const size = height * width;
    if (size > 500) {
        const extraSize = size - 500;
        cost += Math.ceil(extraSize / 100) * 5;
    }

    if (deliveryType === 'Faster') {
        cost += 25;
    }

    return cost;
}

exports.calculateCost = async (req, res) => {
    try {
        const { height, width, weight, fromCountry, toCountry, deliveryType } = req.body;

        const country1Info = await Country.findOne({ name: fromCountry });
        const country2Info = await Country.findOne({ name: toCountry });

        if (!country1Info || !country2Info) {
            return res.status(404).send({ message: "Country not found" })
        }

        const totalDistance = calculateDistance(
            country1Info.coordinates.lat,
            country1Info.coordinates.lon,
            country2Info.coordinates.lat,
            country2Info.coordinates.lon
        )


        const cost = calculateDeliveryCost(height, width, weight, totalDistance, deliveryType);
        res.status(200).send({ cost });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal server error' });
    }
};
