        document.getElementById('emailForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            const emailInput = document.getElementById('emailInput').value;
            const errorMessage = document.getElementById('errorMessage');

            if (emailInput === 'mertznr@hotmail.com') {
                errorMessage.textContent = 'Oops! Please check your email';
                errorMessage.style.display = 'block';
            }
        });