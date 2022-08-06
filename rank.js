var condition = "Literacy"

function Submit()
{
    var nsec = 500
    $("#best1").fadeOut(nsec);
    $("#best2").fadeOut(nsec);
    $("#best3").fadeOut(nsec);
    $("#best4").fadeOut(nsec);
    $("#best5").fadeOut(nsec);

    $("#worst1").fadeOut(nsec);
    $("#worst2").fadeOut(nsec);
    $("#worst3").fadeOut(nsec);
    $("#worst4").fadeOut(nsec);
    $("#worst5").fadeOut(nsec, complete);  
}


function complete()
{
   if (condition === "Literacy")
  {
    document.getElementById("desc").innerHTML = "Best and Worst States For Women Based on Literacy Rates";

    document.getElementById("best1").innerHTML  = "1. " + b_lit[0];
    document.getElementById("best2").innerHTML  = "2. " + b_lit[1];
    document.getElementById("best3").innerHTML  = "3. " + b_lit[2];
    document.getElementById("best4").innerHTML  = "4. " + b_lit[3];
    document.getElementById("best5").innerHTML  = "5. " + b_lit[4];

    document.getElementById("worst1").innerHTML  = "1. " + w_lit[0];
    document.getElementById("worst2").innerHTML  = "2. " + w_lit[1];
    document.getElementById("worst3").innerHTML  = "3. " + w_lit[2];
    document.getElementById("worst4").innerHTML  = "4. " + w_lit[3];
    document.getElementById("worst5").innerHTML  = "5. " + w_lit[4];
  } 
  else if (condition === "Teen Pregnancy")
  {
    document.getElementById("desc").innerHTML = "Best and Worst States For Women Based on Teen Pregnancy Rates";

    document.getElementById("best1").innerHTML  = "1. " + b_teen_p[0];
    document.getElementById("best2").innerHTML  = "2. " + b_teen_p[1];
    document.getElementById("best3").innerHTML  = "3. " + b_teen_p[2];
    document.getElementById("best4").innerHTML  = "4. " + b_teen_p[3];
    document.getElementById("best5").innerHTML  = "5. " + b_teen_p[4];

    document.getElementById("worst1").innerHTML  = "1. " + w_teen_p[0];
    document.getElementById("worst2").innerHTML  = "2. " + w_teen_p[1];
    document.getElementById("worst3").innerHTML  = "3. " + w_teen_p[2];
    document.getElementById("worst4").innerHTML  = "4. " + w_teen_p[3];
    document.getElementById("worst5").innerHTML  = "5. " + w_teen_p[4];
  }
  else if (condition === "Home Own")
  {
    document.getElementById("desc").innerHTML = "Best and Worst States For Women Based on Home Ownership";

    document.getElementById("best1").innerHTML  = "1. " + b_home[0];
    document.getElementById("best2").innerHTML  = "2. " + b_home[1];
    document.getElementById("best3").innerHTML  = "3. " + b_home[2];
    document.getElementById("best4").innerHTML  = "4. " + b_home[3];
    document.getElementById("best5").innerHTML  = "5. " + b_home[4];

    document.getElementById("worst1").innerHTML  = "1. " + w_home[0];
    document.getElementById("worst2").innerHTML  = "2. " + w_home[1];
    document.getElementById("worst3").innerHTML  = "3. " + w_home[2];
    document.getElementById("worst4").innerHTML  = "4. " + w_home[3];
    document.getElementById("worst5").innerHTML  = "5. " + w_home[4];
  }
    else if (condition === "Bank Own")
  {
    document.getElementById("desc").innerHTML = "Best and Worst States For Women Based on Bank Account Ownership";

    document.getElementById("best1").innerHTML  = "1. " + b_bank[0];
    document.getElementById("best2").innerHTML  = "2. " + b_bank[1];
    document.getElementById("best3").innerHTML  = "3. " + b_bank[2];
    document.getElementById("best4").innerHTML  = "4. " + b_bank[3];
    document.getElementById("best5").innerHTML  = "5. " + b_bank[4];

    document.getElementById("worst1").innerHTML  = "1. " + w_bank[0];
    document.getElementById("worst2").innerHTML  = "2. " + w_bank[1];
    document.getElementById("worst3").innerHTML  = "3. " + w_bank[2];
    document.getElementById("worst4").innerHTML  = "4. " + w_bank[3];
    document.getElementById("worst5").innerHTML  = "5. " + w_bank[4];
  }
      else if (condition === "Dom Viol")
  {
    document.getElementById("desc").innerHTML = "Best and Worst States For Women Based on Domestic Violence";

    document.getElementById("best1").innerHTML  = "1. " + b_viol[0];
    document.getElementById("best2").innerHTML  = "2. " + b_viol[1];
    document.getElementById("best3").innerHTML  = "3. " + b_viol[2];
    document.getElementById("best4").innerHTML  = "4. " + b_viol[3];
    document.getElementById("best5").innerHTML  = "5. " + b_viol[4];

    document.getElementById("worst1").innerHTML  = "1. " + w_viol[0];
    document.getElementById("worst2").innerHTML  = "2. " + w_viol[1];
    document.getElementById("worst3").innerHTML  = "3. " + w_viol[2];
    document.getElementById("worst4").innerHTML  = "4. " + w_viol[3];
    document.getElementById("worst5").innerHTML  = "5. " + w_viol[4];
  }
  
  $("#best1").fadeIn();
  $("#worst1").fadeIn();
  $("#best2").fadeIn();
  $("#worst2").fadeIn();
  $("#best3").fadeIn();
  $("#worst3").fadeIn();
  $("#best4").fadeIn();
  $("#worst4").fadeIn();
  $("#best5").fadeIn();
  $("#worst5").fadeIn();
  
  drawChart();
}

function SubmitLit()
{
  condition = "Literacy";
  Submit();
}

function SubmitTeen()
{
  condition = "Teen Pregnancy";
  Submit();
}

function SubmitHome()
{
  condition = "Home Own";
  Submit();
}

function SubmitBank()
{
  condition = "Bank Own";
  Submit();
}

function SubmitViol()
{
  condition = "Dom Viol";
  Submit();
}

SubmitLit();
  
ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];


function drawChart()
{
  var chartConfig;

  if (condition == "Literacy")
    chartConfig = {shapes: lit};
  else if (condition == "Teen Pregnancy")
    chartConfig = {shapes: teen};
  else if (condition == "Home Own")
    chartConfig = {shapes: home};
  else if (condition == "Bank Own")
    chartConfig = {shapes: bank};
  else if (condition == "Dom Viol")
    chartConfig = {shapes: viol};

  zingchart.loadModules('maps,maps-ind,maps-world-countries');
  zingchart.render({
    id: 'myChart',
    data: chartConfig,
    height: '100%',
    width: '100%',
    hideprogresslogo:1
   });
}