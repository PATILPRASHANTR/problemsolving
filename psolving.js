//1. find the smaller Angle

var Minimal_Angle = (h, m) => 
{
  let hour_angle = 0.5 * (h * 60 + m);
  let minute_angle = 6 * m;
  let angle = Math.abs(hour_angle - minute_angle);
  let angle1 = Math.min(360 - angle, angle);
  return angle1;     
};


//2. Check whether the year is Leap or Not

var Check_Leap = (year) => 
{
 if(year % 4 === 0 && year%100 !== 0 || year % 400 === 0)
 {
   return "Leap Year"
 }
 else{
   return "Non Leap Year"
 }
};
 

//3. Perfect Number Check

var Perfect_Check = (N) => 
{
  let C = 0;
  for(let i=1; i<=N/2; i++)
  {
      if(N%i === 0)
      {
        C += i;
      }
  }
   
  if(C === N && C !== 0)
    {
    return "YES";
    } 
  else
    {
    return "NO";
     }     
};

//4.Reverse a Number

var Reverse_Number = (N) => 
{
   return parseInt(String(N).split("").reverse().join(""));
};

//5. Substring check

var Substring_Check = (S1, S2) => 
{
    return (S1.includes(S2))?"YES":"NO";   
};