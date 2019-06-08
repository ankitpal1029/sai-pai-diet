

var caloriess,waters,proteins,caloriesp,waterp,proteinp,nName;
let sai={
    caloriess,
    waters,
    proteins
}
let pai={
    caloriesp,
    waterp,
    proteinp
}
let storesai={
    caloriess,
    waters,
    proteins
}
let storepai={
    caloriesp,
    waterp,
    proteinp
}



function f1(frm1){
   
 nName = frm1.name.value;

var nAge = frm1.age.value;
var nwt = frm1.wt.value;
var nht =frm1.ht.value;
document.getElementById("yo").innerHTML="Welcome"+nName;
if(nName==="sai")
{

if(nAge<20)
{
    if(nwt<50)
    {
        if(nht<150)
        {
            alert('your dietary requirements include \n calories:2000 \n proteins:10 \n water:1.5');
            sai.caloriess=2000;
            sai.waters=1.5;
            sai.proteins=10;
           
        }
        else{
            alert('your dietary requirements include \n calories:1500 \n proteins:8 \n water:2');
            sai.caloriess=1500;
            sai.waters=2;
            sai.proteins=8;
            
        }

    }
    else{
        if(nht<150)
        {
            alert('your dietary requirements include \n calories:3000 \n proteins:20 \n water:2');
            sai.caloriess=3000;
            sai.waters=2;
            sai.proteins=20;
           
        }
        else{
            alert('your dietary requirements include \n calories:2500 \n proteins:15 \n water:2.5');
            sai.caloriess=2500;
            sai.waters=15;
            sai.proteins=2.5;
           
        }

       
    }
}
else{
    if(nwt<50)
    {
        if(nht<150)
        {
            alert('your dietary requirements include \n calories:4000 \n proteins:30 \n water:2.5');
            console.log("working");
            sai.caloriess=4000;
            sai.waters=2.5;
            sai.proteins=30;
            console.log("working2");
            
        }
        else{
            alert('your dietary requirements include \n calories:3500 \n proteins:28 \n water:3');
            sai.caloriess=3500;
            sai.waters=3;
            sai.proteins=28;
           
        }

    }
    else{
        if(nht<150)
        {
            alert('your dietary requirements include \n calories:5000 \n proteins:40 \n water:3');
            sai.caloriess=5000;
            sai.waters=3;
            sai.proteins=40;
          
            
        }
        else{
            alert('your dietary requirements include \n calories:4500 \n proteins:38 \n water:3.5');
            sai.caloriess=4500;
            sai.waters=3.5;
            sai.proteins=38;
            
        }
    }
}

}
else if(nName==="pai")
{

    if(nAge<20)
    {
        if(nwt<50)
        {
            if(nht<150)
            {
                alert('your dietary requirements include \n calories:2000 \n proteins:10 \n water:1.5');
                pai.caloriesp=2000;
                pai.waterp=1.5;
                pai.proteinp=10;
            }
            else{
                alert('your dietary requirements include \n calories:1500 \n proteins:8 \n water:2');
                pai.caloriesp=1500;
                pai.waterp=2;
                pai.proteinp=8;
            }
    
        }
        else{
            if(nht<150)
            {
                alert('your dietary requirements include \n calories:3000 \n proteins:20 \n water:2');
                pai.caloriesp=3000;
                pai.waterp=2;
                pai.proteinp=20;
            }
            else{
                alert('your dietary requirements include \n calories:2500 \n proteins:15 \n water:2.5');
                pai.caloriesp=2500;
                pai.waterp=2.5;
                pai.proteinp=15;
            }
    
           
        }
    }
    else{
        if(nwt<50)
        {
            if(nht<150)
            {
                alert('your dietary requirements include \n calories:4000 \n proteins:30 \n water:2.5');
                pai.caloriesp=4000;
                pai.waterp=2.5;
                pai.proteinp=30;
            }
            else{
                alert('your dietary requirements include \n calories:3500 \n proteins:28 \n water:3');
                pai.caloriesp=3500;
                pai.waterp=3;
                pai.proteinp=28;
            }
    
        }
        else{
            if(nht<150)
            {
                alert('your dietary requirements include \n calories:5000 \n proteins:40 \n water:3');
                pai.caloriesp=5000;
                pai.waterp=3;
                pai.proteinp=40;
            }
            else{
                alert('your dietary requirements include \n calories:4500 \n proteins:38 \n water:3.5');
                pai.caloriesp=4500;
                pai.waterp=3.5;
                pai.proteinp=38;
            }
        }
    }


   

}

localStorage.setItem('storesai', JSON.stringify(sai));
localStorage.setItem('storepai', JSON.stringify(pai));

console.log(localStorage);
}




     /*  sai.caloriess=frm5.cals;
        sai.fats=frm5.fat;
        sai.proteins=frm5.protein;

        pai.caloriesp=frm5.cals;
        pai.fatp=frm5.fat;
        pai.proteinp=frm5.protein;*/





/*

let a=[
    {itemn}
     ,{calories}
     ,{water}
     ,{protein}
     
]

let b=[
    {itemn}
     ,{calories}
     ,{water}
     ,{protein}
     
]

function func(){
    n=prompt('enter number of items available');
    window.localStorage.setItem('nstore',n);
    for(var i=0;i<window.localStorage.getItem('nstore');i++){
      a[i].itemn=prompt('enter itemname');
      a[i].calories=prompt('enter calories');
      a[i].water=prompt('enter fat');
      a[i].protein=prompt('enter proteins');
      window.localStorage.setItem('b[i]', JSON.stringify(a[i]));
     
    }
    console.log(localStorage);

}

function f3(e){
    if(prompt("enter your name")==="sai")
    {
    for(i=0;i<window.localStorage.getItem('nstore');i++)
    {
        a[i]=JSON.parse(window.localStorage.getItem('b[i]'));
       c=prompt("have you eaten "+a[i].itemn+" today");
      if(c==="yes")
      {
         d=prompt("enter number of times eaten");
         sai.caloriess.value-=a[i].calories;
         sai.proteins.value-=a[i].protein;
         sai.waters.value-=a[i].water;

      }
    }
    if(sai.caloriess.value>0||sai.proteins.value>0||sai.fats.value>0){
        prompt(sai.caloriess.value+" cals to go \n"+sai.proteins.value+" of proteins to go \n"+sai.waters.value+" of fat to go \n");
    }


}
else if(prompt("enter your name")==="pai")
{
    {
        for(i=0;i<window.localStorage.getItem('nstore');i++)
        {
            a[i]=JSON.parse(window.localStorage.getItem('b[i]'));
           c=prompt("have you eaten "+a[i].itemn+" today");
          if(c==="yes")
          {
             d=prompt("enter number of times eaten");
             pai.caloriesp.value-=a[i].calories;
             pai.proteinp.value-=a[i].protein;
             pai.waterp.value-=a[i].water;
    
          }
        }
    }
    if(pai.caloriesp.value>0||pai.proteinp.value>0||pai.fatp.value>0){
        prompt(pai.caloriesp.value+" cals to go \n"+pai.proteinp.value+" of proteins to go \n"+pai.waterp.value+" of fat to go \n");
    }

}

*/



function f6(frm2)
{
    console.log(frm2.calItem.value);
    console.log(localStorage);
 if(frm2.name.value==="sai")
 { alert("yo");
    sai=JSON.parse(localStorage.getItem('storesai'));
    sai.caloriess-=frm2.calItem.value;
    sai.proteins-=frm2.protItem.value;
    sai.waters-=frm2.watItem.value;

    if(sai.waters<0||sai.caloriess<0||sai.proteins<0)
    {
        alert("you have overconsumed some items by \n"+"calories: "+(-1)*sai.caloriess+"\n"+"proteins: "+(-1)*sai.proteins+"\n"+"water: "+(-1)*sai.waters);
        localStorage.removeItem("storesai");
        location.reload();
    }
    else{
        alert(sai.caloriess+" cals to go \n"+sai.proteins+" of proteins to go \n"+sai.waters+" water to go");
        localStorage.setItem('storesai', JSON.stringify(sai));
    }
   

 }
else if(frm2.name.value==="pai")
{
    pai=JSON.parse(localStorage.getItem('storepai'));
    
    pai.caloriesp-=frm2.calItem.value;
    pai.proteinp-=frm2.protItem.value;
    pai.waterp-=frm2.watItem.value;
    if(pai.waterp.value<0||pai.caloriesp.value<0||pai.proteinp.value<0)
    {
        alert("you have overconsumed some items by \n"+"calories: "+(-1)*pai.caloriesp+"\n"+"proteins: "+(-1)*pai.proteinp+"\n"+"water: "+(-1)*pai.waterp);
        localStorage.removeItem("storepai");
        location.reload();
    }
    else{
        alert(pai.caloriesp+" cals to go \n"+pai.proteinp+" of proteins to go \n"+pai.waterp+" water to go");
        localStorage.setItem('storepai', JSON.stringify(pai));
    }
   
   


}


}

function f4(){
   
    localStorage.removeItem("storesai");
    localStorage.removeItem("storepai");
   
    
    console.log(localStorage);
}




