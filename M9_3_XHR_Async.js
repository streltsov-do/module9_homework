// Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
// В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст 
// «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR 
// по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
// Пример. Если пользователь ввёл 5, то запрос будет вида
// : https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.

const btnNode = document.querySelector(".btn_add");
const inputNode = document.querySelector(".input_num");
const outputNode = document.querySelector(".div_out");


function getXHR(num,callback){
    console.log("btnNode="+btnNode);
    console.log("inputNode="+inputNode.value);
    console.log("outputNode="+outputNode);
    // console.log("1");

    const xhr= new XMLHttpRequest();
    // console.log("2");


    if ((num>0) && (num<11)) {
        xhr.open("GET", `https://picsum.photos/v2/list?limit=${num}`, true);
        console.log("3");

        xhr.onload = () => {
            if (xhr.status != 200) {
                console.log("Error, status=",xhr.status);
                console.log("4");
            } else {
                console.log("4");
                const result = JSON.parse(xhr.response);

                console.log("result",result);
                getImages(result);
            }
        }

        xhr.send();
    } else {
        alert(`Количество картинок должно быть от 0 до 10!`);
    }
}

function getImages(data) {
    let stringOut='';

    data.forEach(element => {
        const out_string = `
            <div class="out_div_i">
                <img
                    class="out_img_i"
                    src="${element.download_url}"        
                >
            </div>
        `
        stringOut = stringOut + out_string;
    });

    console.log("stringOut",stringOut);
    outputNode.innerHTML = stringOut;
}

btnNode.addEventListener('click', ()=> {
    getXHR(inputNode.value,getImages);
})