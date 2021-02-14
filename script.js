'use strict'

const btn = document.querySelector('.btn'),
    year = document.getElementById('year'),
    motor = document.getElementById('motor'),
    fuel = document.getElementById('fuel'),
    finalPayment = document.querySelector('.pricing');

btn.addEventListener('click', () => {
    // event.preventDefault();

let motorBit = motor.value;

if(motorBit<=2000){
    motorBit=0.25;
}else if(motorBit<=2001||motorBit<=3000){
    motorBit=0.2;
}else if(motorBit<=3001||motorBit<=4000){
    motorBit=0.25;
}else if(motorBit<=4001||motorBit<=5000){
    motorBit=0.35;
}else if(motorBit>=5001){
    motorBit=0.5;
};
    
   let taxType = year.value;

    if (taxType <= 2006 ) {
        taxType = 150; 
    }else if(taxType<=2007){
        taxType = 125;  
    }else if(taxType<=2008){
        taxType = 100;  
    }else if(taxType<=2009){
        taxType = 75;  
    }else if(taxType<=2010){
        taxType = 50;  
    }else if(taxType<=2011){
        taxType = 25;  
    }else if(taxType){
        taxType = 0;  
    };

    let fuelType = fuel.value;

    if(fuelType=="disel"){
        fuelType=100
    }else{
        fuelType=0
    };
    let taxPdv = (taxType+(motorBit*motor.value))*0.2
    let output=taxType+(motorBit*motor.value)+fuelType+taxPdv+250;

    
    finalPayment.innerHTML+=`<h4>Всі митні платежі - ${output} евро  </h4>
    <div class="tax_info">
    <p>Пдв ${taxPdv}€<br>
    Ставка за об'єм двигуна ${motorBit*motor.value}€<br>
    Ставка за тип палива ${fuelType}€<br>
    Ставка за вік ${taxType}€<br>
    Добровільний внесок 250€ </p>
    </div>
    <p>Для біль детальної інформації телефонуйте <br>
    Втупайте у наш телеграмм канал
    <a href="https://t.me/joinchat/TZewEta5-E-4FqQ0">telegram<img src="telegram.png" height="20" width="20"></a>
<br>
    093-971-22-27<br>093-772-13-82<br>063-864-62-62</p>`;
    finalPayment.style.display = "block"

    


})