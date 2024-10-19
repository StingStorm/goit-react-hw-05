import './App.css';
import Header from './components/AppHeader/AppHeader';
import { fetchingTrendingList } from './services/tmdb-api';

function App() {
  const getTrending = async () => {
    try {
      const response = await fetchingTrendingList();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  getTrending();
  return (
    <>
      <Header />
    </>
  );
}

export default App;
