input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= lista_de_texto.length - 1; index++) {
        basic.showString("" + (lista_de_texto[index]))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(lista_de_texto.length)
})
let lista_de_texto: string[] = []
lista_de_texto = [
"pa",
"patates",
"vi",
"mongetes",
"oli"
]
basic.forever(function () {
	
})
