class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
  turn(direction) {
    this.direction = direction
    switch (this.direction) {
      case 'north':
        this.$img.classList.add('north')
        this.$img.classList.remove('east', 'west', 'south')
        break
      case 'east':
        this.$img.classList.add('east')
        this.$img.classList.remove('west', 'south', 'north')
        break
      case 'south':
        this.$img.classList.add('south')
        this.$img.classList.remove('east', 'west', 'north')
        break
      case 'west':
        this.$img.classList.add('west')
        this.$img.classList.remove('east', 'north', 'south')
    }
  }
  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        break
      case 'south':
        this.location[1] += this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      case 'west':
        this.location[0] -= this.speed
        break
    }
    this.$img.setAttribute('style', 'top:' + this.location[1] + 'px; left:' + this.location[0] + 'px;')
  }
  start() {
    var drive = car.move.bind(car)
    setInterval(drive, 16)
  }
}
var carImage = document.createElement('img')
carImage.setAttribute('src', 'http://cdn.framesynthesis.com/html5/drivingsimulatorgm/2014090110/assets/car.png')
document.body.appendChild(carImage)

var car = new Car(carImage, 10, 'north', [580, 700])

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp') {
    car.turn('north')
  }
  if (e.key === 'ArrowRight') {
    car.turn('east')
  }
  if (e.key === 'ArrowDown') {
    car.turn('south')
  }
  if (e.key === 'ArrowLeft') {
    car.turn('west')
  }
})
document.addEventListener('keydown', function(e) {
  if (e.key !== ' ') return
  car.start()
})
