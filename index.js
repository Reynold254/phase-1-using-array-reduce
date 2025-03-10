const batteryBatches = [0, 31];

const totalBatteries = batteryBatches.reduce(
  (total, batch) => total + batch,
  0
);

module.exports = { totalBatteries };
