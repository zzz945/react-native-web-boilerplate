export function * startup (action) {
  if (process.env.NODE_ENV === 'development' && console.tron) {
    // straight-up string logging
    console.tron.log('Hello, I\'m an example of how to log via Reactotron.')
  }
}
