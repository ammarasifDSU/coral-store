import { type ClassValue, clsx} from "clsx"
import { ReadonlyURLSearchParams } from "next/navigation";
import {twMerge} from "tailwind-merge"

export function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(str: string){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
    const paramsString = params.toString();
    const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;
  
    return `${pathname}${queryString}`;
  };

export function calculateAfterDiscountPrice(originalPrice: number, discountPercentage: number): number {
    // Ensure that discountPercentage is a valid percentage (between 0 and 100)
    if (discountPercentage < 0 || discountPercentage > 100) {
      throw new Error("Discount percentage must be between 0 and 100.");
    }
  
    // Calculate the discount amount
    const discountAmount = (originalPrice * discountPercentage) / 100;
  
    // Calculate the after discount price
    const afterDiscountPrice = originalPrice - discountAmount;
  
    // Round the result to two decimal places
    return Math.round(afterDiscountPrice * 100) / 100;
  }

export  function grandTotalPrice (totalPrice:number,deliveryFee:number):number {
    let totalPriceValue = totalPrice ? totalPrice : 0;
    let totalWithDelivery = totalPriceValue + deliveryFee;
    return Number(totalWithDelivery.toFixed(2));
  };