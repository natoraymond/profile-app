function updateTimeAndDay() {
    const currentTimeElement = document.getElementById('current-time');
    const currentDayElement = document.getElementById('current-day');
  
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()];
  
    currentTimeElement.textContent = `Current Time (UTC): ${utcTime}`;
    currentDayElement.textContent = `Current Day: ${currentDay}`;
  }
  
  // Update time and day on page load
  updateTimeAndDay();
  