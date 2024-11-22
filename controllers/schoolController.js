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

module.exports = { getListOfSchools };