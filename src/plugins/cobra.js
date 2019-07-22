export default class Cobra {
  constructor (args) {
    this.canvas = args.canvas
    this.ctx = this.canvas.getContext('2d')
    this.numberOfFrames = args.numberOfFrames
    this.path = args.path
    this.canvas.width = args.canvas.width ? args.canvas.width : 1920
    this.canvas.height = args.canvas.height ? args.canvas.height : 1080
    this.loop = args.loop ? args.loop : false
  }

  // function that create sprites
  sprite ({ numberOfFrames, canvas, path, loop }) {
  	let that = {},
        frameIndex = 1,
    		tickCount = 0,
    		ticksPerFrame = 2,
        timeStamp = '?_' + new Date().getTime()

    // update active frame of the sprite
  	that.update = function() {
      tickCount += 1
      if (tickCount > ticksPerFrame) {
        // Clear the canvas
  			tickCount = 0

        // If the current frame index is in range
        if (frameIndex <= numberOfFrames) {
          // Go to the next frame
          frameIndex += 1

          // if is the last frame cancel animation and run callbacks
          if (frameIndex > numberOfFrames) {
            if (loop) {
              frameIndex = 0
            }
          }
        }
      }
    }

    // function that renders current frame in canvas
  	that.render = function() {
      var frame, img = new Image()
      if (frameIndex == 0) {
        frame = numberOfFrames
        frameIndex = 1
      } else {
        frame = frameIndex
      }
      if (frame <= numberOfFrames) {
        img.onload = function() {
          canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
          canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
        }
        img.src = `${path + frame}.png`
      }
  	}

    return that
  }

  // function that start animations in canvas
  animate () {
    let requestID

    const grid = new this.sprite({
      numberOfFrames: this.numberOfFrames,
      canvas: this.canvas,
      path: this.path,
      loop: this.loop
    })

    function draw() {
      requestID = requestAnimationFrame(draw)
      grid.update()
      grid.render()
    }
    requestID = requestAnimationFrame(draw)
  }
}
