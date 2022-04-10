import { useEffect, useState } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [, setFalse] = useState(false);
    // const [old, setOld] = useState("2022");

    // const [generalstories, setGeneralstories] = useState(true)
    // const [shortstories, setShortstories] = useState(false)
    // const [longstories, setLongstories] = useState(false)


    console.log(products)
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    // upcoming
    // const upcomingMission = products.filter();
    // const selectedBlogs = products.filter(
    //     (blog) => blog.datetime.slice(0, 4) === old
    // );
    // const selectBlogs = recentData.filter(
    //     (blog) => blog.datetime.slice(0, 4) !== old
    // );
    // const selectedRecentBlogs = recentData.filter((blog) => blog.type === short);
    // const selectOldBlogs = recentData.filter((blog) => blog.type !== short);

    // return [recentData, selectedRecentBlogs, selectOldBlogs, selectedBlogs, selectBlogs, longstories, shortstories, generalstories];
    return [products,];
};