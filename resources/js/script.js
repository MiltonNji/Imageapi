document.addEventListener("DOMContentLoaded", () => {
  const chartContainer = document.getElementById("chart-container");
  const chartTypeMenu = document.getElementById("chart-type-menu");

  // Define the initial chart parameters
  let chartParams = {
    cht: "p3", // Chart type (p3 for a pie chart)
    chd: "t:60,40", // Chart data (example data)
    chs: "300x150", // Chart size (example size)
    chl: "Slice 1|Slice 2", // Chart labels (example labels)
  };

  // Function to fetch and display the chart
  const fetchAndDisplayChart = () => {
    // Construct the API URL with the current chart parameters
    const apiUrl = `https://image-charts.com/chart?cht=${chartParams.cht}&chd=${chartParams.chd}&chs=${chartParams.chs}&chl=${chartParams.chl}`;

    // Clear the chart container
    chartContainer.innerHTML = "";

    // Make API request
    fetch(apiUrl)
      .then(response => response.blob())
      .then(imageBlob => {
        // Create image element and set the image source
        const imageElement = document.createElement("img");
        imageElement.src = URL.createObjectURL(imageBlob);

        // Append the image element to the chart container
        chartContainer.appendChild(imageElement);
      })
      .catch(error => {
        console.error("Error fetching the chart:", error);
      });
  };

  // Event listener for chart type selection
  chartTypeMenu.addEventListener("change", event => {
    chartParams.cht = event.target.value; // Update the chart type based on the selected value

    // Call the fetchAndDisplayChart function to update the chart
    fetchAndDisplayChart();
  });

  // Initial fetch and display of the chart
  fetchAndDisplayChart();
});
