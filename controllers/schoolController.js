const School = require('../models/school');

const getListOfSchools = async (req,res) => {
    try {
        //Fetch all the school records
        const schools = await School.findAll();

        return res.status(200).json({
            success: true,
            data: schools,
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