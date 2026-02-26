

type statusItem = {
    label: string
    color:string
    value: number
}

type statusSummaryProps = {
    data: statusItem[]
}
const PieChartSummaryStatus = ({ data }: statusSummaryProps) => {
    const total =data.reduce((sum,item) => sum +item.value,0)
    return (
        <div className=" w-full space-y-2 ">
            {data.map((item) => {
             const percentage =total ?Math.round((item.value)/total)*100 :0
             return (
                  <div className="flex justify-between gap-4  items-center">
                    <div className="flex items-center gap-2">
                        <span className={`w-4 h-4  border rounded-full`} style={{backgroundColor:item.color}} />
                        <p>{item.label}</p>
                    </div>
                    <span className="">{percentage}%</span>
                </div>
             )
})}


        </div>
    )
}

export default PieChartSummaryStatus