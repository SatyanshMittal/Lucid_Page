function updateTime() {
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var am_pm = document.getElementById("am-pm");

  if (hours >= 12) {
    am_pm.innerHTML = "PM";
  } else {
    am_pm.innerHTML = "AM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  var ho;
  var min;
  var sec;
  if ((hours >= 0) & (hours < 10)) {
    hours.toString;
    ho = "0" + hours;
    parseInt(ho);
    hours = ho;
  }
  if ((minutes >= 0) & (minutes < 10)) {
    minutes.toString;
    ho = "0" + minutes;
    parseInt(ho);
    minutes = ho;
  }
  if ((seconds >= 0) & (seconds < 10)) {
    seconds.toString;
    ho = "0" + seconds;
    parseInt(ho);
    seconds = ho;
  }
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
setInterval(updateTime, 1000);








window.addEventListener('load', () => {
  const locationElement = document.getElementById('location');
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      const apiKey = '877d368d6739677d1a1f1c11600d843f'; // Replace with your OpenWeatherMap API key

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          locationElement.textContent = data.name;
          temperatureElement.textContent = `${data.main.temp}°C`;
          descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => console.log(error));
    });
  } else {
    locationElement.textContent = 'Geolocation is not supported by this browser.';
  }
});







var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

function addTask() {
  var task = taskInput.value;
  if (task.trim()) {
    if (taskList.children.length >= 8) {
      alert("You can only add up to 8 tasks.");
    } else {
      var li = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        if (this.checked) {
          li.classList.add("completed");
          setTimeout(function () {
            li.style.opacity = "0";
            setTimeout(function () {
              li.remove();
            }, 500);
          }, 500);
        } else {
          li.classList.remove("completed");
        }
      });
      var label = document.createElement("label");
      label.appendChild(document.createTextNode(task));
      li.appendChild(checkbox);
      li.appendChild(label);
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    addTask();
  }
}