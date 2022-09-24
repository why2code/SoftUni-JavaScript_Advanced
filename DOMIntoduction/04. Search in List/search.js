function search() {
   let townList = Array.from(document.querySelectorAll("ul li"));
   let searchText = document.getElementById("searchText").value;
   let count = 0;
   for (let i = 0; i < townList.length; i++) {
      let text = townList[i].textContent;
      if (text.includes(searchText)) {
         townList[i].style.textDecoration = "underline";
         townList[i].style.fontWeight = "bold";
         count++;
      }
      else {
         townList[i].style.textDecoration = "none";
         townList[i].style.fontWeight = "normal";
      }
   }
   document.getElementById("result").innerText = `${count} matches found`; 

}
