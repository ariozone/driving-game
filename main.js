class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
}
var carImage = document.createElement('img')
carImage.setAttribute('src', 'https://png.pngtree.com/element_pic/00/16/09/1457d88da8f2389.jpg')
document.body.appendChild(carImage)
var car = new Car(carImage, 10, 'north', [0, 0])
carImage.setAttribute('id', 'car')
//carImage.classList.add('west')
