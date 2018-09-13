class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
  turn(direction) {
    this.direction = direction
  }
}
var carImage = document.createElement('img')
carImage.setAttribute('src', 'http://cdn.framesynthesis.com/html5/drivingsimulatorgm/2014090110/assets/car.png')
document.body.appendChild(carImage)

var car = new Car(carImage, 10, 'south', [0, 0])

// carImage.classList.add('west')
// carImage.classList.add('south')
