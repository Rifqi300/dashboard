const ctx = document.getElementById('doughnut');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Green', 'Red', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [50, 23, 27],
            backgroundColor: [
                'rgb(27, 128, 1, 0.6)',
                'rgb(255, 0, 0, 0.6)',
                'rgb(255, 255, 0, 0.6)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('mychart');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Green', 'Red', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [47, 15, 38],
            backgroundColor: [
                'rgb(27, 128, 1, 0.6)',
                'rgb(255, 0, 0, 0.6)',
                'rgb(255, 255, 0, 0.6)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});