import React from 'react'
import CardTable from 'components/Cards/CardTable'

export default function Winning({aka, showClickHere}) {
    return (
        <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable title='Winning Amount Summary (₦ Naira)' aka='games-played' showClickHere={false}/>
        </div>
      </div>
    )
}
