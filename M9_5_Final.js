// Написать код приложения, интерфейс которого состоит из двух input и кнопки. 
// В input можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом 
// — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом 
// — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами 
// — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — 
// сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, 
// где GET-параметр page — это число из первого input, 
// а GET-параметр limit — это введённое число второго input.
// Пример. Если пользователь ввёл 5 и 7, то запрос будет вида 
// https://picsum.photos/v2/list?page=5&limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, 
// то ему должны показываться картинки из последнего успешно выполненного запроса 
// (использовать localStorage).

const btnNode       = document.querySelector(".btn_fetch");
const inputPage     = document.querySelector(".input_page");
const inputLimit    = document.querySelector(".input_limit");
const outputNode    = document.querySelector(".div_out");


function fetchImg(page,limit){
    console.log("btnNode="      +btnNode);
    console.log("inputPage="    +inputPage.value);
    console.log("inputLimit="   +inputLimit.value);
    console.log("outputNode="   +outputNode);
    // console.log("1");

    let goodPage    = (inputPage.value >0) && (inputPage.value <11);
    let goodLimit   = (inputLimit.value>0) && (inputLimit.value<11);

    if (!(goodPage || goodLimit)){
        console.log ("Номер страницы и лимит вне диапазона от 1 до 10");
        alert       ("Номер страницы и лимит вне диапазона от 1 до 10");
    } else if (!goodPage) {
        console.log ("Номер страницы вне диапазона от 1 до 10");
        alert       ("Номер страницы вне диапазона от 1 до 10");
    } else if (!goodLimit) {
        console.log ("Лимит вне диапазона от 1 до 10");
        alert       ("Лимит вне диапазона от 1 до 10");
    } else {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then((response) => {
                console.log("response",response);

                const vUrl = response.url;
                console.log("response url",vUrl);
                
                const vJson = response.json();
                console.log("response json",vJson);
                
                return vJson;
            })
            .then((json) => {
                let strOut=``;

                json.forEach(element => {
                    
                    console.log("element=",element);

                    strOut = strOut + `
                        <div class="div_i">
                            <img 
                                class="img_i" 
                                src="${element.download_url}"
                                >
                            </div>
                            `
                });
                localStorage.setItem('out_div'  , strOut);
                localStorage.setItem('page'     , inputPage.value);
                localStorage.setItem('limit'    , inputLimit.value);
                outputNode.innerHTML = strOut;
            })
            .catch(() => { 
                console.log('error') 
            });
    }
}

btnNode.addEventListener('click', async ()=> {
    await fetchImg(inputPage.value,inputLimit.value);
})