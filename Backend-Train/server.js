const express = require('express');
const app = express();
const fetch=require('node-fetch');

function sortfunc(a,b){
    if(a.price>b.price)
    {
        return 1;
    }
    else 
    {
        if(a.seatsAvailable.sleeper+a.seatsAvailable.AC < b.seatsAvailable.sleeper+b.seatsAvailable.AC)
        {
            return 1;
        }
        else 
        {
            if(a.departureTime.Hours<b.departureTime.Hours)
            {
                return 1;
            }
            return 0;
        }
    }
   
}
var arr=[];
function Result(data){
arr=data;
}

const headers={'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE3MzQ2MzcsImNvbXBhbnlOYW1lIjoiVHJhaW4iLCJjbGllbnRJRCI6IjE1YzE2YzhmLTJmMWYtNDg5Yi1iNDYxLTA2MDJhNjllNjdiNiIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIyMDEyMDcxIn0.GTVPOYOPk7Up8hovnVjsYRK-_-eKgPcSuHa8P4DEqCE'}
fetch("http://20.244.56.144/train/trains",{headers}).then(res=>res.json()).then(da=>Result(da));
// console.log(arr);
arr.sort(sortfunc);
app.get("/trains",(req,res)=>{
   res.json(arr);
})
// let trainnum =arr.get("trainNumber")
// app.get("/trains/{trainnum}",(req,res)=>{
//     res.json(arr);
//  })

app.listen(5000,()=>{
    console.log("Listening....");
})