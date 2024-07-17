import sensors from "./src/sensors";
export { setUpdateInterval as setUpdateIntervalForType, setLogLevelForType } from "./src/rnsensors";

export const SensorTypes = {
  accelerometer: "accelerometer",
  gyroscope: "gyroscope",
  magnetometer: "magnetometer",
  barometer: "barometer",
  orientation: "orientation",
  gravity: "gravity",
  luminance: "luminance",
  //FAHAD
};

export const { accelerometer, gyroscope, magnetometer, barometer, orientation, gravity, luminance } = sensors;
export default sensors;
