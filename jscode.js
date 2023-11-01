const input = document.getElementById("inputs");
const whole = document.getElementById("item");
const add_button = document.getElementById("button");

let array = JSON.parse(localStorage.getItem("keys")) || [];

add_button.addEventListener("click", () => {
    const user_input = input.value;
    array.push(user_input);

    localStorage.setItem("keys", JSON.stringify(array));

    input.value = "";

    display();
});

function display() {
    whole.innerHTML = "";

    for (const i of array) {
        const list = document.createElement("li");
        list.textContent = i;

        let icon = document.createElement("i");
        icon.className = "fa-solid fa-trash";
        list.appendChild(icon);

        let editicon = document.createElement("span");
        editicon.className = "material-symbols-outlined"; 
        editicon.textContent = "edit";
        list.appendChild(editicon);



        icon.addEventListener('click', () => {
            deleteItem(i);
        });

        whole.appendChild(list);

        editicon.addEventListener('click', () => {
            edititems(i);
        })

        whole.appendChild(list)
    }
}

function deleteItem(i) {
    // Remove the specified item from the array  and item is a parameter that represents each individual element in the array as the filter() method iterates through the array.
    array = array.filter(item => item !== i);


    localStorage.setItem("keys", JSON.stringify(array));

    display();
}


function edititems(i) {
    const index = array.indexOf(i);
    const express = document.createElement("div");
    express.className = "overlay";
    document.body.appendChild(express);

    const model = document.createElement("div");
    model.className = "Model";
    document.body.appendChild(model)
    model.style.display = "block"; 

    const newinput = document.createElement("input");
    newinput.type = "text";
    newinput.value = i;


    const save_button = document.createElement("button");
    save_button.type = "submit";
    save_button.textContent = "save";


    save_button.addEventListener("click", () => {
        const updatedValue = newinput.value;
        array[index] = updatedValue;

        localStorage.setItem("keys", JSON.stringify(array));
        display();
        model.style.display = "none"; 
        express.style.opacity = 0;
    });

    model.appendChild(newinput);
    model.appendChild(save_button);
}



display();



