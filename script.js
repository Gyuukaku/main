document.addEventListener('DOMContentLoaded', () => {
    // Typing animation logic
    const nameHeading = document.getElementById('name-heading');
    if (nameHeading) {
        const text = nameHeading.textContent;
        nameHeading.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                nameHeading.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150); // Adjust typing speed here (in ms)
            }
        }

        typeWriter();
    }

    
});