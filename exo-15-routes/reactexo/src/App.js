import Home from "./pages/Home";
import MealList from "./pages/MealList"
import MealRandom from "./pages/MealRandom";
import MealsCategoriesList from "./pages/MealsCategoriesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css"

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/meal-list" element={<MealList />} />
                <Route path="/meal-random" element={<MealRandom />} />
                <Route path="/meal-categories" element={<MealsCategoriesList />} />            
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
