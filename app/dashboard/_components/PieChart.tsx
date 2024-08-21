"use client"

import { TrendingUp } from "lucide-react"
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import { generateAgeGroupData } from "@/app/_services/Services"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const chartConfig = {

  es_transportation: {
    label: "Transportation",
    color: "blue", // Change this as per your color definition
  },
  es_health: {
    label: "Health",
    color: "hsl(var(--chart-2))", // Change this as per your color definition
  },
  es_food: {
    label: "Food",
    color: "hsl(var(--chart-3))", // Change this as per your color definition
  },
} satisfies ChartConfig;

export function PieChart1({allDataList}:any) {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])
  const categories = ["es_transportation", "es_food", "es_health"];
  const newData = generateAgeGroupData(allDataList);

  console.log(newData)

  

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Age Distribution</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={newData}
              dataKey='amount'
              nameKey="agegroup"
              innerRadius={60}
            
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {newData.length.toLocaleString()}
                        </tspan>
                      
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            
           
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Age group possession <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total amount possessed by different age groups
          
        </div>
      </CardFooter>
    </Card>
  )
}
