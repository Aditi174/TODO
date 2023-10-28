const input = document.getElementById("inputs");
const whole = document.getElementById("item");
const add_button = document.getElementById("button");
let array = JSON.parse(localStorage.getItem("keys")) || [];

add_button.addEventListener("click",() => {
    const user_input = input.value;
    array.push(user_input);

    localStorage.setItem("keys",JSON.stringify(array));

    

    input.value = ""

    display()
})

function display(){

    for(const i of array){
        const list = document.createElement("li");
        list.textContent = i;

        whole.appendChild(list);

    }
}

display()


