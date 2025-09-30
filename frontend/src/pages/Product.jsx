import { lazy, Suspense } from 'react';
const ProductTemplate = lazy(() => import('../components/ProductTemplate'));
import InfiniteScroll from "react-infinite-scroll-component";
import useInfinite from '../utils/useInfinite';

const Product = ({ query }) => {
  const { products, hasMore, asyncsmartloadproduct } = useInfinite();

  return (
    <div id="scrollableDiv" className="h-[calc(100vh-60px)] overflow-y-auto">
      <InfiniteScroll
        dataLength={products.length}
        next={asyncsmartloadproduct}
        hasMore={hasMore}
        loader={<h4 className="text-center my-4">Loading...</h4>}
        endMessage={
          <p className="text-center my-4">
            <b>Yay! You have seen it all</b>
          </p>
        }
        scrollableTarget="scrollableDiv"
      >
        <div className="flex flex-wrap gap-4 justify-around mt-10 w-full px-4">
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((p) => (
              <Suspense key={p.id} fallback={<div>Loading...</div>}>
                <ProductTemplate p={p} />
              </Suspense>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Product;
