import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Card, Button } from "@material-ui/core";
import Chart from "react-apexcharts";
import hero2 from "../../../assets/images/hero-bg/hero-2.jpg";

export default function LivePreviewExample() {
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
    <div className="mt-5">
      <Card className="card-box mb-spacing-6-x2">
        <Grid container spacing={0}>
          <Grid item xl={7}>
            <div className="p-4">
              <div className="p-2">
                <h6 className="font-weight-bold font-size-xl mb-1 text-black">
                  Transactions history chart
                </h6>
                <p className="text-black-50 font-size-lg mb-0">
                  View your transaction history for the month
                </p>
              </div>
            </div>
            <div className="divider" />
            <div>
              {/* <Chart
                options={options}
                series={values.series}
                type="line"
                height={368}
              /> */}
              <Chart
                options={options}
                series={values.series}
                type="line"
                // width="90%"
                height={368}
              />
            </div>
            <div className="divider bg-dark opacity-1" />
            {/* <div className="p-4 bg-secondary text-center">
              <Button className="btn-primary hover-scale-sm px-5">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "download"]} />
                </span>
                <span className="btn-wrapper--label">Create Report</span>
              </Button>
            </div> */}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
