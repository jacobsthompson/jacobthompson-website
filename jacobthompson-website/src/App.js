import './App.css';
import MainPage from "./javascripts/MainPage";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
    return (
        <>
            <MainPage/>
            <Analytics/>
        </>
    );
}