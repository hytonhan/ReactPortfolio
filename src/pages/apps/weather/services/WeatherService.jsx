
const baseUrl = `https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=GetFeature`;

export async function fetchWeatherByCity(city) {

    try {
        // const storedQuery = "storedquery_id=ecmwf::forecast::surface::point::simple";
        const storedQuery = "storedquery_id=fmi::forecast::harmonie::surface::point::simple";
        const parameters = [
            'Temperature',
            'Pressure',
            'Humidity',
            'PrecipitationAmount',
            'DewPoint',
            'WindDirection',
            'WindSpeedMS',
            'WindGust',
            'TotalCloudCover',
            'LowCloudCover',
            'MediumCloudCover',
            'HighCloudCover',
            'Visibility',
            'SmartSymbol'
        ]
        const place = `place=${city}`;
        const response = await fetch(`${baseUrl}&${storedQuery}&${place}&parameters=${parameters.join()}`);
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
                    break;
                case "Pressure":
                    groupedData[pointId].pressure = parameterValue;
                    break;
                case "Humidity":
                    groupedData[pointId].humidity = parameterValue;
                    break;
                case "PrecipitationAmount": // mm
                    groupedData[pointId].precipitationAmount = parameterValue;
                    break;
                case "DewPoint":
                    groupedData[pointId].dewPoint = parameterValue;
                    break;
                case "WindDirection":
                    groupedData[pointId].windDirection = parameterValue
                    break;
                case "WindSpeedMS":
                    groupedData[pointId].windSpeedMs = parameterValue
                    break;
                case "WindGust":
                    groupedData[pointId].windGust = parameterValue
                    break;
                case "TotalCloudCover": // % of cloud cover
                    groupedData[pointId].totalCloudCover = parameterValue
                    break;
                case "LowCloudCover": // % of cloud cover < 2 km
                    groupedData[pointId].lowCloudCover = parameterValue
                    break;
                case "MediumCloudCover": // % of cloud cover 2-6 km
                    groupedData[pointId].mediumCloudCover = parameterValue
                    break;
                case "HighCloudCover": // % of cloud cover > 6 km
                    groupedData[pointId].highCloudCover = parameterValue
                    break;
                case "Visibility": // meters
                    groupedData[pointId].visibility = parameterValue
                    break;
                case "SmartSymbol":
                    groupedData[pointId].smartSymbol = parameterValue
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