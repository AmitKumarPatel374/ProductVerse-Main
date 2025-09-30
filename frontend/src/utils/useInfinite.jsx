import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadlazyproducts, loadproducts } from "../store/reducers/ProductSlice";
import axios from "../api/Config";

const useInfinite = () => {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(false);
  const startRef = useRef(0); // keeps track of current start index

  const LIMIT = 8;

  const asyncsmartloadproduct = async () => {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true;

    try {
      const { data } = await axios.get(
        `/products?_limit=${LIMIT}&_start=${startRef.current}`
      );

      if (data.length === 0) {
        setHasMore(false);
        console.log("✅ All products fetched");
      } else {
        dispatch(loadlazyproducts(data));
        startRef.current += LIMIT;
        console.log("✅ Fetched new products!");
      }
    } catch (err) {
      console.error("Error loading products:", err);
      setHasMore(false);
    } finally {
      loadingRef.current = false;
    }
  };

  useEffect(() => {
    dispatch(loadproducts([])); // clear old products
    startRef.current = 0;       // reset start index
    asyncsmartloadproduct();
  }, []);

  return { products, hasMore, asyncsmartloadproduct };
};

export default useInfinite;
