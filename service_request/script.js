document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const notes = document.getElementById("notes").value.trim();

    if (!name || !email || !service) {
      alert("Please fill out all required fields.");
      return;
    }

    // Simulate success
    alert("Request submitted successfully ✅");

    // Log form data (for dev only)
    console.log({
      name,
      email,
      service,
      date,
      notes,
    });

    // Reset the form
    form.reset();
  });
});
