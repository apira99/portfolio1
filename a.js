       
       var navbar = document.querySelector(".navbar");
       
       window.onscroll = () =>{
       this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
     }
      
      const navMenu = document.querySelector(".menu");
      navToggle = document.querySelector(".menu-btn");
      if(navToggle)
      {
          navToggle.addEventListener("click", () =>
          {
              navMenu.classList.toggle("active");
          })
      }
      
      const navLink = document.querySelectorAll(".nav-link");
      function linkAction()
      {
          const navMenu = document.querySelector(".menu");
          navMenu.classList.remove("active")
      }
      navLink.forEach(n => n.addEventListener("click", linkAction))
      

      const Section=document.querySelectorAll('section[id]')
      function scrollActive()
      {
          const scrollY = window.pageYOffset
          Section.forEach(current => {
              const sectionHeight = current.offsetHeight
              const sectionTop = current.offsetTop - 50;
              sectionId = current.getAttribute('id')
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
              {
                  document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
              }
              else
              {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
              }
          })
      }
      window.addEventListener('scroll', scrollActive)
      
      const skills_wrap = document.querySelector(".about-skills"),
      skills_bar = document.querySelectorAll(".progress-line");
      window.addEventListener("scroll", () => {
          skillsEffect();
      })
      
      function checkScroll(el)
      {
          
          let rect = el.getBoundingClientRect();

          if(window.innerHeight >= rect.top + el.offsetHeight) return true;
          return false;
      }
      function skillsEffect()
      {
          if(!checkScroll(skills_wrap)) return;
          skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
      }
      
      const FilterContainer = document.querySelector(".portfolio-filter"),
            filterBtns = FilterContainer.children;
            totalFilterBtn = filterBtns.length;
            PortfolioItems = document.querySelectorAll(".portfolio-item"),
            totalportfolioItem = PortfolioItems.length;
            for(let i=0; i < totalFilterBtn; i++)
            {
                filterBtns[i].addEventListener("click", function()
                {
                    FilterContainer.querySelector(".active").classList.remove("active");
                    this.classList.add("active");
                    const filterValue = this.getAttribute("data-filter")
                    for( let k=0; k<totalportfolioItem; k++)
                    {
                        if(filterValue === PortfolioItems[k].getAttribute("data-category"))
                        {
                            PortfolioItems[k].classList.remove("hide");
                            PortfolioItems[k].classList.add("show");
                        }
                        else
                        {
                            PortfolioItems[k].classList.remove("show");
                            PortfolioItems[k].classList.add("hide");
                        }
                        if(filterValue === "all")
                        {
                            PortfolioItems[k].classList.remove("hide");
                            PortfolioItems[k].classList.add("show");
                        }
                    }
                })
            }
        
        const lightbox = document.querySelector(".lightbox"),
                  lightboxImg = lightbox.querySelector(".lightbox-img"),
                  lightboxClose = lightbox.querySelector(".lightbox-close"),
                  lightboxText = lightbox.querySelector(".caption-text"),
                  lightboxCounter = lightbox.querySelector(".caption-counter");
                  let itemIndex = 0;
                  for(let i=0; i<totalportfolioItem; i++)
                  {
                     PortfolioItems[i].addEventListener("click", function()
                     {
                         itemIndex=i;
                         changeItem();
                         toggleLightbox();
                     })
                  }
                  function nextItem()
                  {
                      if(itemIndex == totalportfolioItem-1)
                      {
                          itemIndex=0;
                      }
                      else
                      {
                          itemIndex++
                      }
                      changeItem();
                  }
                  function prevItem()
                  {
                      if(itemIndex == 0)
                      {
                          itemIndex=totalportfolioItem-1;
                      }
                      else
                      {
                          itemIndex--
                      }
                      changeItem();
                  }
                  function toggleLightbox()
                  {
                      lightbox.classList.toggle("open");
                  }
                  function changeItem()
                  {
                      imgSrc = PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
                      lightboxImg.src=imgSrc;
                      lightboxText.innerHTML=PortfolioItems[itemIndex].querySelector("h4").innerHTML;
                      lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalportfolioItem;
                  }
                  
                  lightbox.addEventListener("click",function(event)
                  {
                     if(event.target === lightboxClose || event.target === lightbox)
                     {
                        toggleLightbox()
                     }
                  })


                  function validateForm(event) {
                    event.preventDefault();
                    
                    // Reset error messages
                    clearErrors();
                  
                    // Validate name
                    const nameInput = document.getElementById("name");
                    if (nameInput.value === "") {
                      displayError(nameInput, "Name is required");
                      return;
                    }
                  
                    // Validate email
                    const emailInput = document.getElementById("email");
                    if (emailInput.value === "") {
                      displayError(emailInput, "Email is required");
                      return;
                    }
                    if (!validateEmail(emailInput.value)) {
                      displayError(emailInput, "Invalid email format");
                      return;
                    }
                  
                    // Validate message
                    const messageInput = document.getElementById("message");
                    if (messageInput.value === "") {
                      displayError(messageInput, "Message is required");
                      return;
                    }
                  
                    // Form is valid, submit the form
                    document.getElementById("contactForm").submit();
                  }
                  
                  function displayError(inputElement, errorMessage) {
                    const errorElement = document.createElement("span");
                    errorElement.className = "error";
                    errorElement.innerText = errorMessage;
                  
                    inputElement.classList.add("error");
                    inputElement.parentNode.appendChild(errorElement);
                  }
                  
                  function clearErrors() {
                    const errorMessages = document.querySelectorAll(".error");
                    errorMessages.forEach((errorMessage) => {
                      errorMessage.parentNode.removeChild(errorMessage);
                    });
                  
                    const errorInputs = document.querySelectorAll(".error");
                    errorInputs.forEach((errorInput) => {
                      errorInput.classList.remove("error");
                    });
                  }
                  
                  function validateEmail(email) {
                    // Email validation regex
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(email);
                  }
                  