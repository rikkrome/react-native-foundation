// LOG
//
export function log() {
  if (__DEV__) {
    console.log('🐲', ...arguments);
  }
}

export function dlog() {
  if (__DEV__) {
    console.trace('👺️', ...arguments);
    debugger;
  }
}
