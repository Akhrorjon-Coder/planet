
export const clickButton = (e, img, info, active) => {
    e.preventDefault();
    const allImage = document.getElementsByClassName("image");
    for (let i = 0; i < allImage.length; i++) {
        allImage[i].style.display = "none";
    }

    const allInfo = document.getElementsByClassName("info");
    for (let i = 0; i < allInfo.length; i++) {
        allInfo[i].style.display = "none";
    }

    const allButton = document.getElementsByClassName("btn");
    for (let j = 0; j < allButton.length; j++) {
        allButton[j].className = allButton[j].className.replace(`${" "}${active}`, "");
    }

    document.querySelector(`.${info}`).style.display = "block";
    document.querySelector(`.${img}`).style.display = "block";
    e.currentTarget.className += `${" "}${active}`;
}