import React from "react";
import useResasAPI from "../../Hooks/useResasAPI";
import Searchbox from "./Table/Seachbox";
import DataTable from "./Table/Table";
import { Line } from "react-chartjs-2";
import { getChartData, chartOptions } from "../constants/chartConfig";

function ResasAPI() {
  const { data, setCityCode, setPrefCode, setCategory } = useResasAPI();
  const chartData = getChartData(data);

  return (
    <div>
      
      <Searchbox
        setCityCode={setCityCode}
        setPrefCode={setPrefCode}
        setCategory={setCategory}
        className="search"
      />
      <div className="chart">
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className="table">
        <DataTable data={data} /> 
      </div>
    </div>
  );
}

export default ResasAPI;
