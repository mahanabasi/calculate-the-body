function claculatorBMI(){
    const weight=parseFloat(document.getElementById("weight").value);
    const height=parseFloat(document.getElementById("height").value);
    if(isNaN(weight)||isNaN(height)||weight<=0||height<=0){
        document.getElementById("resualt").innerText="لطفا مقادیر معتبر وارد کنید..... ";
        return;
    }
    const bmi=(weight/(height**2)).toFixed(2);
    let massege;
    if(bmi<18.5){
        massege="کم وزن";
    }
    else if(bmi>=18.5 && bmi<24.9){
        massege="وزن سالم";
    }
    else if(bmi>=25 && bmi<29.9){
        massege="اضافه وزن";
    }
    else{
        massege="چاقی";
    }
    document.getElementById("resualt").innerHTML=BMI= massege;
}