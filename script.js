document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
  
    let isValid = true;
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
  git
    if (name === "") {
      document.getElementById("nameError").textContent = "Nombre no puede estar vacío";
      isValid = false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Correo Electrónico no puede estar vacío";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Parece que esto no es un correo electrónico";
      isValid = false;
    }
  
    
    if (message === "") {
      document.getElementById("messageError").textContent = "Mensaje no puede estar vacío";
      isValid = false;
    }
  
    if (isValid) {
      alert("Formulario enviado correctamente");
      
      document.getElementById("contactForm").reset();
    }
  });
  