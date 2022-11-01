function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
 
    const mainE = document.getElementById("main");
    mainE.addEventListener('click', mouseClick);
    
    mainE.innerHTML = '';
 
    const profiles = [];
 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
                profiles.push(JSON.parse(JSON.stringify(data[key])));
            }
 
            let index = 1;
 
            for (const iterator of profiles) {
 
                let currE = document.createElement('div');
                currE.classList.add('profile');
 
                currE.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user${index}Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user${index}Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user1Username" value="" disabled readonly />
                <div class="user${index}Username">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user${index}Email" value="" disabled readonly />
                    <label>Age:</label>
                    <input type="email" name="user${index}Age" value="" disabled readonly />
                </div>
                
                <button>Show more</button>`;                
        
                let dataE = currE.getElementsByTagName('input');
                let divUserData = currE.getElementsByClassName(`user${index}Username`)[0];
                        
                
                dataE[2].value = iterator.username; 
                dataE[3].value = iterator.email;
                dataE[4].value = Number(iterator.age);
 
                divUserData.style.display = 'none';
        
                mainE.appendChild(currE);
                index++;        
            }
        })
        .catch(error => console.log(error));
 
    function mouseClick(e) {
        let targetElement = e.target;
 
        if (targetElement.tagName == 'BUTTON') {
            let parentElement = targetElement.parentNode;
            let radioButtonElements = Array.from(parentElement.getElementsByTagName('input'));
            let isUnlock = false;
            let index = 0;
 
            while (index < radioButtonElements.length && !isUnlock) {
                let iterrator = radioButtonElements[index];
 
                if (iterrator.type == 'radio' && iterrator.value == 'unlock' && iterrator.checked) {
                    isUnlock = true;
                }
 
                index++;
            }
 
            if (isUnlock) {
                let profileInfoElement = parentElement.getElementsByTagName('div')[0];
 
                if (targetElement.textContent == 'Show more') {
                    profileInfoElement.style.display = 'inline';
                    targetElement.textContent = 'Hide it';
                } else {
                    profileInfoElement.style.display = 'none';
                    targetElement.textContent = 'Show more';
                }
            }
        }
    }
}