
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Home1 from './components/Mainpage/Home1';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import Singleproduct from './components/Singleproduct';
import Cart from './components/Cart';
import Errorpage from './components/Errorpage';
import GlobalStyle from './components/GlobalStyle';
import {ThemeProvider} from "styled-components"
import Header from './components/Header';

// import Nav from './compnents/Nav';
function App() {
   const theme={
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  
   }
  return (
   <>
   <ThemeProvider theme={theme}>

   <GlobalStyle/>
  <Router>
   
     {/* <Services/> */}
     {/* <Home1/> */}
     {/* <Nav/> */}
    {/* <div className="container my-3"> */}
    <Header/>
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/">
            <Home />
          
          </Route>
          <Route exact path="/about">
            <About/>
            </Route>
            
            <Route exact path="/contact">
            <Contact/>
            </Route>
            
            <Route exact path="/products">
            <Products/>
            </Route>
            
            <Route exact path="/singleproduct/:id">
            <Singleproduct/>
               </Route>
               <Route exact path="/Cart">
            <Cart/>
               </Route>
               <Route exact path="*">
            <Errorpage/>
               </Route>

            
    </Switch>
   
    {/* </div> */}


    </Router>

        </ThemeProvider>
   </>
  );
}

export default App;
