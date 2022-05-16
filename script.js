const contact_links = document.getElementById("contact_links");
const links = document.getElementById("links");
const whatsapp = document.getElementById("whatsapp");
const phone = document.getElementById("phone");
const github = document.getElementById("github");
const figma = document.getElementById("figma");
const linkedIn = document.getElementById("linkedIn");
const gmail = document.getElementById("gmail");
const linkpics = document.getElementById("linkpics");
const contact_image = document.getElementById('contact_image');

whatsapp.addEventListener('click', function(e){
     contact_links.style.display = "flex";
     links.innerHTML = "whatsapp link";
     contact_image.setAttribute('src', 'whatsapp.jpeg');
})

phone.addEventListener('click', function(e){
     contact_links.style.display = "flex";
     contact_image.setAttribute('src', 'contact.png');
     links.innerHTML = "07085429640 <br> 07016227775";
})

github.addEventListener('click', function(e){
     contact_links.style.display = "flex";
     contact_image.setAttribute('src', 'github.png');
     links.innerHTML = "github link";
})

figma.addEventListener('click', function(e){
     contact_links.style.display = "flex";
     contact_image.setAttribute('src', 'figma.png');
     links.innerHTML = "figma link";
})

linkedIn.addEventListener('click', function(e){
     contact_links.style.display = "flex";
     contact_image.setAttribute('src', 'linkedin.png');
     links.innerHTML = "linkedIn link";
})

gmail.addEventListener('click', function(e){
     contact_links.style.display = "flex";
     contact_image.setAttribute('src', 'gmail.png');
     links.innerHTML = "terencino8@gmail.com";
})

function contact_LinkFunc(){
     contact_links.style.display = "none";
}

// Exit button function when clicked
const exitB = document.getElementById('exitB');

function exitbtn(){
     container.style.display = "none";
          start_modal.style.display = "flex";
}




// for the modal
const start_modal = document.getElementById('start_modal');
const modal_box = document.getElementById('modal_box');
const topQ = document.getElementById('topQ');
const invalid = document.getElementById('invalid');
const button = document.getElementById('button');
const container = document.getElementById('container');
const potfolio_image = document.getElementById('potfolio_image');
const content = document.getElementById('content');
const pname = document.getElementById('pname');
const occupation = document.getElementById('occupation');

function validate(){
const password = document.getElementById('password').value;
     if(password == ""){
        alert("input your name");
     }
     else if(password == "Terence"){
          potfolio_image.style = "box-Shadow:0px 0px 2px 2px rgba(128, 255, 0, 0.479);";
          potfolio_image.style.backgroundImage = "url('teeit.jpg')";
          container.style.display = "flex";
          start_modal.style.display = "none";
          content.style = "box-Shadow:0px 0px 2px 2px rgba(128, 255, 0, 0.479);";
          pname.innerHTML = "Onyekachi Terence .T.";
          occupation.innerHTML = "FrontEnd web Developer";
          occupation.style.color = "rgba(128, 255, 0, 0.479)";
          exitB.style.backgroundColor = "rgba(128, 255, 0, 0.479)";
     }
     else if(password == "Katty"){
          potfolio_image.style = "box-Shadow:0px 0px 2px 2px gold;";
          potfolio_image.style.backgroundImage = "url('confi2.jpg')";
          container.style.display = "flex";
          start_modal.style.display = "none";
          content.style = "box-Shadow:0px 0px 2px 2px gold;";
          pname.innerHTML = "Ihediohamma Confidence .K.";
          occupation.innerHTML = "BioTechnologist";
          occupation.style.color = "gold";
          exitB.style.backgroundColor = "gold";

          // alert("So you dont Know his name");
     }
     else if(password == "Danibelle"){
          potfolio_image.style = "box-Shadow:0px 0px 2px 2px pink;";
          potfolio_image.style.backgroundImage = "url('nancy1.jpg')";
          container.style.display = "flex";
          start_modal.style.display = "none";
          content.style = "box-Shadow:0px 0px 2px 2px pink;";
          pname.innerHTML = "Onuoha Danibelle .C.";
          occupation.innerHTML = "Digital Marketer";
          occupation.style.color = "pink";
          exitB.style.backgroundColor = "pink";

     }
     else if(password == "Zeal"){
          potfolio_image.style = "box-Shadow:0px 0px 2px 2px rgba(81, 0, 211, 0.479);";
          potfolio_image.style.backgroundImage = "url('zeal1.2.jpg')";
          container.style.display = "flex";
          start_modal.style.display = "none";
          content.style = "box-Shadow:0px 0px 2px 2px rgba(81, 0, 211, 0.479);";
          pname.innerHTML = "Onwudiwe Zeal .O.";
          occupation.innerHTML = "Content Writer";
          occupation.style.color = "rgba(81, 0, 211, 0.479)";
          exitB.style.backgroundColor = "rgba(81, 0, 211, 0.479)";

     }
     else if(password == "Prudence"){
          potfolio_image.style = "box-Shadow:0px 0px 2px 2px purple;";
          potfolio_image.style.backgroundImage = "url('pee1.jpg')";
          container.style.display = "flex";
          start_modal.style.display = "none";
          content.style = "box-Shadow:0px 0px 2px 2px purple;";
          pname.innerHTML = "Uwakwem Prudence .I.";
          occupation.innerHTML = "Digital Marketer";
          occupation.style.color = "purple";
          exitB.style.backgroundColor = "purple";

          // alert("So you dont Know his name");
     }
     else if(password == "Danny"){
          potfolio_image.style = "box-Shadow:0px 0px 2px 2px red;";
          potfolio_image.style.backgroundImage = "url('danny1.jpg')";
          container.style.display = "flex";
          start_modal.style.display = "none";
          content.style = "box-Shadow:0px 0px 2px 2px red;";
          pname.innerHTML = " Daniel";
          occupation.innerHTML = "Digital Marketer";
          occupation.style.color = "Red";
          exitB.style.backgroundColor = "Red";

          // alert("So you dont Know his name");
     }
     else{
          topQ.style.color = "red";
          invalid.style.display = "flex";
          invalid.style.color = "red";

     }
     document.getElementById('password').value ="";
}
    







// button.addEventListener('click', function(e){
//  if(password == "Terence"){
//           topQ.style.color = "green";
//           container.style.display = "flex";
//           start_modal.style.display = "none";
//      }
//      else{onclick="validate()"
//           topQ.style.color = "red";
//           invalid.style.display = "flex";
//           invalid.style.color = "red";

//      }
//      document.getElementById('password').value ="";

// })