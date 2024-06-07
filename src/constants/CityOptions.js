async function fetchCityOptions(prefCode) {
    const url = `https://opendata.resas-portal.go.jp/api/v1/cities?prefCode=${prefCode}`;
    const apiKey = import.meta.env.VITE_RESAS_API_KEY;

    try {
        const response = await fetch(url, {
            headers: {
                "X-API-KEY": apiKey
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.result.map(city => ({
            code: city.cityCode,
            name: city.cityName
        }));
    } catch (error) {
        console.error("Failed to fetch city options:", error);
        return [];
    }
}

export default fetchCityOptions;