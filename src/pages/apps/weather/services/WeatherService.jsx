
const baseUrl = `https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=GetFeature`;

export async function fetchWeatherByCity(city) {

    try {
        const storedQuery = "storedquery_id=ecmwf::forecast::surface::point::simple";
        const place = `place=${city}`;
        const response = await fetch(`${baseUrl}&${storedQuery}&${place}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();

            // .then(response => response.text())
            // .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml"); 

        const elements = xmlDoc.getElementsByTagName("BsWfs:BsWfsElement");
        // Filter elements where BsWfs:ParameterName is "Temperature"
        const groupedData = {};
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const gmlId = element.getAttribute("gml:id"); // Get the gml:id attribute
            const pointId = gmlId.split(".")[2]; // Extract the point identifier (e.g., "1.1")

            const parameterName = element.getElementsByTagName("BsWfs:ParameterName")[0]?.textContent;
            const parameterValue = element.getElementsByTagName("BsWfs:ParameterValue")[0]?.textContent;
            const time = element.getElementsByTagName("BsWfs:Time")[0]?.textContent;
            const location = element.getElementsByTagName("gml:pos")[0]?.textContent;

            // Initialize the group if it doesn't exist
            if (!groupedData[pointId]) {
                groupedData[pointId] = {
                    location: location.trim(),
                    time: time
                };
            }
            switch (parameterName) {
                case "Temperature":
                    groupedData[pointId].temperature = parameterValue;
                case "Pressure":
                    groupedData[pointId].pressure = parameterValue;
                case "Humidity":
                    groupedData[pointId].humidity = parameterValue;
                case "Precipitation1h":
                    groupedData[pointId].precipitation1h = parameterValue;
                    break;
            }
            // groupedData[pointId].parameters[parameterName] = parameterValue;
        }
        // Convert grouped data to an array for easier use
        const groupedDataArray = Object.keys(groupedData).map((key) => ({
            pointId: key,
            ...groupedData[key],
        }));
        
        return groupedDataArray;
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
        // })
        // .catch(error => {
        //     console.error("Error fetching weather data:", error);
        // });
}