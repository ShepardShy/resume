export const planetChartData = {
    type: "line",
    data: {
      labels: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
      datasets: [
        {
          label: "Number of Moons",
          data: [100, 103, 105, 102, 97, 99, 100, 96, 92, 97, 99, 98],
          backgroundColor: "gradient(180deg, rgba(74, 179, 255, 0.2) 0%, rgba(74, 179, 255, 0) 100%)",
          borderColor: "#4AB3FF",
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
export default planetChartData;