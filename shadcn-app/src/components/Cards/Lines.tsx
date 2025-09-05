'use client';
import { ResponsiveLine } from '@nivo/line'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const MyResponsiveLine = ({ data }: any) => (
    <ResponsiveLine
        data={data}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="basis"
        axisBottom={{ legend: 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: 'count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor="black"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
    />
)

export default function Lines() {
  const data = [
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 174
      },
      {
        "x": "helicopter",
        "y": 54
      },
      {
        "x": "boat",
        "y": 262
      },
      {
        "x": "train",
        "y": 40
      },
      {
        "x": "subway",
        "y": 114
      },
      {
        "x": "bus",
        "y": 92
      },
      {
        "x": "car",
        "y": 271
      },
      {
        "x": "moto",
        "y": 181
      },
      {
        "x": "bicycle",
        "y": 157
      },
      {
        "x": "horse",
        "y": 270
      },
      {
        "x": "skateboard",
        "y": 163
      },
      {
        "x": "others",
        "y": 167
      }
    ]
  },
  {
    "id": "france",
    "data": [
      {
        "x": "plane",
        "y": 199
      },
      {
        "x": "helicopter",
        "y": 50
      },
      {
        "x": "boat",
        "y": 18
      },
      {
        "x": "train",
        "y": 71
      },
      {
        "x": "subway",
        "y": 108
      },
      {
        "x": "bus",
        "y": 128
      },
      {
        "x": "car",
        "y": 205
      },
      {
        "x": "moto",
        "y": 23
      },
      {
        "x": "bicycle",
        "y": 239
      },
      {
        "x": "horse",
        "y": 239
      },
      {
        "x": "skateboard",
        "y": 67
      },
      {
        "x": "others",
        "y": 38
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 211
      },
      {
        "x": "helicopter",
        "y": 293
      },
      {
        "x": "boat",
        "y": 126
      },
      {
        "x": "train",
        "y": 2
      },
      {
        "x": "subway",
        "y": 109
      },
      {
        "x": "bus",
        "y": 109
      },
      {
        "x": "car",
        "y": 48
      },
      {
        "x": "moto",
        "y": 45
      },
      {
        "x": "bicycle",
        "y": 150
      },
      {
        "x": "horse",
        "y": 123
      },
      {
        "x": "skateboard",
        "y": 190
      },
      {
        "x": "others",
        "y": 86
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 44
      },
      {
        "x": "helicopter",
        "y": 287
      },
      {
        "x": "boat",
        "y": 6
      },
      {
        "x": "train",
        "y": 168
      },
      {
        "x": "subway",
        "y": 183
      },
      {
        "x": "bus",
        "y": 295
      },
      {
        "x": "car",
        "y": 81
      },
      {
        "x": "moto",
        "y": 182
      },
      {
        "x": "bicycle",
        "y": 160
      },
      {
        "x": "horse",
        "y": 99
      },
      {
        "x": "skateboard",
        "y": 217
      },
      {
        "x": "others",
        "y": 125
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 139
      },
      {
        "x": "helicopter",
        "y": 12
      },
      {
        "x": "boat",
        "y": 42
      },
      {
        "x": "train",
        "y": 86
      },
      {
        "x": "subway",
        "y": 102
      },
      {
        "x": "bus",
        "y": 135
      },
      {
        "x": "car",
        "y": 292
      },
      {
        "x": "moto",
        "y": 122
      },
      {
        "x": "bicycle",
        "y": 259
      },
      {
        "x": "horse",
        "y": 115
      },
      {
        "x": "skateboard",
        "y": 218
      },
      {
        "x": "others",
        "y": 161
      }
    ]
  }
]

  return (
    <Card className="h-[500px]">
      <CardHeader>
                    <CardTitle>Lines</CardTitle>
                    <CardDescription>These are the stats of this year</CardDescription>
            </CardHeader>
  <CardContent className="h-full">
    <MyResponsiveLine data={data} />
  </CardContent>
</Card>

  )
}
