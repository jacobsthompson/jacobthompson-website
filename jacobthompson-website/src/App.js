import './App.css';
import MainPage from "./javascripts/MainPage";
import { Analytics } from "@vercel/analytics/react";
import {JTWatermark} from "./javascripts/Watermark";

export default function App() {
    return (
        <body>
            <MainPage/>
            <Analytics/>
        </body>
    );
}