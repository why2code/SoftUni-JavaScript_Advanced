function create(words) {

   for(let word of words){
      let targetDiv = document.getElementById("content");

      let newDiv = document.createElement('div');
      let newPar = document.createElement('p');
      newPar.style.display = "none";

      newPar.textContent = word;
      newDiv.appendChild(newPar);
      targetDiv.appendChild(newDiv);

      newDiv.addEventListener('click', showHidden);

   }

   function showHidden(event){

      if(event.target.nodeName !== "DIV"){
         return;
      }

      let p = event.target.children[0];
      console.log(p);
      p.style.display = "block";
   }
}