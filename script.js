if (location.href.startsWith('https://www.linkedin.com/in/'))
    setTimeout(main, 3000)

let url = location.href;

setTimeout(check, 1000)

function check() {
    if (url !== location.href) {
        if (document.getElementById("buttonCopy") !== null)
            document.getElementById("buttonCopy").remove();
        if (location.href.startsWith('https://www.linkedin.com/in/')) {
            setTimeout(main, 3000)
            url = location.href;
        }
    }
}

document.body.addEventListener('click', () => {
    requestAnimationFrame(() => {
        console.log("change url")
        setTimeout(check, 1000)
    });
}, true);


function main() {
    let DATA
    let about
    let exp
    let education

    let trash = document.querySelectorAll(".visually-hidden")

    trash.forEach(el => el.remove())

    let blockName = document.querySelector(".pv-text-details__left-panel")

    let name = blockName.querySelector("h1").textContent

    let blockAbout = document.getElementById('about');

    if (blockAbout) {
        let section = blockAbout.closest('section');

        about = section.innerText
    }

    let blockExp = document.getElementById('experience');

    if (blockExp) {

        let sectionExp = blockExp.closest('section');

        exp = sectionExp.innerText;
    }

    let blockEducation = document.getElementById('education');

    if (blockEducation) {
        let sectionEducation = blockEducation.closest('section');

        education = sectionEducation.innerText
    }

    DATA = name + "\n\n"
    if (typeof about !== "undefined")
        DATA += about + "\n\n"
    if (typeof exp !== "undefined")
        DATA += exp + "\n\n"
    if (typeof education !== "undefined")
        DATA += education + "\n\n"

    console.log(DATA)

    document.getElementById("global-nav").insertAdjacentHTML('beforeend', '<button id="buttonCopy">Copy</button>')

    document.getElementById("buttonCopy").addEventListener("click", () => {
        let alert = document.createElement("div");
        alert.className = "alert";
        alert.id = "alert";
        alert.innerText = "The profile data is successfully copied to clipboard."
        document.getElementById("global-nav").appendChild(alert);
        let copyTextarea = document.createElement("textarea");
        copyTextarea.style.position = "fixed";
        copyTextarea.style.opacity = "0";
        copyTextarea.textContent = DATA;

        document.body.appendChild(copyTextarea);
        copyTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(copyTextarea);

        setTimeout(()=> {
            document.getElementById("alert").remove();
        }, 2000)
    })
}






