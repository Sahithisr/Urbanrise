//arrow container animation/
window.addEventListener('scroll', function () {
    const arrowContainer = document.querySelector('.arrow-container-mobile');
    if (window.scrollY > 0) {
        arrowContainer.classList.add('hidden'); // Add the 'hidden' class on scroll
    } else {
        arrowContainer.classList.remove('hidden'); // Remove the 'hidden' class when scrolled to top
    }
});

//js code to open popup-form/
// JavaScript function to open the form
function openForm() {
    document.querySelector('.popup-form').style.display = 'flex'; // Set the form to display as flex
    document.querySelector('.popup-overlay').style.display = 'block'; // Display the overlay
}

// JavaScript function to close the form
function closeForm() {
    document.querySelector('.popup-form').style.display = 'none'; // Hide the form
    document.querySelector('.popup-overlay').style.display = 'none'; // Hide the overlay
}


//text, svg animation/
document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Define SVG elements and other DOM elements
    var panels = document.querySelectorAll('.panel-mobile');
    var svgs = [svg1, svg2, svg3, svg4, svg5, svg6];
    var heading = document.getElementById('heading');
    var description = document.getElementById('description');
    var learnMoreBtn = document.getElementById('learn-more');
    var launchBtn = document.getElementById('launch');
    var containerMobile = document.getElementById('container-mobile');
    var formPopup = document.getElementById('form-popup');
    var closedButton = document.querySelector('.closed-button');
    var closedButtonbtn = document.querySelector('.closed-button-btn-mobile');
				var footerPopup = document.getElementById('footer-popup');
    var descriptionElement = document.getElementById('description-element'); // Target description container

                // This function updates the description
                function updateDescription(index) {
                    descriptionElement.innerHTML = descriptions[index];
                }
                
                
    var icons = [
        document.getElementById('icon1'),
        document.getElementById('icon2'),
        document.getElementById('icon3'),
        document.getElementById('icon4'),
        document.getElementById('icon5'),
    ];
    var iconsub = [
        document.getElementById('iconsub1'),
        document.getElementById('iconsub2'),
        document.getElementById('iconsub3'),
        document.getElementById('iconsub4'),
        document.getElementById('iconsub5'),
    ];

    function updateChecklist() {
        // Create checklist HTML
        const checklistHtml = checklistItems.map((item, index) => `
            <label style="display: flex;color:#012e5d; font-size:18px; align-items: center;">
                <input type="checkbox" id="checkbox-${index}" data-index="${index}" style="margin-right: 8px;">
                <span>${item}</span>
            </label>
        `).join('');
    
        // Add checklist HTML to the description element
        description.innerHTML = `<div class="checklist" style="font-size:20px;">${checklistHtml}</div>`;
    
        // Select all checkboxes and add event listeners
        const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    selectedCount++;
                } else {
                    selectedCount--;
                }
                if (selectedCount === maxSelections) {
                    launchBtn.disabled = false;
                    launchBtn.classList.add('launch-button-animation'); // Add animation class
                } else {
                    launchBtn.disabled = true;
                    launchBtn.classList.remove('launch-button-animation'); // Remove animation class
                }
                // Enable button if 3 selections are made
                launchBtn.disabled = selectedCount < maxSelections;
            });
        });
    }
    
    function animateSvgAndIcon(svgIndex, iconIndex) {
        // Fade out all SVGs
        gsap.to(svgs, { opacity: 0, y: 0 });
        gsap.to(icons, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
          });
    
        // Check if svgIndex is 1 to target svg2 specifically
        if (svgIndex === 1) {
          gsap.to(svg2, { opacity: 1, y: -18, duration:0.5}); // Fade in svg2 with upward movement
        } else {
          gsap.to(svg2, { opacity: 0, y: 0, duration: 0 }); // Ensure svg2 disappears instantly
          gsap.to(svgs[svgIndex], { opacity: 1, y: 0, duration: 0.5 }); // Fade in the selected SVG
        }
    
        // Reset box shadow for icons
        gsap.to(iconsub, {
          boxShadow: "none",
        });
    
        // Animate the selected icon
        if (iconIndex < icons.length) {
          gsap.to(icons[iconIndex], {
            opacity: 1,
            scale: 1.2, // Ensures icon scaling
            duration: 0.5,
          });
          gsap.to(iconsub[iconIndex], {
            opacity: 1,
            scale: 1.02, // Ensures icon scaling
            duration: 0.5,
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
          });
        }
      }
    // Launch button click handler

    launchBtn.addEventListener("click", function () {
        // First change the image and text
        containerMobile.style.backgroundImage = "url('./images/mobile-banner-last.png')";
        containerMobile.style.backgroundSize = "100% 100%";
        containerMobile.style.backgroundAttachment = "center"; 

      

        // Set the HTML content with "Launching" and the loader
        description.innerHTML = `
      <span style="font-size:24px; font-weight:500; color:#000000;">Launching</span>
      <div class="loader" style="display: inline-flex; margin-left: 10px;">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
        <div class="dot dot-4"></div>
        <div class="dot dot-5"></div>
      </div>
    `;
    
        // Add the CSS for the loader
        const style = document.createElement("style");
        style.innerHTML = `
    .loader {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    
    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 6px;
      border-radius: 50%;
      animation: dot-pulse2 1.5s ease-in-out infinite;
    }
    
    .dot-1 { background-color: #000000; animation-delay: 0s; }
    .dot-2 { background-color: #000000; animation-delay: 0.3s; }
    .dot-3 { background-color: #000000; animation-delay: 0.6s; }
    .dot-4 { background-color: #000000; animation-delay: 0.9s; }
    .dot-5 { background-color: #000000; animation-delay: 1.2s; }
    
    @keyframes dot-pulse2 {
      0% { transform: scale(0.5); opacity: 0.5; }
      50% { transform: scale(1); opacity: 1; }
      100% { transform: scale(0.5); opacity: 0.5; }
    }
    `;
        document.head.appendChild(style);
    
        // Use setTimeout to add a short delay before starting the animation
        setTimeout(function () {
          gsap.to([svgs[5]], {
            y: "-300%",
            duration: 6.0, // Duration of rocket going up
            ease: "power2.out",
            onStart: function () {
              // Change the text as the rocket starts moving up
              setTimeout(function () {
                description.innerHTML =
                  '<span style="font-size:24px; font-weight:500;color:#000000;">Your Business has been Launched</span>';
              }, 2000); // Change the text after 2 seconds of the rocket moving
            },
            onComplete: function () {
              // After the rocket finishes its animation, hide the button and show the form
              launchBtn.style.display = "none"; // Hide launch button
              setTimeout(function () {
                formPopup.style.display = "block"; // Show form
              }, 500);
    
              setTimeout(function () {
                footerPopup.style.display = "block"; // Show footer popup
              }, 500);
            },
          });
        }, 300); // Reduced the initial delay before rocket starts to 300ms // Delay the animation by 1000ms to allow the image to change
    
        formPopup.style.display = "none";
        footerPopup.style.display = "none;";
        launchBtn.style.display = "none";
      });

    const checklistItems = [
                        "Startup Registration Go",
                        "Legal Registration Go",
                        "Online Presence Go"
                    ];
   
                    // Track checklist selections
                    let selectedCount = 0;
                    const maxSelections = 3;  


    closedButton.addEventListener('click', function () {
        // Hide the footer popup container on click
        footerPopup.style.display = 'none';
    });
    closedButton.addEventListener("click", function () {
        // Hide the footer popup container on click
        footerPopup.style.display = "none";
        
        // Delay the page reload by 3 seconds (3000 milliseconds)
        setTimeout(() => {
            location.reload(); // This reloads the current page
        }, 500); // 3000 milliseconds = 3 seconds
    });
 
    // Learn More button click handler
    learnMoreBtn.addEventListener('click', function () {
        gsap.to([svgs[4]], {
            duration: 1,
            ease: 'power2.out',
        });
    });

    // ScrollMagic: Animate SVGs and content based on scroll
    panels.forEach(function (panel, index) {
        new ScrollMagic.Scene({
            triggerElement: panel,
            triggerHook: 0.5,
            duration: '100%',
        })
            .on('enter', function () {
                if (index < 5) {
                    // Update heading, description, and SVGs based on scroll index
                    heading.style.display = 'block';
                    let text = '';
                    switch (index) {
                        case 0:
                            text = 'Startup Registration';
                            description.innerHTML =
                                '<img src="./images/1-1.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> Company Registartion</span> <img src="./images/1-2.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> LLP Registartion</span> <img src="./images/1-3.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;">Partnership Registartion</span>';
                            break;
                        case 1:
                            text = 'Legal Registration';
                            description.innerHTML =
                                '<img src="./images/2-1.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> GST</span> <img src="./images/2-2.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> Professional <br/>Tax</span><img src="./images/2-3.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> ESI </span>';
                            break;
                        case 2:
                            text = 'Online Presence';
                            description.innerHTML =
                                '<img src="./images/3-1.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> Website<br/> Design</span> <img src="./images/3-2.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> Logo<br/>Design</span> <img src="./images/3-3.png" alt="Icon Description 1" class="icon-img"><span style="margin-left:10px;margin-right:20px;"> Branding</span> <img src="./images/3-4.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> Digital<br/>Marketing</span> ';
                            break;
                        case 3:
                            text = 'Compliances';
                            description.innerHTML =
                                '<img src="./images/4-1.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> Legal</span> <img src="./images/4-2.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> Annual<br/>Compliances</span> <img src="./images/4-3.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> Returns Fillings</span>';
                            break;
                        case 4:
                            text = 'Business Operations';
                            description.innerHTML =
                                '<img src="./images/5-1.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> Payroll</span> <img src="./images/5-2.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;"> Accounting</span> <img src="./images/5-3.png" alt="Icon Description 1" class="icon-img"><span style="margin-right:20px;">Sales</span>';
                            break;
                       
                    }
                    heading.innerHTML = text;

                    learnMoreBtn.style.display = 'block';
                    learnMoreBtn.innerHTML =
                        'Learn More <i class="fa-solid fa-arrow-right" style="margin-left:10px;font-size:20px;"></i>';
                    launchBtn.style.display = 'none';

                    // Animate SVGs and ensure icon5 is enlarged from svg5 to svg8
                    if (index >= 4 && index <= 5) {
                        animateSvgAndIcon(index, 4); // Keep icon5 enlarged for svg5 to svg8
                    } else {
                        animateSvgAndIcon(index, index); // Default animation for others
                    }
                } else if (index === 5) {
                        // For the final panel, show checklist
                        heading.style.display = 'none';
                        animateSvgAndIcon(5, 4);
                        updateChecklist();  // Call the checklist function for index 5
                        launchBtn.style.display = 'block';
                        launchBtn.innerHTML =
                            '<button> <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"fill="currentColor"></path></svg><span>Ready to Launch</span></button>';
                        learnMoreBtn.style.display = 'none';
                        launchBtn.disabled = true;  // Disable button initially
                    }
                })
            .addTo(controller);
    });
}); 

//open form onclick on free consultation//
	// Function to open the form
    function openForm() {
        document.getElementById('form-popup').style.display = 'block';
        document.getElementById('popup-overlay').style.display = 'block';
    }

    // Function to close the form
    function closeForm() {
        document.getElementById('form-popup').style.display = 'none';
        document.getElementById('popup-overlay').style.display = 'none';
    } 

// // js  code to avoid double scrolling 
// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".panel").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top top",
//         end: "bottom top",
//         pin: true,
//         scrub: true, // Enables smooth scrolling
//     });
// });

