import {Card, Icon, Text} from './index'

const StatsCard = ({icon, subheader, amount, stats, month}) => {
  return (
    <Card className="p-6 relative">
      <div>
        <div className="flex justify-between  gap-20 mb-4">
          <Icon src={icon} width={80} height={80} />
          <Icon src="showmore" width={50} height={50} className="cursor-pointer" />
        </div>

        <div className="flex flex-col gap-2">
          <Text variant="graytext" text={subheader} />
          <Text variant="blackheading" className="text-2xl" text={amount} />
          <div className="flex gap-2">
            <div className="flex  items-center gap-2">
              <Icon src="statsup" width={20} height={20} />
              <Text variant="greentext" text={stats} />
            </div>
            <div className="flex gap-2">
              <p>from</p>
              <Text variant="text" text={month} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default StatsCard
