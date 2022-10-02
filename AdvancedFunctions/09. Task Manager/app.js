function solve() {
    let open = document.getElementsByTagName('section')[1];
    let inProgress = document.getElementsByTagName('section')[2];
    let complete = document.getElementsByTagName('section')[3];

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('date');
    let btnAdd = document.getElementById('add');

    function createElement(type, text, className) {
        let result = document.createElement(type);

        result.textContent = text;

        if (className) {
            result.className = className;
        }
        return result;
    }

    btnAdd.addEventListener('click', e => {
        e.preventDefault();

        if (task.value == '' || description.value == '' || dueDate.value == '') {
            return;
        };

        let article = createElement('article');
        let h3 = createElement('h3', task.value);
        let pDescription = createElement('p', 'Description: ' + description.value);
        let pDueDate = createElement('p', 'Due Date: ' + dueDate.value);
        let flexClass = createElement('div', undefined, 'flex');
        let greenButton = createElement('button', 'Start', 'green')
        let redButton = createElement('button', 'Delete', 'red');

        flexClass.appendChild(greenButton);
        flexClass.appendChild(redButton);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDueDate);
        article.appendChild(flexClass);

        open.children[1].appendChild(article);

        task.value = '';
        description.value = '';
        dueDate.value = '';

        redButton.addEventListener('click', e => {
            article.remove();
        });


        greenButton.addEventListener('click', e => {
            inProgress.children[1].appendChild(article);
            let finishButton = createElement('button', 'Finish', 'orange');
            greenButton.remove();
            flexClass.appendChild(finishButton);

            finishButton.addEventListener('click', e => {
                complete.children[1].appendChild(article);
                flexClass.remove();
            })
        })
    })
}