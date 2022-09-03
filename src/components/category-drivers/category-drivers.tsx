import React, { useEffect, useState } from "react";
import StackedHighchart, {
  IDriverSeries
} from "../../components/highchart/stacked/stacked-highchart";
import "./category-drivers.scss";
import { CATEGORY_DATA, ICategoryData } from "../../data/category";

export default function CategoryDrivers(props) {
  const [graphData, setGraphData] = useState<ICategoryData[]>(null);
  const categories1: string[] = [
    "baby tolerance",
    "ingredients",
    "health benefits",
    "taste",
    "peer recommendation",
    "expert advocacy",
    "brand value",
    "convenience",
    "price"
  ];
  const categories2: string[] = [
    "nutrients",
    "sweeteners",
    "organic / natural"
  ];
  const series1: IDriverSeries[] = [
    {
      name: "positive",
      color: "green",
      data: [20, 15, 12.5, 9, 2, 14, 13, 7, 4]
    },
    {
      name: "neutral",
      color: "yellow",
      data: [2, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: "mixed",
      color: "grey",
      data: [5, 2, 4, 1, 15, 1, 0, 3, 1]
    },
    {
      name: "negative",
      color: "red",
      data: [12, 10, 2, 0, 13, 3, 2, 3, 9]
    }
  ];
  const series2: IDriverSeries[] = [
    {
      name: "positive",
      color: "green",
      data: [20, 15, 12.5]
    },
    {
      name: "neutral",
      color: "yellow",
      data: [2, 0, 0]
    },
    {
      name: "mixed",
      color: "grey",
      data: [5, 2, 4]
    },
    {
      name: "negative",
      color: "red",
      data: [12, 10, 2]
    }
  ];
  const onBarClicked = (category: string) => {
    console.log(category);
  };
  useEffect(() => {
    console.log(CATEGORY_DATA);
    setGraphData(CATEGORY_DATA);
  }, []);
  return (
    <div className="wrapper">
      <div className="flex">
        <StackedHighchart
          title="Category drivers"
          series={series1}
          categories={categories1}
          onBarClick={onBarClicked}
        ></StackedHighchart>
      </div>
    </div>
  );
}
