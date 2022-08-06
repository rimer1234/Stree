function Submit()
{
  $("#cb1").fadeOut(1000);
  $("#c1").fadeOut(1000);
  $("#c1_num").fadeOut(1000);
  $("#c1_end").fadeOut(1000);
  $("#i1").fadeOut(1000);

  $("#cb2").fadeOut(1000);
  $("#c2").fadeOut(1000);
  $("#c2_num").fadeOut(1000);
  $("#c2_end").fadeOut(1000);
  $("#i2").fadeOut(1000);

  $("#cb3").fadeOut(1000);
  $("#c3").fadeOut(1000);
  $("#c3_num").fadeOut(1000);
  $("#c3_end").fadeOut(1000);
  $("#i3").fadeOut(1000);

  $("#cb4").fadeOut(1000);
  $("#c4").fadeOut(1000);
  $("#c4_num").fadeOut(1000);
  $("#c4_end").fadeOut(1000);
  $("#c4_end2").fadeOut(1000);
  $("#i4").fadeOut(1000);

  $("#cb5").fadeOut(1000);
  $("#c5").fadeOut(1000);
  $("#c5_num").fadeOut(1000);
  $("#c5_end").fadeOut(1000);
  $("#c5_end2").fadeOut(1000);
  $("#i5").fadeOut(1000);

  $("#cb6").fadeOut(1000);
  $("#c6").fadeOut(1000);
  $("#c6_num").fadeOut(1000);
  $("#c6_end").fadeOut(1000);
  $("#i6").fadeOut(1000);

  $("#cb7").fadeOut(1000);
  $("#c7").fadeOut(1000);
  $("#c7_num").fadeOut(1000);
  $("#c7_end").fadeOut(1000);
  $("#c7_end2").fadeOut(1000, complete);
  $("#i7").fadeOut(1000);
 
  $("#cb8").fadeOut(1000);
  $("#c8").fadeOut(1000);
  $("#c8_num").fadeOut(1000);
  $("#c8_end").fadeOut(1000);
  $("#c8_end2").fadeOut(1000);
  $("#i8").fadeOut(1000);
}

function complete()
{
  var statename = document.getElementById("states").value
  var index = -1
  for (let i = 0; i < statenames.length; i++) 
  {
    if (statenames[i] == statename)
      index = i
  }
  
  document.getElementById("question").innerHTML = "What is it like to be a woman in " + statename +" ?"

  // card 1
  {
    var elem = document.getElementById("c1")
    elem.innerHTML = "You have"

    elem = document.getElementById("c1_num")
    elem.innerHTML = fem_lit[index] + "%";

    elem = document.getElementById("c1_end")
    elem.innerHTML = "chance of being literate"   

    $("#cb1").fadeIn();
    $("#c1").fadeIn();
    $("#c1_num").fadeIn();
    $("#c1_end").fadeIn();
    $("#i1").fadeIn();
  }

  //card 2
  {
    elem = document.getElementById("c2")
    elem.innerHTML = "You have "

    elem = document.getElementById("c2_num")
    elem.innerHTML = teen_preg[index] + "%";

    elem = document.getElementById("c2_end")
    elem.innerHTML = "chance for teen pregnancy" 
    
    $("#cb2").fadeIn();
    $("#c2").fadeIn();
    $("#c2_num").fadeIn();
    $("#c2_end").fadeIn();
    $("#i2").fadeIn();
  }

  {
    elem = document.getElementById("c3")
    elem.innerHTML = "You are"
    
    elem = document.getElementById("c3_num")
    elem.innerHTML = decide[index] + "%"
    
    elem = document.getElementById("c3_end")
    elem.innerHTML = "likely to participate in major household decisions" 

    $("#cb3").fadeIn();
    $("#c3").fadeIn();
    $("#c3_num").fadeIn();
    $("#c3_end").fadeIn();
    $("#i3").fadeIn();
  }
      
  //card 4
  {
    elem = document.getElementById("c4")
    elem.innerHTML = "You have"
    
    elem = document.getElementById("c4_num")
    elem.innerHTML = work_12[index] + "%"
    
    elem = document.getElementById("c4_end")
    elem.innerHTML = "chance of working and getting paid in cash"

     $("#cb4").fadeIn();
    $("#c4").fadeIn();
    $("#c4_num").fadeIn();
    $("#c4_end").fadeIn();
    $("#c4_end2").fadeIn();
    $("#i4").fadeIn();
  }
  
  
   //card 5

   {
    elem = document.getElementById("c5")
    elem.innerHTML = "You have"
    
    elem = document.getElementById("c5_num")
    elem.innerHTML = own_house[index] + "%"
    
    elem = document.getElementById("c5_end")
    elem.innerHTML = "chance owning a house"

    $("#cb5").fadeIn();
    $("#c5").fadeIn();
    $("#c5_num").fadeIn();
    $("#c5_end").fadeIn();
    $("#c5_end2").fadeIn();
    $("#i5").fadeIn();
   }

   // card 6
   {
    var elem = document.getElementById("c6")
    elem.innerHTML = "You have"

    elem = document.getElementById("c6_num")
    elem.innerHTML = own_cell[index] + "%"

    elem = document.getElementById("c6_end")
    elem.innerHTML = " chance of owning a mobile phone" 

    $("#cb6").fadeIn();
    $("#c6").fadeIn();
    $("#c6_num").fadeIn();
    $("#c6_end").fadeIn();
    $("#i6").fadeIn();
   }

   // card 7
    {
    elem = document.getElementById("c7")
    elem.innerHTML = "You have"
    
    elem = document.getElementById("c7_num")
    elem.innerHTML = have_bk_acct[index] + "%"
    
    elem = document.getElementById("c7_end")
    elem.innerHTML = "chance of owning a bank account"

    $("#cb7").fadeIn();
    $("#c7").fadeIn();
    $("#c7_num").fadeIn();
    $("#c7_end").fadeIn();
    $("#c7_end2").fadeIn();
    $("#i7").fadeIn();
   }
 
  // card 8
    {
    var elem = document.getElementById("c8")
    elem.innerHTML = "You have"

    elem = document.getElementById("c8_num")
    elem.innerHTML = violence[index] + "%"

    elem = document.getElementById("c8_end")
    elem.innerHTML = "chance of experiencing domestic violence"  
 
    $("#cb8").fadeIn();
    $("#c8").fadeIn();
    $("#c8_num").fadeIn();
    $("#c8_end").fadeIn();
    $("#c8_end2").fadeIn();
    $("#i8").fadeIn();
   } 
}

document.getElementById("states").value = "Andhra Pradesh";
Submit();