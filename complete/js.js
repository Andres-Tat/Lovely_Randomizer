'use strict'

// let a

// function myFunction() {
//     function myFunction2() {
//         a = 3
//     }
//     myFunction2()
// }
// myFunction()

// console.log(a)  


// let a
// let b

// function myFn() {
//     let b
//     a = true
//     b = 5
//     console.log(b)
// }

// myFn()

// console.log(a)
// console.log(b)


// function myFn(a = "Andrey", b = "date, when i born") {  // параметры нашей функции
//     console.log(a + b)    // выводим результат наших параметров
// }

// myFn("my Birthday ", "1995.15.05")        // Здесь мы прописали аргументы для параметров нашей функции







function ask(question, yes, no) {
    if (confirm(question)) {                  // создали функции с параметрами, записали условия, которые должны будут выполняться
        yes() 
    }else no()
}

function showOk() {
    alert('У тебя все получится, не сдавайся никогда')    //создали дополнительные функции, которые подставим в наши параметры
}

function showCancel() {
    alert('Нет движения - нет результата')                 //создали дополнительные функции, которые подставим в наши параметры
}

ask("Ты хочешь изменить свою судьбу?", showOk, showCancel)       //выводим результат нашей функции, заменив наши параметры аргументами(другими функциями)

                                                               //Теперь для параметра "question" выполняется аргумент "Ты хочешь изменить свою судьбу?", для параметра "yes" выполняется функция "showOk", для параметра "no" выполняется функция "showCancel"





 function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    }else no()
 }

 ask("Ты хочешь изменить свою судьбу?", function() {alert ('У тебя все получится, не сдавайся никогда')}, function() {alert ('Нет движения - нет результата')})

 // Сокращенный вариант. Использовали Function Expression. В верхнем варианте использовался Function Declaration. Отличия в том, одного от другого в том, что в первом случае мы создавали отдельно функции и давали им имена, что может выглядеть не совсем красиво и занимает время. В отличие от второго варианта,где мы подставили вместо аргумента подставили сразу функции для наших параметров, тем самым сократив наш код и сделав его чуть красивее)