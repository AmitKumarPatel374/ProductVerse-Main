import { useEffect, useState } from 'react';
import Nav from './components/Nav'
import MainRoutes from './routes/MainRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { asynccurrentuser } from './store/Actions/UserActions';
import { asyncloadpoducts } from './store/Actions/ProductActions';
import Footer from './components/Footer';

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);
  const [query, setQuery] = useState('');

  useEffect(() => {
    !user && dispatch(asynccurrentuser());
  }, [user]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncloadpoducts());
  }, []);

  return (
    <div className="flex flex-col min-h-screen  font-thin">
      <Nav setQuery={setQuery} query={query} />

      {/* Main content grows and pushes footer down */}
      <main className="flex-grow">
        <MainRoutes query={query} setQuery={setQuery} />
      </main>

      <Footer />
    </div>

  )
}

export default App
