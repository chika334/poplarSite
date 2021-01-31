import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";

const Charts = () => {
  const [values, setValues] = useState({
    series: [
      {
        name: "Transactions",
        data: [],
      },
    ],
  });

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
    },
    stroke: {
      curve: "smooth",
    },
  };

  const transactions = useSelector((state) => state.transactions.transaction);

  useEffect(() => {
    if (!transactions) return;

    const series = transactions.map((t) => {
      return {
        name: "Transactions",
        data: [
          {
            x: t.request.timestamp,
            y: t.request.amount,
          },
        ],
      };
    });

    setValues({ series });
  }, [transactions]);

  return (
    <>
      <PerfectScrollbar>
        {values.series.map((all, index) =>
          all.data.length === 0 ? <h2 key={index}>PENDING...</h2> : ""
        )}
        <h3 className="text-center">Transaction chart</h3>
        <div className="pl-5 bg-white">
          <Chart
            options={options}
            series={values.series}
            type="line"
            width="90%"
            height={300}
          />
        </div>
      </PerfectScrollbar>
    </>
  );
};

export default Charts;
