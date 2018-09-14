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
}
var carImage = document.createElement('img')
carImage.setAttribute('src', 'http://cdn.framesynthesis.com/html5/drivingsimulatorgm/2014090110/assets/car.png')
document.body.appendChild(carImage)

var car = new Car(carImage, 10, 'south', [0, 0])
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

// carImage.classList.add('west')
// carImage.classList.add('south')
