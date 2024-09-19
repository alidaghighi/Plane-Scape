const express = require('express');
const { authenticate } = require('../middlewares/auth');

/*
The user should be able to make a reservation. It is sufficient to select a flight and save it to a MongoDB database via an API you will write with Node.js.
A notification such as “Your flight has been saved” can be used to inform the user,
and the user can be directed to the My Flights page where the flight details saved to the backend are listed. For past-dated flights,
a check can be provided, stating “You cannot make a reservation for this date.”

*/


const router = express.Router();

router.post('/reservation', authenticate, async (req, res) => {
    // need to pass the username and a flight object
    // if the flight is not in the FLight table will need to add it
    // check if the flight is in the past
    // the flight id will append to the user's flight array after the check
    // in case of any error return the error code
    try {
        const { flight } = req.body;
        const user = req.user;
        // Check if the flight is in the past
        const flightDate = new Date(flight.scheduleDateTime);
        const currentDate = new Date();
        if (flightDate < currentDate) {
            return res.status(400).json({ message: 'You cannot make a reservation for this date' });
        }
        // Check if the flight is already in the database
        const existingFlight = await Flight.findOne({ id: flight.id });
        if (!existingFlight) {
            await Flight.create(flight);
        }
        user.flights.push(flight.id);
        await user.save();
        return res.status(200).json({ message: 'Your flight has been saved' });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
});

router.get('/flights', authenticate, async (req, res) => {
    // get the user's flights from the user's flight array
    // return the flights
    try {
        const user = req.user;
        const flights = await Flight.find({ id: { $in: user.flights } });
        return res.status(200).json(flights);
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
});

router.delete('/flights/:id', authenticate, async (req, res) => {
    // get the flight id from the request
    // remove the flight id from the user's flight array
    // return the updated user object
    try {
        const { id } = req.params;
        const user = req.user;
        user.flights = user.flights.filter(flightId => flightId !== id);
        await user.save();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
});


module.exports = router;