import { render, html } from 'https://unpkg.com/lit-html?module';
import { repeat } from 'https://unpkg.com/lit-html/directives/repeat.js?module';
import { towns } from './towns.js';
 
 
const townsDiv = document.getElementById('towns');
const button = document.querySelector('button');
button.addEventListener('click', search);
const renderTowns = () => html`
<ul> 
   ${repeat(towns, town => html`<li>${town}</li>`)}
</ul>`
 
render(renderTowns(), townsDiv);
 
function search() {
   const searchText = document.getElementById('searchText');
   const townsList = townsDiv.querySelectorAll('li');
   let count = 0;
   townsList.forEach(t => {
      t.classList.remove('active');
      if (t.textContent.includes(searchText.value)) {
         t.classList.add('active');
         count++;
      }
   })
   document.getElementById('result').textContent = `${count} matches found`;
}