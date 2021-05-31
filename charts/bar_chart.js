
const CHART = document.getElementById('bar-chart');
Chart.defaults.global.defaultFontColor = 'red';
//Chart.defaults.global.hover.mode = 'nearest';
Chart.defaults.global.animation.duration = 1000;
let  = new Chart(CHART ,{
type: 'bar',
    data: {
        labels: ["AAAA", "BBBBBB", "CCCCCCCC", "DDDDDDDDDD", "EEEEEE", "FFFFFFFFFF"],
        datasets: [{
            label: 'No of Votes',
            
            data: [100, 19, 30, 15, 2, 13],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
        options: {
        layout: {
            padding: {
                left: 20,
                right: 10,
                top: 20,
                bottom: 10
            }
        }
    }
    
});
