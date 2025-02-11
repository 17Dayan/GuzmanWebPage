// Mostrar el formulario emergente
function showForm() {
    document.getElementById('testimonial-form').style.display = 'flex';
}

// Cerrar el formulario emergente
function closeForm() {
    document.getElementById('testimonial-form').style.display = 'none';
}

// Agregar un nuevo testimonio
function addTestimonial() {
    let name = document.getElementById('name').value;
    let imageUrl = document.getElementById('image-url').value;
    let testimonialText = document.getElementById('testimonial').value;

    if (name && imageUrl && testimonialText) {
        let newTestimonial = document.createElement('div');
        newTestimonial.classList.add('container');

        newTestimonial.innerHTML = `
            <div class="profile">
                <div class="imgBox">
                    <img src="${imageUrl}" alt="">
                </div>
                <h2>${name}</h2>
            </div>
            <p><span class="fa fa-quote-left left"></span>${testimonialText}<span class="fa fa-quote-right right"></span></p>
            <div class="social">
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-instagram"></i>
            </div>
        `;

        // Asegurar que el testimonio se agregue al contenedor correcto
        document.querySelector('.wrapper').appendChild(newTestimonial);
        
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

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}