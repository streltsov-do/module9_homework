// Вам дана заготовка и результат, который вы должны получить. 
// Ваша задача — написать код, который будет преобразовывать XML в JS-объект 
// и выводить его в консоль.
const cXML=
    `<list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>`

function enLog(en,log){
    if (en){
        console.log(log[0],log[1]);
    }
}

const log1=true;
const log2=true;


const parser= new DOMParser();
    enLog(log1,["parser=",parser]);

const xmlClass = parser.parseFromString(cXML, "text/xml");
    enLog(log1,["xmlClass=",xmlClass]);

const xmlList = xmlClass.querySelector('list');
    enLog(log1,["xmlList=",xmlList]);

const xmlStudent = xmlList.getElementsByTagName('student');
    enLog(log1,["xmlStudent=",xmlStudent]);

let studentName=[];
let studentLang=[];
let studentFirstName=[];
let studentSecondName=[];
let studentAge=[];
let studentProf=[];

for (let i=0; i<xmlStudent.length; i++){
    
    studentName[i]=xmlStudent[i].querySelector('name');
        enLog(log2,[`studentName[${i}]=`,studentName[i]]);

    studentLang[i]=studentName[i].getAttribute('lang');
        enLog(log2,[`studentLang[${i}]=`,studentLang[i]]);
        
    studentFirstName[i]=studentName[i].querySelector('first');
        enLog(log2,[`studentFirstName[${i}]=`,studentFirstName[i].textContent]);
        
    studentSecondName[i]=studentName[i].querySelector('second');
        enLog(log2,[`studentSecondName[${i}]=`,studentSecondName[i].textContent]);

    studentAge[i]=xmlStudent[i].querySelector('age');
        enLog(log2,[`studentAge[${i}]=`,studentAge[i].textContent]);

    studentProf[i]=xmlStudent[i].querySelector('prof');
        enLog(log2,[`studentProf[${i}]=`,studentProf[i].textContent]);
}

const result = {
    list : [
        {
            name:   studentFirstName[0].textContent+" "+studentSecondName[0].textContent,
            age:    studentAge[0].textContent,
            prof:   studentProf[0].textContent,
            lang:   studentLang[0],
        },
        {
            name:   studentFirstName[1].textContent+" "+studentSecondName[1].textContent,
            age:    studentAge[1].textContent,
            prof:   studentProf[1].textContent,
            lang:   studentLang[1],
        }
    ]
}

enLog(true,[`result=`, result]);