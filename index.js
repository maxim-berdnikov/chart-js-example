const chart = document.querySelector(".chart");
const ctx = chart.getContext("2d");
let delayed;
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58, 123, 213, 1)");
gradient.addColorStop(1, "rgba(0, 210, 255, 0.3)");

const labels = [
  "Superman",
  "X-Men",
  "Batman",
  "Spider-Man",
  "Spawn",
  "Captain America"
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Comics Series Sales",
      data: [600, 260, 484, 387, 150, 210],
      fill: true,
      backgroundColor: gradient,
      borderColor: "#fff",
      pointBackgroundColor: "rgb(189, 195, 199)",
    }
  ]
};

const config = {
  type: "line",
  data: data,
  options: {
    rdius: 5,
    hitRadius: 30, 
    hoverRadius: 12,
    responsive: true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          callback: (value) => `$${value}m`
        }
      }
    }
  }
};

const myChart = new Chart(chart, config);
