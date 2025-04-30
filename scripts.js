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