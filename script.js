function updateDate() {
  // Get the current date
  const currentDate = new Date();

  // Get the day, month, and year
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // January is 0, so we add 1
  const year = currentDate.getFullYear();

  // Create a string with the current date format
  const formattedDate = `${month}-${day}-${year}`;

  // Display the date on all elements with class "currentDate"
  const dateElements = document.querySelectorAll('.currentDate');
  dateElements.forEach(element => {
    element.textContent = ` ${formattedDate}`;
  });
}

// Update the date initially
updateDate();

// Update the date every second (1000 milliseconds)
setInterval(updateDate, 1000);


function updateTime(){

  let currentTime = new Date();

  let hrs = document.getElementsByClassName("hrs");
  let min = document.getElementsByClassName("min");
  let sec = document.getElementsByClassName("sec");

  const formattedTime = `${hrs}-${min}-${sec}`

  const timeElements = document.getElementsByClassName('currentTime');
  timeElements.forEach(element => {
    element.textContent = ` ${formattedTime}`;
  });

updateTime();

setInterval(updateTime, 1000);


  
}



// let hrs = document.getElementsByClassName("hrs");
  // const hrs = currentDate.getHours();
  // const min = currentDate.getMinutes();
  // const sec = currentDate.getSeconds();

  



  // hrs.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
  // min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
  // sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();

  