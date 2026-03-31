import './App.css';
import MainPage from "./javascripts/MainPage";
import { Analytics } from "@vercel/analytics/react";
import Stars from "./javascripts/Stars";

const starRandomizedValue = new Date().toString();

export default function App() {
    return (
        <>
            <MainPage/>
            <Stars count={500} randomizer={starRandomizedValue}/>
            <Analytics/>
        </>
    );
}