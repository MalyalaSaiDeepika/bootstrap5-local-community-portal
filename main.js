console.log("Portal Loaded Successfully");

/* =========================
   REGISTER BUTTON LOGIC
========================= */

document.querySelectorAll(".register").forEach(btn => {
    btn.addEventListener("click", function () {

        let seatId = this.getAttribute("data-seat");
        let seatElement = document.getElementById(seatId);

        let seats = parseInt(seatElement.innerText);

        if (seats <= 0) {
            alert("❌ No seats available");
            return;
        }

        seatElement.innerText = seats - 1;

        let eventName = this.closest(".card").querySelector("h5").innerText;

        document.getElementById("eventSelect").value = eventName;

        document.getElementById("regForm").scrollIntoView({
            behavior: "smooth"
        });

        alert("🎟️ Seat reserved! Please complete registration.");
    });
});


/* =========================
   FORM SUBMISSION (100% FIXED)
========================= */

document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let event = document.getElementById("eventSelect").value;
    let terms = document.getElementById("terms").checked;

    // validation
    if (!name || !email || !username || !event) {
        alert("⚠️ Please fill all details");
        return;
    }

    if (!email.includes("@")) {
        alert("⚠️ Enter valid email");
        return;
    }

    if (!terms) {
        alert("⚠️ Accept terms first");
        return;
    }

    alert("🎉 Registration Successful for " + event);

    this.reset();
});


/* =========================
   FEEDBACK
========================= */

function submitFeedback() {
    let feedback = document.getElementById("feedback").value.trim();

    if (!feedback) {
        alert("⚠️ Write feedback first");
        return;
    }

    alert("🙏 Thanks for feedback!");
    document.getElementById("feedback").value = "";
}