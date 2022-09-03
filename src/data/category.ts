export interface IDrivers {
  id: number;
  name: string;
  value: number;
}

export interface ICategoryData {
  id: number;
  name: string;
  drivers: IDrivers[];
  children?: ICategoryData[];
}

export const CATEGORY_DATA: ICategoryData[] = [
  {
    id: 1,
    name: "baby tolerance",
    drivers: [
      {
        id: 1,
        name: "negative",
        value: 12
      },
      {
        id: 2,
        name: "mixed",
        value: 5
      },
      {
        id: 3,
        name: "neutral",
        value: 2
      },
      {
        id: 4,
        name: "positive",
        value: 20
      }
    ]
  },
  {
    id: 2,
    name: "ingredients",
    drivers: [
      {
        id: 1,
        name: "negative",
        value: 10
      },
      {
        id: 2,
        name: "mixed",
        value: 2
      },
      {
        id: 3,
        name: "neutral",
        value: 0
      },
      {
        id: 4,
        name: "positive",
        value: 15
      }
    ],
    children: [
      {
        id: 1,
        name: "nutrients",
        drivers: [
          {
            id: 1,
            name: "negative",
            value: 25
          },
          {
            id: 2,
            name: "mixed",
            value: 5
          },
          {
            id: 3,
            name: "neutral",
            value: 20
          },
          {
            id: 4,
            name: "positive",
            value: 12.5
          }
        ]
      },
      {
        id: 2,
        name: "sweeteners",
        drivers: [
          {
            id: 1,
            name: "negative",
            value: 10
          },
          {
            id: 2,
            name: "mixed",
            value: 4
          },
          {
            id: 3,
            name: "neutral",
            value: 20
          },
          {
            id: 4,
            name: "positive",
            value: 10
          }
        ]
      },
      {
        id: 3,
        name: "organic / natural",
        drivers: [
          {
            id: 1,
            name: "negative",
            value: 20
          },
          {
            id: 2,
            name: "mixed",
            value: 4
          },
          {
            id: 3,
            name: "neutral",
            value: 0
          },
          {
            id: 4,
            name: "positive",
            value: 5
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "health benefits",
    drivers: [
      {
        id: 1,
        name: "negative",
        value: 2
      },
      {
        id: 2,
        name: "mixed",
        value: 14
      },
      {
        id: 3,
        name: "neutral",
        value: 20
      },
      {
        id: 4,
        name: "positive",
        value: 2.5
      }
    ]
  },
  {
    id: 4,
    name: "taste",
    drivers: [
      {
        id: 1,
        name: "negative",
        value: 6
      },
      {
        id: 2,
        name: "mixed",
        value: 2
      },
      {
        id: 3,
        name: "neutral",
        value: 20
      },
      {
        id: 4,
        name: "positive",
        value: 39
      }
    ]
  },
  {
    id: 5,
    name: "peer recommendation",
    drivers: [
      {
        id: 1,
        name: "negative",
        value: 5
      },
      {
        id: 2,
        name: "mixed",
        value: 10
      },
      {
        id: 3,
        name: "neutral",
        value: 2
      },
      {
        id: 4,
        name: "positive",
        value: 19
      }
    ]
  },
  {
    id: 6,
    name: "expert advocay",
    drivers: [
      {
        id: 1,
        name: "negative",
        value: 3
      },
      {
        id: 2,
        name: "mixed",
        value: 7
      },
      {
        id: 3,
        name: "neutral",
        value: 10
      },
      {
        id: 4,
        name: "positive",
        value: 2
      }
    ]
  },
  {
    id: 7,
    name: "brand value",
    drivers: [
      {
        id: 1,
        name: "negative",
        value: 6
      },
      {
        id: 2,
        name: "mixed",
        value: 3
      },
      {
        id: 3,
        name: "neutral",
        value: 2
      },
      {
        id: 4,
        name: "positive",
        value: 10
      }
    ]
  },
  {
    id: 8,
    name: "convenience",
    drivers: [
      {
        id: 1,
        name: "negative",
        value: 2
      },
      {
        id: 2,
        name: "mixed",
        value: 17
      },
      {
        id: 3,
        name: "neutral",
        value: 4
      },
      {
        id: 4,
        name: "positive",
        value: 7
      }
    ]
  },
  {
    id: 9,
    name: "price",
    drivers: [
      {
        id: 1,
        name: "negative",
        value: 12
      },
      {
        id: 2,
        name: "mixed",
        value: 4
      },
      {
        id: 3,
        name: "neutral",
        value: 0
      },
      {
        id: 4,
        name: "positive",
        value: 17
      }
    ]
  }
];

export const CATEGORY_DRIVERS = [
  {
    name: "negative",
    categoryDrivers: [12, 10, 2, 0, 13, 3, 2, 3, 9]
  },
  {
    name: "mixed",
    categoryDrivers: [5, 2, 4, 1, 15, 1, 0, 3, 1]
  },
  {
    name: "neutral",
    categoryDrivers: [2, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "positive",
    categoryDrivers: [20, 15, 12.5, 9, 2, 14, 13, 7, 4]
  }
];

export const CATEGORIES = [
  {
    name: "baby tolerance",
    id: 1
  },
  {
    name: "ingredients",
    id: 2
  },
  {
    name: "health benefits",
    id: 3
  },
  {
    name: "taste",
    id: 4
  },
  {
    name: "peer recommendation",
    id: 5
  },
  {
    name: "expert advocacy",
    id: 6
  },
  {
    name: "brand value",
    id: 7
  },
  {
    name: "convenience",
    id: 8
  },
  {
    name: "price",
    id: 9
  }
];
