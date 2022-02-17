import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';


function App() {
  return (
    <div className="App">
      <Router>
      <Header>


</Header>
      
    
        <Routes>
 
 
         
        <Route path='/productlisting' element={<ProductListing/>}/>
          <Route path='/product/:productId' element={<ProductDetail/>}/>
          <Route>   404  Not FOUND!</Route>

        </Routes>


      </Router>
      
    </div>
  );
}

export default App;
