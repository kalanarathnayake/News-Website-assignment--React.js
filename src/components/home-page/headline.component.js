import React from 'react'
import news01 from "../../assets/news/news01.jpeg";

export default function HeadlineTile(props) {
    return (
        <div>
            <div className="flex mx-5 bg-white border-2 border-solid rounded-md shadow-md border-grey-500">
                <div>
                    <img src={news01} alt="" className="w-full h-full rounded-md" />
                </div>
                <div className="w-10/12 m-5">
                    <div className="mb-2 font-serif text-xl font-semibold">{props.title}</div>
                    <div className="font-serif text-sm text-justify">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
