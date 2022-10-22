window.addEventListener("load", solve);

function solve() {
  let nameField = document.getElementById("first-name");
  let lastnameField = document.getElementById("last-name");
  let ageField = document.getElementById("age");
  let titleField = document.getElementById("story-title");
  let genreField = document.getElementById("genre");
  let storyField = document.getElementById("story");

  let publBtn = document.getElementById("form-btn");
  publBtn.addEventListener("click", publishFunc);

  let ul = document.getElementById("preview-list");



  function publishFunc(e) {
    let nameValue = nameField.value;
    let lastNameValue = lastnameField.value;
    let ageValue = ageField.value;
    let titleValue = titleField.value;
    let genreValue = genreField.value;
    let storyValue = storyField.value;

    if (!nameValue || !lastNameValue || !ageValue || !titleValue || !storyValue) {
      return;
    }

    let li = document.createElement("li");
    li.setAttribute("class", "story-info");

    let art = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.textContent = `Name: ${nameValue} ${lastNameValue}`;

    let parForAge = document.createElement("p");
    parForAge.textContent = `Age: ${ageValue}`;

    let parForTitle = document.createElement("p");
    parForTitle.textContent = `Title: ${titleValue}`;

    let parForGenre = document.createElement("p");
    parForGenre.textContent = `Genre: ${genreValue}`;

    let parForStory = document.createElement("p");
    parForStory.textContent = `${storyValue}`;

    let saveStoryBtn = document.createElement("button");
    saveStoryBtn.setAttribute("class", "save-btn");
    saveStoryBtn.textContent = `Save Story`;
    saveStoryBtn.addEventListener("click", saveStory);

    let editStoryBtn = document.createElement("button");
    editStoryBtn.setAttribute("class", "edit-btn");
    editStoryBtn.textContent = `Edit Story`;
    editStoryBtn.addEventListener("click", editFunc);

    let deleteStoryBtn = document.createElement("button");
    deleteStoryBtn.setAttribute("class", "delete-btn");
    deleteStoryBtn.textContent = `Delete Story`;
    deleteStoryBtn.addEventListener("click", deleteFunc);

    art.appendChild(h4);
    art.appendChild(parForAge);
    art.appendChild(parForTitle);
    art.appendChild(parForGenre);
    art.appendChild(parForStory);
    li.appendChild(art);
    li.appendChild(saveStoryBtn);
    li.appendChild(editStoryBtn);
    li.appendChild(deleteStoryBtn);

    ul.appendChild(li);


    nameField.value = "";
    lastnameField.value = "";
    ageField.value = "";
    titleField.value = "";
    storyField.value = "";
    publBtn.disabled = true;

  }

  function editFunc(e) {
    let nameToReturn = e.target.parentElement.children[0].children[0].textContent;
    let [i, firstName, lastName] = nameToReturn.split(" ");
    nameField.value = firstName;
    lastnameField.value = lastName;

    let ageToReturn = e.target.parentElement.children[0].children[1].textContent;
    let [x, age] = ageToReturn.split(" ");
    ageToReturn = age;

    let titleToReturn = e.target.parentElement.children[0].children[2].textContent;
    titleToReturn = titleToReturn.substring(7);


    let genreToReturn = e.target.parentElement.children[0].children[3].textContent;
    genreToReturn = genreToReturn.substring(7);

    let storyToReturn = e.target.parentElement.children[0].children[4].textContent;


    ageField.value = ageToReturn;
    titleField.value = titleToReturn;
    storyField.value = storyToReturn;
    genreField.value = genreToReturn;

    publBtn.disabled = false;
    e.target.parentElement.children[1].disabled = true;
    e.target.parentElement.children[2].disabled = true;
    e.target.parentElement.children[3].disabled = true;
    e.target.parentElement.remove();

  }

  function saveStory(e) {
    document.getElementsByClassName("form-wrapper")[0].remove();
    document.getElementById("side-wrapper").remove();

    let h1 = document.createElement("h1");
    h1.textContent = "Your scary story is saved!";
    let main = document.getElementById("main");
    main.appendChild(h1);
  }

  function deleteFunc(e) {
    e.target.parentElement.remove();
    publBtn.disabled = false;
  }

}
