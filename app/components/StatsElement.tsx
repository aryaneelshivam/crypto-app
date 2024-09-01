import React from 'react'

const StatsElement = () => {
  return (
      <div className="flex justify-center">
        <div className="stats stats-vertical lg:stats-horizontal shadow bg-black">
          <div className="stat">
            <div className="stat-title"><span className='text-orange-300'>Total Users</span></div>
            <div className="stat-value">1000+</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
        
          <div className="stat">
            <div className="stat-title"><span className='text-blue-300'>Community</span></div>
            <div className="stat-value">450</div>
            <div className="stat-desc">↗︎ 200 (50%)</div>
          </div>
        
          <div className="stat">
            <div className="stat-title"><span className='text-yellow-300'>Crypto Marketcap</span></div>
            <div className="stat-value">2.13 Trillion</div>
            <div className="stat-desc">Globally ↘︎ 3.16%</div>
          </div>

          <div className="stat">
            <div className="stat-title"><span className='text-purple-300'>Bitcoin Marketcap</span></div>
            <div className="stat-value">1140 B+</div>
            <div className="stat-desc">Billion US Dollars</div>
          </div>

          <div className="stat">
            <div className="stat-title"><span className='text-green-300'>Ethereum Marketcap</span></div>
            <div className="stat-value">290 B+</div>
            <div className="stat-desc">Billion US Dollars</div>
          </div>
        </div>
    </div>
  )
}

export default StatsElement
