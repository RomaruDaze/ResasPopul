import { useState, useEffect } from "react";
import axios from "axios";

function useResasApi() {
    const [data, setData] = useState([]);
    const [cityCode, setCityCode] = useState('');
    const [prefCode, setPrefCode] = useState('');
    const [category, setCategory] = useState('');
    useEffect(() => {
        if (cityCode && prefCode && category) {
            const apiKey = "SYCXoS2nj8kRZ9uFWFz39pWUsUcQOIvGWCCkuuYK";
            const headers = { "X-API-KEY": apiKey };
            const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=${cityCode}&prefCode=${prefCode}`;

            axios
                .get(url, { headers })
                .then((response) => {
                    const allData = response.data.result.data.flatMap((category) =>
                        category.data.map((item) => ({
                            year: item.year,
                            label: category.label,
                            value: item.value,
                            rate: item.rate ? `${item.rate}%` : "N/A",
                        }))
                    );
                    const filteredData = category ? allData.filter(item => item.label === category) : allData;
                    setData(filteredData);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }

    }, [cityCode, prefCode, category]);

    return { data, setCityCode, setPrefCode, setCategory };
}

export default useResasApi;