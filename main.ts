let temp: string;
while (true) {
    temp = "" + input.temperature()
}
if (input.temperature() >= 30) {
    basic.showString("Alta")
    basic.showString(temp)
} else {
    basic.showString("baja ")
    basic.showString(temp)
}

