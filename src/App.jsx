import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import RunningStats from "./components/RunningStats";
import Events from "./components/Events";
import WeeklyRuns from "./components/WeeklyRuns";
import RunningRoutes from "./components/RunningRoutes";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Partners from "./components/Partners";
import Community from "./components/Community";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";
import "../styles/globals.css";
function App() {
  return (
    <div className="min-h-screen bg-nur-white">
      <Header />
      <Hero />
      <About />
      <RunningStats />
      <Events />
      <WeeklyRuns />
      <RunningRoutes />
      <Gallery />
      <Team />
      <Partners />
      <Community />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
