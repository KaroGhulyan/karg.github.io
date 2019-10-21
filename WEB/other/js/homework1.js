var PromptFirstName = prompt("First Name");
    PromptLastName = prompt("Laste Name");
    firstName = "Karo";
    lastName = "Ghulyan";
if(PromptFirstName === firstName & PromptLastName === lastName){
    document.write("<span style='font-size: 1.1rem;font-Weight:bold;'>Full Name: </span>" + PromptFirstName + " " + PromptLastName);
}else if(PromptFirstName != firstName & PromptLastName != lastName){
    document.write("<span style='font-size: 1.1rem;font-Weight:bold;color:red;'>ERROR 404 :D</span>");
    console.error("invalid Full Name");    
}else if(PromptFirstName != firstName){
    document.write("<span style='font-size: 1.1rem;font-Weight:bold;color:red;'>ERROR 404 :D</span>");
    console.error("invalid First Name");    
}else if(PromptLastName != lastName){
    document.write("<span style='font-size: 1.1rem;font-Weight:bold;color:red;'>ERROR 404 :D</span>");
    console.error("invalid Last Name");    
}
