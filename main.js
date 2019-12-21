var banner= document.querySelector('.alertbar button');
var submit= document.querySelector('.submit');

banner.addEventListener('click',()=>{
    document.querySelector('.alertbar').style.opacity= 0;
    document.querySelector('.alertbar').style.transition = "1s";
    console.log('ah');

});


// user.addEventListener("keyup", event => {
//
//     }

submit.addEventListener('click',()=>{
      var user=document.querySelector('.user');
      var message=document.querySelector('.userMessage');
      if(user.value === ""){
        alert('please select a user');
      } else if(message.value === "") {
        alert('Please enter a message');
      }else{
        alert('Submission Successful');
        user.value ='';
        message.value='';
      }
    console.log(user);
});


$("select").on("click" , function() {

  $(this).parent(".").toggleClass("open");

});

$(document).mouseup(function (e)
{
    var container = $(".select-box");

    if (container.has(e.target).length === 0)
    {
        container.removeClass("open");
    }
});


$("select").on("change" , function() {

  var selection = $(this).find("option:selected").text(),
      labelFor = $(this).attr("id"),
      label = $("[for='" + labelFor + "']");

  label.find(".label-desc").html(selection);

});






var lineGraph = document.getElementById('lineGraph').getContext('2d');
var chart = new Chart(lineGraph, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Web Traffic',
            backgroundColor: '	#e2e3f6',
            borderColor: '#e2e3f6',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
        // opacity:0.5;
    },
    // Configuration options go here
    options: {responsive: true,
  maintainAspectRatio: true,}
});
// chart.canvas.parentNode.style.height = '400px';
// chart.canvas.parentNode.style.width = '80%';


var barGraph = document.getElementById('barGraph').getContext('2d');
var myBarChart = new Chart(barGraph, {
    type: 'bar',
    data:  {
        labels: ['S','M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: '#a9acd7',
            data: [20, 10, 5, 2, 20, 30, 45]
        }]
    },

// barChart.style.width='500px';
    options:{responsive: true,
  maintainAspectRatio: true,}
});

var pieGraph = document.getElementById('pieGraph').getContext('2d');
var myBarChart = new Chart(pieGraph, {
    type: 'pie',
    data:  {
        labels: ['Phones','Tablets','Desktop'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['	aaaccb', '#a9acd7','#cccddf'],
            data: [10,20,30]
        }]
    },

    options:{responsive: true,
  maintainAspectRatio: true,}
});

const user = document.getElementById("userSearch");
const message = document.getElementById("messageField");
const send = document.getElementById("submit");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });