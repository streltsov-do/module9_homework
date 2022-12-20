// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. 
// В input можно ввести любое число.

// При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — 
// выводить ниже текст «одно из чисел вне диапазона от 100 до 300»; 
// Если числа попадают в диапазон от 100 до 300 — 
// сделать запрос c помощью fetch по URL https://picsum.photos/200/300, 
// где первое число — ширина картинки, второе — высота.
// Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
// После получения данных вывести ниже картинку на экран. 

const btnNode       = document.querySelector(".btn_add");
const inputWidth    = document.querySelector(".input_width");
const inputHeight   = document.querySelector(".input_height");
const outputNode    = document.querySelector(".div_out");


function fetchImg(w,h){
    console.log("btnNode="      +btnNode);
    console.log("inputWidth="   +inputWidth.value);
    console.log("inputHeight="  +inputHeight.value);
    console.log("outputNode="   +outputNode);
    // console.log("1");

    if (
                (inputWidth.value<100) 
            ||  (inputWidth.value>300) 
            ||  (inputHeight.value<100) 
            ||  (inputHeight.value>300) 
    ) {
        console.log("одно из чисел вне диапазона от 100 до 300");
        alert("одно из чисел вне диапазона от 100 до 300");
    } else {
          // Делаем запрос за данными
        fetch(`https://picsum.photos/${w}/${h}`)
            .then((response) => {
                console.log("response",response);

                const vOut = response.url;
                console.log("response url",vOut);
                
                return vOut;
            })
            .then((data) => {
                console.log("img",data);


                let strOut=``;
                strOut = `
                    <div class="out_div">
                    <img 
                        class="out_img"
                        src="${data}"
                    >
                    </div>
                `
                console.log("strOut",strOut);
                outputNode.innerHTML = strOut;
            })
            .catch(() => { 
                console.log('error') 
            });
    }
}

btnNode.addEventListener('click', async ()=> {
    await fetchImg(inputWidth.value,inputHeight.value);
})