// APPOINTMENT FORM
document.getElementById("appointmentForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value;

    if(name === "" || email === "" || phone === "" || date === "") {
        alert("Please fill all required fields!");
        return;
    }

    let appointment = {
        name,
        email,
        phone,
        doctor: document.getElementById("doctor").value,
        date,
        message: document.getElementById("message").value
    };

    let data = JSON.parse(localStorage.getItem("appointments")) || [];
    data.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(data));

    alert("Appointment booked successfully!");
    document.getElementById("appointmentForm").reset();
});


// SCROLL ANIMATION
window.addEventListener("scroll", function() {
    document.querySelectorAll(".fade-in").forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});


// COUNTER
document.querySelectorAll(".count").forEach(counter => {
    let update = () => {
        let target = +counter.getAttribute("data-target");
        let count = +counter.innerText;
        let inc = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };
    update();
});


// LOGOUT
function logout(){
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "admin-login.html";
}


// CALLBACK POPUP
function openPopup(){
    document.getElementById("popupForm").style.display = "flex";
}

function closePopup(){
    document.getElementById("popupForm").style.display = "none";
}

function submitCallback(){
    let name = document.getElementById("cbName").value;
    let phone = document.getElementById("cbPhone").value;

    if(name === "" || phone === ""){
        alert("Fill all fields");
        return;
    }

    let data = JSON.parse(localStorage.getItem("callbacks")) || [];
    data.push({name, phone});

    localStorage.setItem("callbacks", JSON.stringify(data));

    alert("Request submitted!");
    closePopup();
}
