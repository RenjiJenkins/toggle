function noled () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function white () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
input.onButtonPressed(Button.A, function () {
    if (toggle == 0) {
        white()
        basic.pause(1000)
        toggle = 1
    } else {
        noled()
        basic.pause(1000)
        toggle = 0
    }
})
let toggle = 0
toggle = 0
basic.forever(function () {
	
})
