

import { Pie, PieChart } from "recharts"

import PieChartSummaryStatus from "@/components/common/pieChartSummaryStatus"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A donut chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function BookingPieChart() {
  return (
    <Card className="flex flex-col ">
      <CardHeader className=" flex justify-between items-center pb-0">
        <CardTitle className="border ">Booking summary</CardTitle>
        <CardDescription>...</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square  max-h-[250px] "
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col">

        <PieChartSummaryStatus
          data={[
            { label: "confirmed", value: 60, color: "blue" },
            { label: "pending", value: 40, color: "#F59E0B" },
            { label: "checkedin", value: 20, color: "#22C55E" },
          ]}
        />

        <button className="w-full mt-8 py-2.5 bg-white text-primary rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
          Download Report
        </button>
      </CardFooter>
    </Card>
  )
}
