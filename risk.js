function Submit()
{
    var score = 0;
    if (document.getElementById("question-1-a").checked)
        score += 1;

    if (document.getElementById("question-2-a").checked)
        score += 1;
   
    if (document.getElementById("question-3-a").checked)
        score += 1;
   
    if (document.getElementById("question-4-a").checked)
        score += 1;
  
    if (document.getElementById("question-5-a").checked)
        score += 1;
   
    var elem = document.getElementById("res")
    if (score < 3)
    {
        elem.innerHTML = "Your risk of potentially lethal assault by intinate partner: Low";
        elem.style.color = "green";
    }
    else 
    {
        elem.innerHTML = "Your risk of potentially lethal assault by intimate partner: High";
        elem.style.color = "red";
    }   
}