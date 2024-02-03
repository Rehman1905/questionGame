const start=document.querySelector('#start')
const exit=document.querySelector('#exit')
start.onclick=function(){
    document.querySelector('#section1').style.display='none'
    document.querySelector('#section2').style.display='block'
}
exit.onclick=function(){
    window.close()
}

const suallar=[
    {
        sual:'What do you call people who are 18+?',
        cavablar:[
            {
                cavab:'Baby',
                doqruluq: false
            },
            {
                cavab:'Adult',
                doqruluq: true
            },
            {
                cavab:'Person',
                doqruluq: false
            },
        ]
    },
    {
        sual:'What color is the tree?',
        cavablar:[
            {
                cavab:'Red',
                doqruluq: false
            },
            {
                cavab:'Brown',
                doqruluq: false
            },
            {
                cavab:'Green',
                doqruluq: true
            },
        ]
    },
    {
        sual:'What do you call people who has a wife?',
        cavablar:[
            {
                cavab:'Wife',
                doqruluq: false
            },
            {
                cavab:'Husband',
                doqruluq: false
            },
            {
                cavab:'Married',
                doqruluq: true
            },
        ]
    },
    {
        sual:'Which is the most us level in English?',
        cavablar:[
            {
                cavab:'B1',
                doqruluq: false
            },
            {
                cavab:'C2',
                doqruluq: true
            },
            {
                cavab:'A2',
                doqruluq: false
            },
        ]
    },
    {
        sual:'What color is the sky?',
        cavablar:[
            {
                cavab:'Blue',
                doqruluq: true
            },
            {
                cavab:'Yellow',
                doqruluq: false
            },
            {
                cavab:'Green',
                doqruluq: false
            },
        ]
    }
]
function progressBariDeyish(){
    const faiz=100*(index/suallar.length)
    document.querySelector('#bar2').style.width=faiz+'%'
}


let index=0
let doqru=0
function sualiGoster(){
    const sual=suallar[index]
    document.querySelector("#question").innerHTML=sual.sual
    for(let i=0;i<sual.cavablar.length;i++){
        document.querySelector('.variant'+(i+1)).style.backgroundColor = '#343a40'
        const btn=document.querySelector('.answer'+(i+1))
        btn.innerHTML=sual.cavablar[i].cavab
        btn.onclick=function(){
            if(sual.cavablar[i].doqruluq){
            document.querySelector('.variant'+(i+1)).style.backgroundColor = 'green' 
            doqru++
            console.log(doqru)
            }else{
            document.querySelector('.variant'+(i+1)).style.backgroundColor = 'red'
            }
            setTimeout(next,1000)
            setTimeout(progressBariDeyish,1000)
        }
    }
    
}

function next(){
    index++
    const number=document.querySelector('.questionNumber')
    number.innerHTML=`Question ${index+1}`
    if(index>suallar.length-1){
        number.innerHTML=`Question 1`
        index=0
        document.querySelector('.variant1').style.backgroundColor = '#343a40'
        document.querySelector('.variant2').style.backgroundColor = '#343a40'
        document.querySelector('.variant3').style.backgroundColor = '#343a40'
        document.querySelector('#section1').style.display='block'
        document.querySelector('#section2').style.display='none'
        const result=document.querySelector('#h1')
        result.innerHTML=`Total point : ${(doqru*100)/suallar.length}%`
    }else{
        sualiGoster()
    }
}
sualiGoster()