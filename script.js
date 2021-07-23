console.log("page loading...");

var likeCount = 3;
var likeSpan1 = document.querySelector("#span");

function like() {
  likeCount++;
  likeSpan1.innerText = likeCount + " like(s)";
}
