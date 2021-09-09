var query = prompt("Clubga kirish uchun yoshingizni kiriting");
var paragraph = document.createElement("p");

if (query >= 18){
    paragraph.textContent = "Kirishingiz mumkin";
}else
{
    paragraph.textContent = "Kirishingiz mumkin emas";
}
document.body.style.backgroundColor = "red";

document.body.append(paragraph);