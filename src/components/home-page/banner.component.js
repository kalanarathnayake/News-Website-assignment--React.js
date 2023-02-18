import React from 'react'

export default function BannerTile(props) {
  return (
    <div>
      <div className="mx-5 rounded-md border-solid border-grey-500 border-2 shadow-md bg-white flex">
        <div className="m-5">
          <div className="text-lg font-semibold mb-2 font-serif">
            Categories
          </div>
          <div class="divide-y">
            <div className="text-base font-medium mb-2 font-serif">Latest</div>
            <div className="text-base font-medium mb-2 font-serif">Local</div>
            <div className="text-base font-medium mb-2 font-serif">Forigen</div>
            <div className="text-base font-medium mb-2 font-serif">Sports</div>
            <div className="text-base font-medium mb-2 font-serif">Photography</div>
            <div className="text-base font-medium mb-2 font-serif">Education</div>
          </div>
        </div>
      </div>
    </div>
  )
}