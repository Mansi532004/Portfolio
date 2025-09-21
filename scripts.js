var tablinks = document.getElementsByClassName("tab-links"); // Get all tab links
    var tabcontent = document.getElementsByClassName("tab-content"); // Get all tab content

    function opentab(event, tabname) { // Function to open a specific tab
        for (tablink of tablinks) { 
            tablink.classList.remove("active-link"); // Loop through all tablinks and remove active class from all links
        }
        for (tabcont of tabcontent) {
            tabcont.classList.remove("active-tab"); // Loop through all tab content and remove active class from all content
        }
        event.currentTarget.classList.add("active-link"); // Add active class to the clicked link
        document.getElementById(tabname).classList.add("active-tab"); // Add active class to the corresponding content
    }

window.addEventListener('scroll', function() {
    const backToHome = document.querySelector('.back-to-home');
    const homeSection = document.getElementById('home');
    const homeHeight = homeSection.offsetHeight;

    if (window.scrollY > homeHeight - 50) {
        backToHome.classList.add('visible');
    } else {
        backToHome.classList.remove('visible');
    }
});

const menuToggle = document.getElementById('menu');
const sidemenu = document.getElementById('sidemenu');

menuToggle.addEventListener('click', function() {
    sidemenu.classList.toggle('open');
    // Toggle icon between bars and xmark
    if (sidemenu.classList.contains('open')) {
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-circle-xmark');
    } else {
        menuToggle.classList.remove('fa-circle-xmark');
        menuToggle.classList.add('fa-bars');
    }
});

// Optional: Close menu when a link is clicked (for better UX)
document.querySelectorAll('#sidemenu a').forEach(link => {
    link.addEventListener('click', () => {
        sidemenu.classList.remove('open');
        menuToggle.classList.remove('fa-circle-xmark');
        menuToggle.classList.add('fa-bars');
    });
});

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyeyTvwXroY7sdZOug9f1fRAuN9ZJwhj9pIdj377E3MdlJuvGUc8QSpVKDF_8F95w8/exec'
    const form = document.forms['contact-form']

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
            if (response.ok) {
                form.reset(); // Clear the form fields
                const msg = document.getElementById('form-message'); // Show confirmation
                msg.classList.add('visible');
                setTimeout(() => {
                    msg.classList.remove('visible');
                }, 2000);
                console.log('Success!', response);
            } 
            else {
                console.error('Error! Response not OK');
            }
        })
        .catch(error => console.error('Error!', error.message));
});