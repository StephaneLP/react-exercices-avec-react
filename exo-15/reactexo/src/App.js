import MealList from "./MealList"
import MealRandom from "./MealRandom";
import MealsCategoriesList from "./MealsCategoriesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
            <Route path="MealList" element={<MealList />} />
            <Route path="MealRandom" element={<MealRandom />} />
            <Route path="MealsCategoriesList" element={<MealsCategoriesList />} />            
        </Routes>
    </div>
  );
}

export default App;
