export function log() {
  if (__DEV__) {
    console.log("🚩", ...arguments);
  }
}
