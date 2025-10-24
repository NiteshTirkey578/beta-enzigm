    !function ($) {
  "use strict";
    
    $('.label.ui.dropdown')
  .dropdown();
  
  
  
var currentURL = window.location.href;
// alert(currentURL);
var form = document.getElementsByClassName("con-form-main"); // Replace "myForm" with the actual id of your form
if (currentURL.includes('beta.enzigma.com')) {
  console.log("Beta URL");
  document.getElementById('oid').value = '00DF8000000AHoP';
  document.getElementById('00NF800000AaSlq').setAttribute("name", "00NF800000AaSlq");
  document.getElementById('00N2v00000ZfKB5').setAttribute("name","00N2v00000ZfKB5");
  document.getElementById('retURL').value = 'https://www.enzigma.com/thankyou';
  document.getElementsByClassName("con-form-main")[0].setAttribute("action", "https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DF8000000AHoP");

} else if (currentURL.includes('enzigma.com')) {
  console.log("Live URL");
  document.getElementById('oid').value = '00D2v000002H0GU';
  document.getElementById('00NF800000AaSlq').setAttribute("name", "00NGC00000cubG7"); 
  document.getElementById('00N2v00000ZfKB5').setAttribute("name","00N2v00000ZfKB5");
  document.getElementById('retURL').value = 'https://enzigma.com/thankyou/';
  document.getElementsByClassName("con-form-main")[0].setAttribute("action","https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8");
} else {
  console.log("Localhost URL");
  document.getElementById('oid').value = '00DF8000000AHoP';
  document.getElementById('retURL').value = 'https://www.enzigma.com/thankyou/';
  document.getElementsByClassName("con-form-main")[0].setAttribute("action", "https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DF8000000AHoP");
}


  
  window.addEventListener("pageshow", function (event) {
      if (
        event.persisted ||
        (window.performance && window.performance.navigation.type === 2)
      ) {
        window.location.reload();
      }
    });
  
  
  $(document).ready(function () {
// form validation

  $(".text-inp").on("input", function () {
    var inputValue = jQuery(this).val();

    // Use a regular expression to allow only alphabets with spaces, but the first character cannot be a space
    var regex = /^[A-Za-z][A-Za-z ]*$/;

    // Test the input against the regex
    if (!regex.test(inputValue)) {
      // If input doesn't match the regex, remove non-alphabet characters and extra spaces
      var cleanedValue = inputValue.replace(/[^A-Za-z ]/g, ""); // Remove non-alphabet characters
      cleanedValue = cleanedValue.replace(/  +/g, " "); // Remove extra spaces
      if (cleanedValue.length > 0 && cleanedValue[0] === " ") {
        cleanedValue = cleanedValue.substring(1); // Remove leading space
      }
      jQuery(this).val(cleanedValue);
    }
  });

  // Mobile number validation only numbers allowed
  $('.tel-inp').on('input', function () {
  let $input = $(this);
  let raw = $input.val();

  // Keep '+' only if it's the first character
  if (raw.startsWith('+')) {
    raw = '+' + raw.slice(1).replace(/[^\d]/g, '');
  } else {
    raw = raw.replace(/[^\d]/g, '');
  }

  $input.val(raw);

  const digitCount = raw.replace(/\D/g, '').length;
  const hasInvalidPlus = raw.includes('+') && !raw.startsWith('+');
  const isDigitCountInvalid = digitCount < 7 || digitCount > 15;

  if ($input.next('#phone-error-message').length === 0) {
    $input.after('<span id="phone-error-message" style="color:red; font-size:12px; display:none;"></span>');
  }

  const $error = $input.next('#phone-error-message');

  if (hasInvalidPlus) {
    $error.text("'+' symbol is only allowed at the beginning.").show();
  } else if (isDigitCountInvalid && raw.length > 0) {
    $error.text("Phone number must contain 7 to 15 digits.").show();
  } else {
    $error.hide();
  }
});

  $(".space-inp").on("keypress", function (event) {
    // Get the current value of the input field
    var inputValue = $(this).val();

    // Check if the pressed key is a space and if the input is empty
    if (event.which === 32 && inputValue.length === 0) {
      event.preventDefault(); // Prevent the space from being entered
    }
  });
  });
  
    $(".news-form input, .con-form-main input").attr("autocomplete", "one-time-code");
  $('.con-form-main input, .con-form-main textarea, .newsletter-form-inner input').on("cut copy paste", function (e) {
      e.preventDefault();
    });
  
  $('#email').on('blur', function() {
        var email = $(this).val();
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            $('#email-error').show(); // Show the error message
        } else {
            $('#email-error').hide();
            
            
            // Hide the error message
        }
    });
    
    
  // Add URL validation for textarea
       // URL validation for textarea
    $('textarea[name="description"]').on('input', function () {
      var text = $(this).val();
      var originalText = text;
    
      if ($('#message-error').length === 0) {
        $(this).after('<span id="message-error" style="color:red; display:none;">URLs are not allowed in this field</span>');
      }
    
      var urlPattern = /(https?:\/\/|www\.)[^\s]+|\bhttp[^\s]+|https?[^\s]+/gi;
      var cleanText = text.replace(urlPattern, '');
    
      if (cleanText !== originalText) {
        $(this).val(cleanText);
        $('#message-error').text('URLs are not allowed and have been removed').show();
        setTimeout(function () {
          $('#message-error').fadeOut(1500);
        }, 3000);
      }
    });
    
    
    // First name validation
    $('#first_name').on('input', function () {
      if ($('#first-name-error').length === 0) {
        $(this).after('<span id="first-name-error" style="color:red; display:none;">First Name is required</span>');
      }
    
      if ($(this).val().trim() === '') {
        $('#first-name-error').hide();
      } else {
        $('#first-name-error').hide();
      }
    });
    
    // Last name validation
    $('#last_name').on('input', function () {
      if ($('#last-name-error').length === 0) {
        $(this).after('<span id="last-name-error" style="color:red; display:none;">Last Name is required</span>');
      }
    
      if ($(this).val().trim() === '') {
        $('#last-name-error').hide();
      } else {
        $('#last-name-error').hide();
      }
    });
    
    // Email validation
    $('#email').on('input', function () {
      var email = $(this).val().trim();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      if ($('#email-error').length === 0) {
        $(this).after('<span id="email-error" style="color:red; display:none;">Email is required</span>');
      }
    
      if (email === '') {
        $('#email-error').text('Email is required').hide();
      } else if (!emailRegex.test(email)) {
        $('#email-error').text('Please enter a valid email address').show();
      } else {
        $('#email-error').hide();
      }
    });
    
    // Form submission validation
    $('.con-form-main').on('submit', function (e) {
      var hasErrors = false;
    
      if ($('#first_name').val().trim() === '') {
        if ($('#first-name-error').length === 0) {
          $('#first_name').after('<span id="first-name-error" style="color:red;">First Name is required</span>');
        } else {
          $('#first-name-error').show();
        }
        hasErrors = true;
      } else {
        $('#first-name-error').hide();
      }
    
      if ($('#last_name').val().trim() === '') {
        if ($('#last-name-error').length === 0) {
          $('#last_name').after('<span id="last-name-error" style="color:red;">Last Name is required</span>');
        } else {
          $('#last-name-error').show();
        }
        hasErrors = true;
      } else {
        $('#last-name-error').hide();
      }
    
      var email = $('#email').val().trim();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      if (email === '') {
        $('#email-error').text('Email is required').show();
        hasErrors = true;
      } else if (!emailRegex.test(email)) {
        $('#email-error').text('Please enter a valid email address').show();
        hasErrors = true;
      } else {
        $('#email-error').hide();
        var company = "";
        if (email.indexOf('@') !== -1 && email.indexOf('.') !== -1) {
          company = email.split('@')[1].split('.')[0];
        }
        $('#company').val(company);
      }
    
      var phone = $('#phone').val();
      let raw = phone;

      // Clean phone number
      if (raw.startsWith('+')) {
        raw = '+' + raw.slice(1).replace(/[^\d]/g, '');
      } else {
        raw = raw.replace(/[^\d]/g, '');
      }

      const digitCount = raw.replace(/\D/g, '').length;
      const hasInvalidPlus = raw.includes('+') && !raw.startsWith('+');
      const isDigitCountInvalid = digitCount < 7 || digitCount > 15;

      if ($('#phone').next('#phone-error-message').length === 0) {
        $('#phone').after('<span id="phone-error-message" style="color:red; font-size:12px; display:none;"></span>');
      }

      const $error = $('#phone').next('#phone-error-message');

      if (phone.length === 0) {
        $error.text('Phone number is required').show();
        hasErrors = true;
      } else if (hasInvalidPlus) {
        $error.text("'+' symbol is only allowed at the beginning.").show();
        hasErrors = true;
      } else if (isDigitCountInvalid) {
        $error.text('Phone number must contain 7 to 15 digits.').show();
        hasErrors = true;
      } else {
        $error.hide();
      }
    
      var messageText = $('textarea[name="description"]').val();
      var urlPattern = /(https?:\/\/|www\.)[^\s]+|\bhttp[^\s]+|https?[^\s]+/gi;
      var cleanText = messageText.replace(urlPattern, '');
      if (cleanText !== messageText) {
        $('textarea[name="description"]').val(cleanText);
        if ($('#message-error').length === 0) {
          $('textarea[name="description"]').after('<span id="message-error" style="color:red;">URLs have been removed from your message</span>');
        } else {
          $('#message-error').text('URLs have been removed from your message').show();
        }
      }
    
      var selectedOptions = $('.prd-select-service').dropdown('get value');
      if (!selectedOptions || selectedOptions.length === 0) {
        $('#select-error').show();
        hasErrors = true;
      } else {
        $('#select-error').hide();
      }
    
      var recaptchaResponse = $('#g-recaptcha-response').val();
      if (recaptchaResponse === "" || recaptchaResponse === undefined) {
        $('#recap-error').text('Please complete the reCAPTCHA to proceed.').show();
        hasErrors = true;
      } else {
        $('#recap-error').hide();
      }
    
      if (hasErrors) {
        e.preventDefault();
      }
    });
    
    // Initialize dropdown
    $('.prd-select-service').dropdown();
    
    // Toggle dropdown open/close on repeated click
    $('.prd-select-service .dropdown').on('click', function (e) {
      var $dropdown = $(this).closest('.ui.dropdown');
      if ($dropdown.hasClass('active visible')) {
        $dropdown.dropdown('hide');
      } else {
        $dropdown.dropdown('show');
      }
      e.stopPropagation();
    });
    
    // Close dropdown when clicking outside
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.ui.dropdown').length) {
        $('.ui.dropdown').dropdown('hide');
      }
    });

    
    
    
//     $('.con-form-main').on('submit', function(e) {
//     var emailErrorVisible = $('#email-error').is(':visible');
//     var selectedOptions = $('.prd-select-service').dropdown('get value');
//     var selectErrorVisible = false;
    
//     // recaptcha
//   // repatch contact
    
//     // Check if reCAPTCHA is completed (only for this form's .g-recaptcha)
//     var recaptchaResponse = $('#g-recaptcha-response').val();
//     var $recaptchaError = $('#recap-error'); // Changed to match your error span ID
    
//     // Validate reCAPTCHA
//     if (recaptchaResponse === "" || recaptchaResponse === undefined) {
//         e.preventDefault(); // Stop form submission
//         $recaptchaError.text('Please complete the reCAPTCHA to proceed.').show(); // Show error
//     } else {
//         $recaptchaError.hide(); // Hide error if reCAPTCHA is valid
//     }

//         // end
//         // end
    
    
//     // Email validation logic
//     if (emailErrorVisible) {
//         e.preventDefault(); // Block form submission
//     } else {
//         var email = $('#email').val();
//         var company = "";

//         // Extract the text after @ and before the first dot
//         if (email.indexOf('@') !== -1 && email.indexOf('.') !== -1) {
//             company = email.split('@')[1].split('.')[0]; // Extract the domain name
//         }

//         // Set the company name in the hidden field
//         $('#company').val(company);
//     }

//     // Multi-select validation logic
//     if (!selectedOptions || selectedOptions.length === 0) {
//         $('#select-error').show();
//         selectErrorVisible = true;
//     } else {
//         $('#select-error').hide();
//     }

//     // Prevent form submission if there is any validation error
//     if (emailErrorVisible || selectErrorVisible) {
//         e.preventDefault(); // Block form submission
//     }else {
//         //this.submit();
//         //$('.con-form-main')[0].reset(); // Reset the entire form
//         //$('.prd-select-service').dropdown('clear');
        
//     }
//          // Validate reCAPTCHA
//       if (recaptchaResponse === "" || recaptchaResponse === undefined) {
//         e.preventDefault(); // Stop form submission
//         $recaptchaError.text('Please complete the reCAPTCHA to proceed.').show(); // Show error
//         return;
//     } else {
//         $recaptchaError.hide(); // Hide error if reCAPTCHA is valid
//     }
   
// });

$('.catchUp').on('submit', function(e) { 
        var recaptchaResponse = $('#g-recaptcha-response').val();
        var $recaptchaErrors = $('#recaptcha-error-1');
       console.log(recaptchaResponse, "hello");



            // Validate reCAPTCHA
      if (recaptchaResponse === "" || recaptchaResponse === undefined) {
        e.preventDefault(); // Stop form submission
            $recaptchaErrors.text('Please complete the reCAPTCHA to proceed.').show(); // Show error
            return;
        } else {
            $recaptchaErrors.hide(); // Hide error if reCAPTCHA is valid
        }
    })
    
    

// Hide error when options are selected in multi-select
$('.prd-select-service').dropdown({
    onChange: function(value) {
        if (value && value.length > 0) {
            $('#select-error').hide();
        }
    }
});


// $('.newsletter').on('submit', function(e) {
//     var $form = $(this); // Get the current form being submitted
//     var email = $form.find('#email').val().trim();
//     var recaptchaResponse = $('#g-recaptcha-response-1').val();
//     var $recaptchaError = $('#recaptcha-error');
//     console.log(recaptchaResponse);
    
//     // Validate email input
//     if (email === "" || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
//         e.preventDefault(); // Stop form submission
//         $form.find('#email-error').show(); // Show email validation error
//         return;
//     } else {
//         $form.find('#email-error').hide(); // Hide email validation error if valid
//     }
    
    
//     // Validate reCAPTCHA
//     if (recaptchaResponse === "" || recaptchaResponse === undefined) {
//         e.preventDefault(); // Stop form submission
//         $recaptchaError.text('Please complete the reCAPTCHA to proceed.').show(); // Show error
//         return;
//     } else {
//         $recaptchaError.hide(); // Hide error if reCAPTCHA is valid
//     }

//     // Extract the company name from the email domain
//     var company = email.split('@')[1].split('.')[0];
    
//     // Add the extracted company value to the company input in the same form
//     $form.find('#company').val(company);

//     // Allow the form to submit if no errors
// });


// form remove url in textarea 

    function removeUrls(textarea) {
        // Regular expression to match URLs (including www. without http/https)
        const urlPattern = /((https?:\/\/)|(www\.))[^\s]+/g;
        const hasUrl = urlPattern.test(textarea.value);
        
        if (hasUrl) {
            // Remove URLs from the text
            textarea.value = textarea.value.replace(urlPattern, '');
            document.getElementById('url-error').style.display = 'inline';
        } else {
            document.getElementById('url-error').style.display = 'none';
        }
    }
    
    function validateForm() {
        const textarea = document.getElementById('description');
        // Regular expression to match URLs (including www. without http/https)
        const urlPattern = /((https?:\/\/)|(www\.))[^\s]+/g;
        
        if (urlPattern.test(textarea.value)) {
            document.getElementById('url-error').style.display = 'inline';
            return false; // Prevent form submission
        }
        
        return true; // Allow form submission
    }
  
  
}.call(window, window.jQuery);

// this is slider for home page product 

// ElementsKit Slider Configuration Fix for page-id-8
// Add this code to your website's Custom JavaScript section or as a separate JS file

document.addEventListener('DOMContentLoaded', function() {
  // Target the specific slider by page ID and slider class
  if (document.body.classList.contains('page-id-8941')) {
    const sliderElement = document.querySelector('.page-id-8 .ekit-main-swiper');
    
    if (sliderElement) {
      // Initialize or reinitialize the slider with proper settings
      const swiperInstance = new Swiper(sliderElement, {
        // Enable proper slide calculation and display
        slidesPerView: 1,
        spaceBetween: 30,
        
        // Improve autoheight behavior
        autoHeight: true,
        updateOnWindowResize: true,
        
        // Navigation settings
        navigation: {
          nextEl: '.page-id-8 .swiper-button-next',
          prevEl: '.page-id-8 .swiper-button-prev',
        },
        
        // Pagination settings
        pagination: {
          el: '.page-id-8 .swiper-pagination',
          clickable: true,
        },
        
        // Add responsive breakpoints if needed
        breakpoints: {
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        },
        
        // Better touch/mouse interaction
        grabCursor: true,
        
        // Improved accessibility
        a11y: {
          enabled: true,
        },
        
        // Performance improvements
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        
        // Fix transition issues
        speed: 500,
        
        // Initialize the slider properly
        init: true,
        
        on: {
          // Force resize calculation after slider initialization
          init: function() {
            this.update();
            // Reset any fixed heights that might be applied
            document.querySelectorAll('.page-id-8 .ekit-main-swiper .swiper-slide').forEach(function(slide) {
              slide.style.height = 'auto';
            });
            window.dispatchEvent(new Event('resize'));
          }
        }
      });
      
      // Force recalculation for this specific page
      const forceResizeCalculation = function() {
        if (swiperInstance && typeof swiperInstance.update === 'function') {
          swiperInstance.update();
          // Reset heights after each update
          document.querySelectorAll('.page-id-8 .ekit-main-swiper .swiper-slide').forEach(function(slide) {
            slide.style.height = 'auto';
          });
        }
      };
      
      // Additional fix for responsive issues
      window.addEventListener('resize', function() {
        if (document.body.classList.contains('page-id-8941')) {
          setTimeout(forceResizeCalculation, 300);
        }
      });
      
      // Also recalculate after any possible dynamic content loads
      window.addEventListener('load', forceResizeCalculation);
      
      // Handle any tab changes or other dynamic content
      document.addEventListener('click', function() {
        if (document.body.classList.contains('page-id-8941')) {
          setTimeout(forceResizeCalculation, 300);
        }
      });
    }
  }
});




  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validateForm() {
    let valid = true;

    // Validate email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (!validateEmail(emailInput.value)) {
      emailError.style.display = 'block';
      emailInput.style.border = '1px solid red';
      valid = false;
    } else {
      emailError.style.display = 'none';
      emailInput.style.border = '';
    }

    // Validate select field
    const serviceSelect = document.getElementById('00NF800000AaSlq');
    const selectError = document.getElementById('select-error');
    const selectedValues = Array.from(serviceSelect.selectedOptions)
      .map(opt => opt.value)
      .filter(val => val.trim() !== "");

    if (selectedValues.length === 0) {
      selectError.style.display = 'block';
      serviceSelect.style.border = '1px solid red';
      valid = false;
    } else {
      selectError.style.display = 'none';
      serviceSelect.style.border = '';
    }

    // Return final validity
    return valid;
  }


document.querySelectorAll('.newsletter').forEach(function(form) {
    form.addEventListener('submit', function(e) {
        var emailInput = form.querySelector('#email');
        var email = emailInput.value.trim();
        var recaptchaResponse = document.querySelector('#g-recaptcha-response-1').value;
        var recaptchaError = document.querySelector('#recaptcha-error');
        var emailError = form.querySelector('#email-error');

        console.log(recaptchaResponse);

        // Validate email input
        if (email === "" || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            e.preventDefault(); // Stop form submission
            emailError.style.display = 'block'; // Show email validation error
            return;
        } else {
            emailError.style.display = 'none'; // Hide email validation error if valid
        }

        // Validate reCAPTCHA
        if (!recaptchaResponse) {
            e.preventDefault(); // Stop form submission
            recaptchaError.textContent = 'Please complete the reCAPTCHA to proceed.';
            recaptchaError.style.display = 'block'; // Show error
            return;
        } else {
            recaptchaError.style.display = 'none'; // Hide error if reCAPTCHA is valid
        }

        // Extract the company name from the email domain
        var company = email.split('@')[1].split('.')[0];

        // Add the extracted company value to the company input in the same form
        var companyInput = form.querySelector('#company');
        if (companyInput) {
            companyInput.value = company;
        }

        // Form is submitted if no errors
    });
});

