import React from 'react'
import news01 from "../../assets/news/news01.jpeg";

export default function HeadlineTile(props) {
    return (
        <div>
            <div className="mx-5 rounded-md border-solid border-grey-500 border-2 shadow-md bg-white flex">
                <div>
                    <img src={news01} alt="" className="h-full w-full rounded-md" />
                </div>
                <div className="m-5 w-10/12">
                    <div className="text-xl font-semibold mb-2 font-serif">{props.title}</div>
                    <div className="text-sm text-justify font-serif">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
