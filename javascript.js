const button = document.getElementById('button');
const offset = 10; // Distance to move button away from the cursor

document.addEventListener('mousemove', (e) => {
    // Get the mouse coordinates
    const { clientX: mouseX, clientY: mouseY } = e;

    // Calculate the new button position
    const buttonRect = button.getBoundingClientRect();
    const buttonX = buttonRect.left + window.scrollX + buttonRect.width / 2;
    const buttonY = buttonRect.top + window.scrollY + buttonRect.height / 2;

    // Calculate the distance from the cursor to the center of the button
    const deltaX = mouseX - buttonX;
    const deltaY = mouseY - buttonY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Move the button away from the cursor based on the distance
    if (distance < offset) {
        const moveX = (deltaX / distance) * offset;
        const moveY = (deltaY / distance) * offset;

        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
        button.style.transform = 'translate(0, 0)'; // Reset if cursor is far away
    }
});