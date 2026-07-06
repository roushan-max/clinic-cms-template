fetch("content/site.json")
  .then(response => response.json())
  .then(data => {

    document.getElementById("clinicName").textContent = data.clinicName;

    document.getElementById("tagline").textContent = data.tagline;

    document.getElementById("phone").textContent = "Phone: " + data.phone;

    document.getElementById("email").textContent = "Email: " + data.email;

    document.getElementById("address").textContent = data.address;

    document.getElementById("aboutTitle").textContent =
      data.aboutTitle;

    document.getElementById("aboutDescription").textContent =
      data.aboutDescription;

    document.getElementById("heroImage").src =
      data.heroImage;

    document.getElementById("clinicVideo").src =
      data.video;





    // SERVICES

    const services =
      document.getElementById("servicesContainer");

    data.services.forEach(service => {

      services.innerHTML += `
        <div class="card">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
      `;

    });





    // DOCTORS

    const doctors =
      document.getElementById("doctorContainer");

    data.doctors.forEach(doc => {

      doctors.innerHTML += `
        <div class="doctor-card">

            <img src="${doc.photo}" alt="${doc.name}">

            <h3>${doc.name}</h3>

            <p>${doc.qualification}</p>

            <p>${doc.experience}</p>

        </div>
      `;

    });





    // GALLERY

    const gallery =
      document.getElementById("galleryContainer");

    data.gallery.forEach(photo => {

      gallery.innerHTML +=
      `<img src="${photo}" class="gallery-img">`;

    });





    // TESTIMONIALS

    const reviews =
      document.getElementById("testimonialContainer");

    data.testimonials.forEach(review => {

      reviews.innerHTML += `

        <div class="review">

            <h4>${review.name}</h4>

            <p>${review.review}</p>

        </div>

      `;

    });

});
