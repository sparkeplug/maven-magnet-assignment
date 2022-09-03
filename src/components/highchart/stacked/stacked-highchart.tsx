import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import "./stacked-highchart.css";

export interface IDriverSeries {
  name: "positive" | "negative" | "mixed" | "neutral";
  color: string;
  data: number[];
}

export interface IStackedHighchartProps {
  title: string;
  categories: string[];
  series: IDriverSeries[];
  onBarClick: (category: string) => void;
}

export default function StackedHighchart({
  title,
  categories,
  series,
  onBarClick
}: IStackedHighchartProps) {
  const barClick = function (event: any) {
    const { point } = event;
    const category = point.category;
    onBarClick(category);
  };
  const [options, setOptions] = useState<any>();
  useEffect(() => {
    const optionsObj = {
      chart: {
        type: "bar"
      },
      title: {
        text: ""
      },
      xAxis: {
        categories
      },
      yAxis: {
        min: 0,
        title: {
          text: "Percentage"
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: "normal",
          cursor: "pointer",
          events: {
            click: barClick
          }
        }
      },
      series,
      credits: {
        enabled: false
      }
    };
    setOptions(optionsObj);
  }, []);
  return (
    <div className="hcWrapper">
      <h3 className="is-size-5">{title}</h3>
      <HighchartsReact
        className="hcReact"
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}
