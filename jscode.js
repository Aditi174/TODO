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

        icon.addEventListener('click', () => {
            deleteItem(i);
        });

        whole.appendChild(list);
    }
}

function deleteItem(i) {
    // Remove the specified item from the array  and item is a parameter that represents each individual element in the array as the filter() method iterates through the array.
    array = array.filter(item => item !== i) ;

    
    localStorage.setItem("keys", JSON.stringify(array));

    display();
}

display();



