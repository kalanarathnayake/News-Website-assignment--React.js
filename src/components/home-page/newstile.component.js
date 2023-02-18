import React from "react";
import { Link } from "react-router-dom";

export default function NewsTile(props) {
  return (
    <div class="py-5">
      <Link
        to={{
          pathname: `/viewnews/${props.newsId}`,
        }}
      >
        <div className=" h-3/4">
          <img src={props.src} className="h-full rounded-tl-lg rounded-tr-md" />
          <h3 class="mt-2 text-xl text-gray-800 font-bold font-serif">
            {props.title}
          </h3>
          <p class="mt-1 text-base text-gray-600">
            {props.description.slice(0, 100)}...
          </p>
        </div>
      </Link>
    </div>
  );
}
