// Вам дана заготовка и результат, который вы должны получить. 
// Ваша задача — написать код, который будет преобразовывать XML в JS-объект 
// и выводить его в консоль.
const cJSON=
    `{
        "list": [
         {
          "name": "Petr",
          "age": "20",
          "prof": "mechanic"
         },
         {
          "name": "Vova",
          "age": "60",
          "prof": "pilot"
         }
        ]
       }`

function enLog(en,log){
    if (en){
        console.log(log[0],log[1]);
    }
}

const log1=true;
const log2=true;

    enLog(log1,["cJSON=",cJSON]);

const jsonClass = JSON.parse(cJSON);
    enLog(log1,["jsonClass=",jsonClass]);

const jsonList = jsonClass.list;
    enLog(log1,["jsonList=",jsonList]);
    

const result = {
    list : [
        {
            name:   jsonList[0].name,
            age:    jsonList[0].age,
            prof:   jsonList[0].prof,
        },
        {
            name:   jsonList[1].name,
            age:    jsonList[1].age,
            prof:   jsonList[1].prof,
        }
    ]
}

enLog(true,[`result=`, result]);