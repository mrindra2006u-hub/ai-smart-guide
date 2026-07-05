const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

const resultBox = document.getElementById("resultBox");
const resultTitle = document.querySelector(".result-card h3");
const resultText = document.getElementById("resultText");

const upgradeBtn = document.querySelector(".upgrade-btn");
const loginModal = document.getElementById("loginModal");

const themeBtn = document.getElementById("themeBtn");
const bookmarkBtn = document.getElementById("bookmarkBtn");
const notifyBtn = document.getElementById("notifyBtn");

function showResult(query){

resultTitle.innerHTML="🤖 AI Result";

resultText.innerHTML=`
<h3>${query}</h3>

<p>
AI Smart Guide found information about
<b>${query}</b>.

<br><br>

🚀 Real AI Search will be connected in Version 4.

</p>
`;

resultBox.scrollIntoView({
behavior:"smooth"
});

}

if(searchBtn){

searchBtn.onclick=function(){

const query=searchInput.value.trim();

if(query===""){

alert("Please type something.");

return;

}



};

}

if(searchInput){

searchInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

searchBtn.click();

}

});

}

if(upgradeBtn && loginModal){

upgradeBtn.onclick=function(){

loginModal.style.display="flex";

};

loginModal.onclick=function(e){

if(e.target===loginModal){

loginModal.style.display="none";

}

};

}

if(themeBtn){

themeBtn.onclick=function(){

alert("Dark Mode Coming Soon");

};

}

if(bookmarkBtn){

bookmarkBtn.onclick=function(){

alert("Bookmark Saved ❤️");

};

}

if(notifyBtn){

notifyBtn.onclick=function(){

alert("Notifications Coming Soon 🔔");

};

}