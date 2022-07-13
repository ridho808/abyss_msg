import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DetailsPost from './Pages/Details';
import Home from './Pages/Home';
import AddPost from './Pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='*' element={<Home/>}></Route>
        <Route path='/AddFeed' element={<AddPost/>}></Route>
        <Route path='/see/:id' element={<DetailsPost/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
