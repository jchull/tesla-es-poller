const TeslaOwnerService = require('./service/owner-service');
const EsService = require('./service/es-service');
const envfile = process.argv[2] || 'config/.env';
require('dotenv')
  .config({ path: envfile });

const ownerService = new TeslaOwnerService(process.env.OWNER_BASE_URL, process.env.TESLA_CLIENT_ID, process.env.TESLA_CLIENT_SECRET);
const esService = new EsService(process.env.ES_ENDPOINT, process.env.ES_INDEX);

esService.postIndexMaybe()

  // TODO: use locally-stored token if-available and unexpired
  .then(() => ownerService.authenticate(process.env.TESLA_AUTH_EMAIL, process.env.TESLA_AUTH_PASSWORD))

  // TODO: store vehicles locally to avoid calling this every time the service starts
  .then(() => ownerService.getVehicles())

  // TODO: handle multiple vehicles
  .then(vehicleList => vehicleList && vehicleList.data && vehicleList.data.response && vehicleList.data.response[0].id_s)
  .then(vehicleId => beginPolling(process.env.POLLING_INTERVAL, vehicleId));


const beginPolling = (pollingInterval, vehicleId) => {
  const handler = getUpdateHandler(vehicleId);
  handler();
  setInterval(handler, pollingInterval);
};

// TODO: watchdog to prevent missing data due to running out of memory or other possible nasties
const getUpdateHandler = vehicleId => {
  return () => {
    return ownerService.getState(vehicleId)
      .then(vehicleData => esService.postState(vehicleData));
  };
};

