let dayInput = document.querySelector('.day-i')
let monthInput = document.querySelector('.month-i')
let yearInput = document.querySelector('.year-i')
let btn = document.querySelector('.btn')
let error1 = document.querySelector('.error-1')
let error2 = document.querySelector('.error-2')
let error3 = document.querySelector('.error-3')
let label1 = document.querySelector('.label-1')
let label2 = document.querySelector('.label-2')
let label3 = document.querySelector('.label-3')
let output1 = document.getElementById('year-o')
let output2 = document.getElementById('month-o')
let output3 = document.getElementById('day-o')



btn.addEventListener('click',()=>{

    // Error handling
    let check1 = 0 , check2 = 0 , check3 = 0;

    let x=0,y=0,z=0;

    if(dayInput.value === null || dayInput.value === '' ){
        dayInput.classList.add('onError');
        error1.innerHTML = 'This Field is required';
        label1.style.color = 'hsl(0, 100%, 67%)';
    }
    else{
        dayInput.classList.remove('onError');
        error1.innerHTML = '';
        label1.style.color = 'hsl(0, 1%, 44%)';
        x=1;
    }
    if(monthInput.value === null || monthInput.value === '' ){
        monthInput.classList.add('onError');
        error2.innerHTML = 'This Field is required';
        label2.style.color = 'hsl(0, 100%, 67%)';
    }
    else{
        monthInput.classList.remove('onError');
        error2.innerHTML = '';
        label2.style.color = 'hsl(0, 1%, 44%)';
        y=1;
    }
    if(yearInput.value === null || yearInput.value === '' ){
        yearInput.classList.add('onError');
        error3.innerHTML = 'This Field is required';
        label3.style.color = 'hsl(0, 100%, 67%)';
    }
    else{
        yearInput.classList.remove('onError');
        error3.innerHTML = '';
        label3.style.color = 'hsl(0, 1%, 44%)';
        z=1;
    }
    let flag =  x + y + z;
    if(flag === 3 ){
        monthInput.value[0] === '0' ?   monthInput.value = monthInput.value[1] : monthInput.value;
        dayInput.value[0] === '0' ?   dayInput.value = dayInput.value[1] : dayInput.value;
        let givenDate = monthInput.value+"/"+dayInput.value+"/"+yearInput.value
        let inputDate = new Date(givenDate)
        let day = inputDate.getDate()
        let month = inputDate.getMonth()
        let year = inputDate.getFullYear()
        let correctDate = month+1 +'/'+ day+'/'+year
        let todayDate = new Date()
        

        if(correctDate === "NaN/NaN/NaN"){
            check1 = 1;
        if(monthInput.value > 12){
            monthInput.classList.add('onError');
            error2.innerHTML = 'Must be a valid month';
            label2.style.color = 'hsl(0, 100%, 67%)';
        }
        if(dayInput.value > 31){
            dayInput.classList.add('onError');
            error1.innerHTML = 'Must be a valid Date';
            label1.style.color = 'hsl(0, 100%, 67%)';
        }
        if(yearInput.value > todayDate.getFullYear()){
            yearInput.classList.add('onError');
            error3.innerHTML = 'Must be in past';
            label3.style.color = 'hsl(0, 100%, 67%)';
        }
    }
    else{
        check1 = 0;
    }

        if( todayDate < inputDate){
            dayInput.classList.add('onError');
            monthInput.classList.add('onError');
            yearInput.classList.add('onError');
            error3.innerHTML = 'Must be in past';
            label1.style.color = 'hsl(0, 100%, 67%)';
            label2.style.color = 'hsl(0, 100%, 67%)';
            label3.style.color = 'hsl(0, 100%, 67%)';
            check2 = 1;
        }
        else{
            check2 = 0;
        }

        if( givenDate !== correctDate){
            check3 = 1;
            if(month <=12){
            dayInput.classList.add('onError');
            error1.innerHTML = 'Must be a valid Date';
            label1.style.color = 'hsl(0, 100%, 67%)';
           }
           if(day<=31){
            yearInput.classList.add('onError');
            error3.innerHTML = 'Must be a valid Year';
            label3.style.color = 'hsl(0, 100%, 67%)';
           }
        }
        else{
            check3 = 0;
        }

        let t_day = todayDate.getDate();
        let t_month = todayDate.getMonth();
        let t_year = todayDate.getFullYear()
        let monthO,dayO;

        let check = check1 + check2 + check3;

        if( check === 0 ){
            let yearO = t_year - year;
            if(t_month >= month){
                monthO = t_month - month;
            }
            else{
                yearO--;
                monthO = 12 + t_month - month;
            }
            if(t_day >= day){
                dayO = t_day - day;
            }
            else{
                monthO--;
                dayO = 31 + t_day - day;
            }
            output1.innerHTML = yearO;
            output2.innerHTML = monthO;
            output3.innerHTML = dayO;
        }
        

}
})


