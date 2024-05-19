// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// alert("hello!");
// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//     alert("我最喜欢巧克力冰淇淋了。");
// } else {
//     alert("但是巧克力才是我的最爱呀……");
// }
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }
// let myVariable = document.querySelector("h1");
// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕疼。");
// });

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "image/test.jpg") {
        myImage.setAttribute("src", "image/firefox2.jpg");
    } else {
        myImage.setAttribute("src", "image/test.jpg");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "我的小宝贝是，" + myName;
    }

}


if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "我的小宝贝是，" + storedName;
}

myButton.onclick = () => {
    setUserName();
};
