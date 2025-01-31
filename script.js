// Function to update the clock
function updateClock() {
    const now = new Date();
    
    // Get hours, minutes, and seconds and pad them with leading zeros if necessary
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Arrays to get the name of the day and month
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];

    // Update the clock's time segments (hours, minutes, seconds)
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Update the date display
    document.getElementById('date').textContent =
        `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

// Initial call to update the clock immediately
updateClock();

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);
