class Platform {
  constructor () {
    this.os = 'web'
  }
  set os (os) {
    this._os = os
  }
  get os () { return this._os }
}

export default new Platform()
