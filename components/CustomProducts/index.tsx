import React from "react";
import Image from "next/image";

import StarRating from "@/common/StarRating";
import styles from "@/styles/customProduct.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  item: {
    image: string;
    name: string;
    price: string;
  };
}

const CustomProduct = ({ item }: Props) => {
  return (
    <div
      className={`flex flex-row align-middle justify-start mb-6 ${cx(
        "customProduct"
      )}`}
    >
      <div className={`mr-3 ${cx("imageProduct")}`}>
        <Image src={item.image} alt="product" width={80} height={80} />
      </div>
      <div>
        <StarRating />
        <div className="text-xl mb-3">{item.name}</div>
        <div className="text-amber-500">{item.price}</div>
      </div>
    </div>
  );
};

export default CustomProduct;
