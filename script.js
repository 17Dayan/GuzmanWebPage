// Mostrar el formulario emergente 
function showForm() {
    document.getElementById('testimonial-form').style.display = 'flex';
}

// Cerrar el formulario emergente
function closeForm() {
    document.getElementById('testimonial-form').style.display = 'none';
}

// Cargar testimonios desde Local Storage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    loadTestimonials();

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    AOS.init({
        duration: 1000, // Duración de la animación
        easing: "ease-in-out",
        once: true, // Para que solo se active una vez
    });
});

// Función para agregar un nuevo testimonio y guardarlo en Local Storage
function addTestimonial() {
    let name = document.getElementById('name').value;
    let imageUrl = document.getElementById('image-url').value;
    let testimonialText = document.getElementById('testimonial').value;

    if (name && imageUrl && testimonialText) {
        let newTestimonial = {
            name: name,
            imageUrl: imageUrl,
            text: testimonialText
        };

        // Obtener testimonios guardados y agregar el nuevo
        let testimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
        testimonials.push(newTestimonial);
        localStorage.setItem("testimonials", JSON.stringify(testimonials));

        // Mostrar el nuevo testimonio en la página
        displayTestimonial(newTestimonial);

        // Limpiar el formulario
        document.getElementById('name').value = "";
        document.getElementById('image-url').value = "";
        document.getElementById('testimonial').value = "";

        // Cerrar el formulario
        closeForm();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para cargar testimonios guardados desde Local Storage
function loadTestimonials() {
    let testimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
    testimonials.forEach(displayTestimonial);
}

// Función para mostrar un testimonio en la página
function displayTestimonial(testimonial) {
    let wrapper = document.querySelector('.wrapper');

    let container = document.createElement('div');
    container.classList.add('container');

    container.innerHTML = `
        <div class="profile">
            <div class="imgBox">
                <img src="${testimonial.imageUrl}" alt="">
            </div>
            <h2>${testimonial.name}</h2>
        </div>
        <p><span class="fa fa-quote-left left"></span>${testimonial.text}<span class="fa fa-quote-right right"></span></p>
        <div class="social">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-instagram"></i>
        </div>
    `;

    wrapper.appendChild(container);
}


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
AOS.init({
    duration: 1000, // Duración de la animación
    easing: "ease-in-out",
    once: true, // Para que solo se active una vez
});

