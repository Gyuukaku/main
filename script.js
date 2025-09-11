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

    // Ant animation logic
    const ant = document.getElementById('ant');
    if (ant) {
        let currentX = window.innerWidth / 2;
        let currentY = window.innerHeight / 2;
        ant.style.left = currentX + 'px';
        ant.style.top = currentY + 'px';

        function moveAnt() {
            const newX = Math.random() * (window.innerWidth - 40); // Stay within bounds
            const newY = Math.random() * (window.innerHeight - 40); // Stay within bounds

            const deltaX = newX - currentX;
            const deltaY = newY - currentY;
            // Add 90 degrees because the ant emoji faces upwards by default
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;

            ant.style.transform = `rotate(${angle}deg)`;
            ant.style.left = newX + 'px';
            ant.style.top = newY + 'px';

            currentX = newX;
            currentY = newY;
        }

        // Start the ant's journey after the typing is likely done
        setTimeout(() => {
            moveAnt();
            // And keep it moving every 3 seconds (must be > transition duration)
            setInterval(moveAnt, 3000);
        }, 3000);
    }
});