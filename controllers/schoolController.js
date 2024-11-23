const School = require('../models/school');
const calculateDistance = require('../utils/calculateDistance');

const getListOfSchools = async (req,res) => {
    try {

        const { latitude, longitude } = req.query;
        
        if(!latitude || !longitude)
            return res.status(400).json({ error: "Latitude and Longitude are required" });
        
        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);
        
        if(isNaN(userLat) || isNaN(userLon))
            return res.status(400).json({ error: "Invalid latitude or longitude" });
        //Fetch all the school records
        const schools = await School.findAll();

        const sortedSchools = schools
            .map((school) => {
                const distance = calculateDistance(
                    userLat,
                    userLon,
                    school.latitude,
                    school.longitude
                );
                return { ...school.toJSON(), distance };
            }).sort((a, b) => a.distance - b.distance);

        return res.status(200).json({
            success: true,
            data: sortedSchools,
        });
    } catch(error) {
        console.error('Error fetching schools: ', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch the schools. Please try again later.',
        });
    }
}

const addSchool = async (req,res) => {
   try{
        const { name, address, latitude, longitude } = req.body;

        await School.create({ name, address, latitude, longitude });

        return res.status(201).json({ message: 'School added successfully!' });
   } catch(error) {
        // Handling validation errors
        if (error.name === 'SequelizeValidationError') {
            const errorMessages = error.errors.map(e => e.message); 
            return res.status(400).json({ errors: errorMessages });
        }
        return res.status(500).json({ error: 'Internal server error', error: error});
   }
};


module.exports = { getListOfSchools, addSchool };