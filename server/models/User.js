const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


/*
A flight object has the following properties:

Flight :
- lastUpdatedAt (string, optional)
- actualLandingTime (string, optional): yyyy-MM-dd'T'HH:mm:ss.SSSZ 
- actualOffBlockTime (string, optional): yyyy-MM-dd'T'HH:mm:ss.SSSZ 
- aircraftRegistration (string, optional)
- aircraftType (AircraftTypeType, optional)
- baggageClaim (BaggageClaimType, optional)
- checkinAllocations (CheckinAllocationsType, optional)
- codeshares (CodesharesType, optional)
- estimatedLandingTime (string, optional): yyyy-MM-dd'T'HH:mm:ss.SSSZ 
- expectedTimeBoarding (string, optional): yyyy-MM-dd'T'HH:mm:ss.SSSZ 
- expectedTimeGateClosing (string, optional): yyyy-MM-dd'T'HH:mm:ss.SSSZ 
- expectedTimeGateOpen (string, optional): yyyy-MM-dd'T'HH:mm:ss.SSSZ 
- expectedTimeOnBelt (string, optional): yyyy-MM-dd'T'HH:mm:ss.SSSZ 
- expectedSecurityFilter (string, optional): expected security filter 
- flightDirection (string, optional) = ['A', 'D']
- flightName (string, optional)
- flightNumber (integer, optional)
- gate (string, optional)
- pier (string, optional)
- id (string, unique, optional)
- isOperationalFlight (boolean, optional)
- mainFlight (string, optional)
- prefixIATA (string, optional)
- prefixICAO (string, optional)
- airlineCode (integer, optional)
- publicEstimatedOffBlockTime (string, optional): yyyy-MM-dd'T'HH:mm:ss.SSSZ 
- publicFlightState (PublicFlightStateType, optional)
- route (RouteType, optional)
- scheduleDateTime (string, optional): yyyy-MM-dd'T'HH:mm:ss.SSSZ 
- scheduleDate (string, optional): yyyy-MM-dd 
- scheduleTime (string, optional): hh:mm:ss 
- serviceType (string, optional): The service type category of the commercial flight. For example: J = Passenger Line, C=Passenger Charter, F = Freight Line and H = Freight Charter etc. 
- terminal (integer, optional)
- transferPositions (TransferPositionsType, optional)
- schemaVersion (string, optional)

 */

const flightSchema = new mongoose.Schema({
  lastUpdatedAt: String,
  actualLandingTime: String,
  actualOffBlockTime: String,
  aircraftRegistration: String,
  aircraftType: Object,
  baggageClaim: Object,
  checkinAllocations: Object,
  codeshares: Object,
  estimatedLandingTime: String,
  expectedTimeBoarding: String,
  expectedTimeGateClosing: String,
  expectedTimeGateOpen: String,
  expectedTimeOnBelt: String,
  expectedSecurityFilter: String,
  flightDirection: {
    type: String,
    enum: ['A', 'D']
  },
  flightName: String,
  flightNumber: Number,
  gate: String,
  pier: String,
  id: String,
  isOperationalFlight: Boolean,
  mainFlight: String,
  prefixIATA: String,
  prefixICAO: String,
  airlineCode: Number,
  publicEstimatedOffBlockTime: String,
  publicFlightState: Object,
  route: Object,
  scheduleDateTime: String,
  scheduleDate: String,
  scheduleTime: String,
  serviceType: String,
  terminal: Number,
  transferPositions: Object,
  schemaVersion: String
});

/*
Schema for the user model:
- username: string, required, unique
- password: string, required
- flights: array of string(flight ids)
 */
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  flights: [String]
});



// Hash the password before saving it to the database
// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (!user.isModified('password')) return next();

//   try {
//     const salt = await bcrypt.genSalt();
//     user.password = await bcrypt.hash(user.password, salt);
//     next();
//   } catch (error) {
//     return next(error);
//   }
// });

// Compare the given password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;

module.exports = User;