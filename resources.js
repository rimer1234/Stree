var distByState = {
    AP: ["Krishna", "Chittoor", "Srikakulam", "Anantapur"],
    AR: ["Papumpare", "Tawang", "Changlang", "Anjaw"],
    AS: ["Cachar", "Jorhat", "Baksa", "Barpeta"],
    BR: ["Patna", "Begusarai", "Darbhanga", "Gaya"],
    CR: ["Raipur", "Balod", "Bijapur", "Durg"],
    GA: ["NorthGoa", "SouthGoa"],
    GJ: ["Ahmedabad", "Amreli", "Surat", "Kutchh"],
    HR: ["Ambala", "Bhiwani", "Nuh", "Panipat"]
}

var latlon = {
    Krishna: [16.52345, 80.61185],
    Chittoor: [13.21924,79.09851],
    Srikakulam: [18.310931, 83.88836],
    Anantapur: [14.671689422240163, 77.59458138862259],
    Papumpare: [27.104238950370004, 93.69101839794698],
    Tawang: [27.589055163637344, 91.86491853523884],
    Changlang: [27.136852822460032, 95.74372531534262],
    Anjaw:[28.079413713047973, 96.54310041438251],
    Cachar:[24.812551136710667, 92.79161102490345],
    Jorhat:[26.720201928145393, 94.23024989609222],
    Baksa: [26.664243540231542, 91.34061477095497],
    Barpeta: [26.397600094991912, 90.26628622492362],
    Patna: [25.6077334836639, 85.14484551142031],
    Begusarai:[25.41594914070704, 86.13602062861008],
    Darbhanga: [26.11631878680526, 85.89989378813992],
    Gaya: [24.7891938615514, 84.99059638245316],
    Raipur: [21.235047359123158, 81.6409992041983],
    Balod: [18.805134866210807, 82.70433979785516],
    Bijapur: [18.794485450085457, 80.81229038436204],
    Durg: [21.187310098093324, 81.28269999787716],
    NorthGoa: [15.471498105698393, 73.85874163394641],
    SouthGoa: [15.27910037436988, 73.9628584047621],
    Ahmedabad: [23.049439336902836, 72.6029702344038],
    Amreli: [23.11663451755086, 72.63134428449898],
    Surat: [21.1812990238792, 72.81726249308579],
    Kutchh:[23.241888013601177, 69.67583379604937],
    Ambala: [30.356346855764443, 76.75476445066299],
    Bhiwani: [30.739414646548113, 76.71400919373656],
    Nuh: [28.096189460709454, 77.00168515563205],
    Panipat: [29.393314636788805, 76.9693353998293]
}

var popup = {
    Krishna: 'One Stop Centre, <br>Sahib Municipal Maternity Hospital, <br>Kothapet, Vijaywada City, <br>Krishna District, <br>Andhra Pradesh. <br>Ph: 9398914772<br> Email: apsrcw@gmail.com',
    Chittoor: 'One Stop Centre, <br>RIMSGeneral Hospital, <br>Municipal Maternity Ward, <br>Chittoor City, <br>Chittoor District, <br>Andhra Pradesh. <br>Ph:9959776697 <br> Email:apsrcw@gmail.com',
    Srikakulam: 'One Stop Centre, <br>RIMSGeneral Hospital, Balaga,<br> Srikakulam City, <br>Srikakulam District, <br>Andhra Pradesh-532001.<br>Ph:9110793708 <br> Email:apsrcw@gmail.com',
    Anantapur: 'One Stop Centre, <br>Room No.12 & 13, Trauma Care, Upstairs, Emergency Centre, <br> Govt. General Hospital,<br> Anantapur City,<br> Anantapur District, <br>Andhra Pradesh-515001. <br> Ph: 8008053408 <br> Email: apsrcw@gmail.com',
    Papumpare: 'One Stop Centre, <br>Tomo Riba Institute of Health and Medical Science, <br>Papumpare District, <br>Arunachal Pradesh. <br>Ph: 7085086296 <br> Email:onestopcentre3@gmail.com ',
    Tawang: 'One Stop Centre, <br>DFDO  Quarter, <br>Craft Centre Colony,  <br>Near District Hospital, <br> Tawang-790104. Ph: 9862110421<br>Email:onestopcentre3@gmail.com',
    Changlang: 'One Stop Centre,<br> Old Deputy Commissioner’s Office, <br> Near New Secretariat Office Building, <br>Changlang-792120. <br> Ph:9436251043 <br> Email:onestopcentre3@gmail.com',
    Anjaw: 'One Stop Centre, <br>Near Additional Deputy Commissioner’s Office, <br>Hayuliang, <br>Anjaw -792104.<br>Ph:9436219757 <br> Email:cdpohig@gmail.com',
    Cachar:'One Stop Centre, <br>Panchayat Road, <br>Das Colony , <br>Silchar, <br>Cachar District, <br>Assam. <br> Ph:3842245056 <br> Email:srcwassam@gmail.com',
    Jorhat:'One Stop Centre, <br>Prerona Pratibandhi ShishuVikash Kendra, <br>Chinamara, <br>Jorhat District, <br>Assam. Ph:9435352138<br> Email:srcwassam@gmail.com',
    Baksa:'One Stop Centre, <br>Dr. Rup Ram Boro Hospital, <br>PO Mushalpur, <br>Dist. Baska, <br>Assam.<br> Ph: 7399502362<br> Email:dswobak2017@gmail.com',
    Barpeta: 'One Stop Centre, <br>Barpeta,  <br>Sonkuchi Colony,  <br>PO - Sonkuchi, <br>Barpeta. Ph:8876607561 <br> Email:dswobak2017@gmail.com',
    Patna: 'One Stop Centre, <br>Chajjubagh Executive Bungalow,<br> Patna District, <br>Bihar.<br>Ph:9304264570 <br> Email:support@wcdbihar.org.in',
    Begusarai: 'One Stop Centre, <br>Collectorate Campus, <br>Above DM Begusarai office, <br>Begusarai City, <br>Begusarai District, <br>Bihar. <br>Ph:9771468005 <br>Email:whlbeg@gmail.com',
    Darbhanga: 'One Stop Centre, <br> Collectorate Campus,  <br>Darbhanga City,  <br>Darbhanga District,  <br>Bihar. <br> Ph: 9771468010 <br>Email:support@wcdbihar.org.in',
    Gaya: 'Collectorate, <br>Gaya District, <br>Gaya-823001,<br>Bihar. <br>Ph: 9771468011<br>Email:womenhelplinegaya@gmail.com',
    Raipur: 'One Stop Centre, <br>District Hospital, <br>Janta Colony, <br>Raipur City,<br>Raipur District, <br>Chhattisgarh - 492001. <br>Ph:8269007181  <br>Email:sakhiraipur@gmail.com',
    Balod: 'One Stop Centre, <br>Sanjari Sports Club, <br>Front of Civil Line, <br>Balod , <br>Chhattisgarh. <br>Ph:9752042181 <br>Email:sakhibalod@gmail.com',
    Bijapur: 'One Stop Centre, <br>NearDistrict Hospital, <br>Bijapur, <br>Bijapur District, <br>Chhattisgarh. <br>Ph:7648057923 <br>Email:sakhioscbijapur@gmail.com',
    Durg: 'One Stop Centre,New Bus Stand, <br>Front of Dakshin Mukhi Hanuman Temple, <br>Tandula jal Sansadhan Parisar, <br>Durg District,<br>Chhattisgarh. <br>Ph: 7024261181<br>Email:sakhidurg@gmail.com',
    NorthGoa: 'One Stop Centre, <br>Goa Medical College, <br>NH-17, <br>Bambolim, <br>Tiswadi, <br>North Goa District, <br>Goa-403202. <br>Ph:0832-2458700  <br>Email:dir-wcd.goa@nic.in',
    SouthGoa: 'One Stop Centre, <br>Junta Quarters, <br>Pajifond Margao, <br>Salcete, <br>South Goa. <br>Ph:9423884669 <br>Email:dir-wcd.goa@nic.in',
    Ahmedabad: 'One Stop Centre-Sakhi, <br>A/2 Old Eye Ward Civil Hospital Compound, <br>Ahmedabad-380016. <br>Ph:07929726400 <br>Email:oscahmedabad1@gmail.com',
    Amreli: 'One Stop Center-Sakhi, <br>Near Laboratory, <br>First Floor,  <br>Civil Hospital, <br>Amreli - 365601. <br>Ph:9909926953 <br>Email:onestopcenteramreli@gmail.com',
    Surat: 'One Stop Center-Sakhi, <br>1st Floor, <br>Near Trauma center, <br>Civil Hospital Campus, <br>Majura Gate, <br>Surat-395001. <br>Ph:9998830400 <br>Email:osc.suratsiti@gmail.com ',
    Kutchh: 'One Stop Centre-Sakhi, <br>G.K.General Hospital, <br>Room No.27 to 32, <br>Near Radiology Department, <br>Bhuj-Kutch370001. <br>Ph:9879047047 <br>Email: oscbhuj@gmail.com',
    Ambala: '#39 A, Ganesh Vihar,<br> NasirpurDurga Nagar,<br>Ambala.<br>Ph:0171-2530910<br> poambwcd2@gmail.com',
    Bhiwani: "One Stop Centre, <br>Old SDM Residence, <br>Near Civil Hospital Ghanta Ghar Chowk. <br>Ph:01664-240044 <br>Email:onestopcenter600@gmail.com",
    Nuh: 'Dpo office, <br>Mda complex-Nuh<br>Pin.code-122107. <br>Ph:07217709090 <br>Email:OscNuh@gmail.Com',
    Panipat: 'One Stop Centre, <br>Red Cross Bhawan, <br>Panipat. <br> Ph: 7082403278 <br> Email:kasee_06@yahoo.co.in'
}

function Submit(value) {
    if (value.length == 0) 
    {
        document.getElementById("dist").innerHTML = "<option></option>";
    }
    else 
    {
        var catOptions = "";
        for (categoryId in distByState[value]) {
            catOptions += "<option>" + distByState[value][categoryId] + "</option>";
        }
        document.getElementById("dist").innerHTML = catOptions;
    }
}


function DrawMap()
{
    var value = document.getElementById("dist").value;
    if (value.length > 0) 
    {
        var pos = latlon[value]
        map.setView(pos, 16);
        var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
        {  
            maxZoom: 25,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    
        var msg = popup[value]
        var marker = L.marker(pos).addTo(map).bindPopup(msg).openPopup();
    }
}

var map = L.map('map');
Submit("AP")
document.getElementById("states").value="AP";
document.getElementById("dist").value="Krishna";
DrawMap();