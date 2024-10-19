import { useEffect } from "react";
import { useSelector } from "react-redux";

function useGetItemCount(index){
    const state = useSelector((state)=> state.items.find((item) => item == index))
    useEffect
}