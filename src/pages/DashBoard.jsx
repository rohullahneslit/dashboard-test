import {Card, StatsCard, Chart, Text, Table, Icon} from '../components'
import {contriesData, statsCardsStats, statsCardsSales, columns, data} from '../constants'

const DashBoard = () => {
  return (
    <div className="w-full">
      {/*  Stats */}
      <div className="flex  gap-5 lg:flex-nowrap flex-wrap">
        <Card className="lg:w-11/12 w-full">
          <Chart />
        </Card>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-5   lg:flex-nowrap flex-wrap ">
            {statsCardsSales.map(item => (
              <div key={item.id} className="w-full">
                <StatsCard
                  icon={item.icon}
                  subheader={item.subheader}
                  amount={item.amount}
                  stats={item.stats}
                  month={item.month}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-5  lg:flex-nowrap flex-wrap ">
            {statsCardsStats.map(item => (
              <div key={item.id} className="w-full">
                <StatsCard
                  icon={item.icon}
                  subheader={item.subheader}
                  amount={item.amount}
                  stats={item.stats}
                  month={item.month}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tables */}
      <div className="my-5 flex gap-5 items-center flex-wrap">
        <Card className="flex-grow w-12 overflow-y-auto ">
          <Text variant="blackheading" className="text-xl" text="Selling Products" />
          <Table data={data} columns={columns} />
        </Card>
        <Card className="lg:w-auto w-full">
          <Text variant="blackheading" className="text-xl" text="Top Countries" />
          <div className="my-2">
            {contriesData.map(country => (
              <div key={country.id} className="flex items-center justify-between gap-6 my-7">
                <div className="flex items-center gap-2  ">
                  <Icon src={country.icon} width={30} height={30} />
                  <Text vartiant="" text={country.name} />
                </div>
                <div className="font-bold ">{country.percentage} % </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DashBoard
