let bookButton = document.querySelector("#book");
let buttons = document.querySelectorAll("#desks button");

bookButton.addEventListener("click", (e) => {
    selectedDesks.forEach(desk => {
        let index = desk.getAttribute("data-desk");
        seatVacancy[index] = 0
        desk.classList.remove("border", "border-success", "border-warning")
        desk.children[0].classList.remove("text-success", "text-warning")
        desk.classList.add("booked")
        bookedDesks.push[desk]
    })
    selectedDesks = []
    let newAvailable = 0
    let newPartial = 0
    seatVacancy.forEach(status => {
        if (status === 1)
            newAvailable++
        else if (status === 2)
            newPartial++
    });
    zones[6].available = newAvailable
    zones[6].partial = newPartial
})

buttons.forEach((button, index) => {
    switch (seatVacancy[index]) {
        case 0:
            button.innerHTML = '<i class="fa-solid fa-xmark"></i>'
            button.classList.add("btn-secondary")
            button.setAttribute("disabled", true)
            break;
        case 1:
            button.innerHTML = '<i class="fa-solid fa-check"></i>'
            button.classList.add("btn-success")
            break;
        default:
            button.innerHTML = '<i class="fa-solid fa-clock"></i>'
            button.classList.add("btn-warning")
            break;
    }

    button.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-success")) {
            e.target.classList.add("border-success", "border")
            e.target.children[0].classList.add("text-success")
            e.target.classList.remove("btn-success")
            selectedDesks.push(e.currentTarget);
        } else if (e.target.classList.contains("border-success")) {
            e.target.classList.add("btn-success")
            e.target.classList.remove("border-success", "border")
            e.target.children[0].classList.remove("text-success")
            selectedDesks.remove(selectedDesks.indexOf(e.target));
        } else if (e.target.classList.contains("btn-warning")) {
            e.target.classList.add("border-warning", "border")
            e.target.classList.remove("btn-warning")
            e.target.children[0].classList.add("text-warning")
            selectedDesks.push(e.currentTarget);
        } else if (e.target.classList.contains("border-warning")) {
            e.target.classList.add("btn-warning")
            e.target.classList.remove("border-warning", "border")
            selectedDesks.remove(selectedDesks.indexOf(e.target));
            e.target.children[0].classList.remove("text-warning")
        }

    })
})
