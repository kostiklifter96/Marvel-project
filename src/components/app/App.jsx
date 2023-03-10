import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import SinglePage from "../pages/SinglePage";
import Spinner from "../spinner/Spinner";
import SingleCharacterLayout from "./../pages/singleCharacterLayout/SingleCharacterLayout";

const Page404 = lazy(() => import("../pages/404/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicPage = lazy(() =>
    import("../pages/singleComic/SingleComicPage"),
);

const App = () => {
    return (
        <Router basename='/Marvel-project'>
            <div className='app'>
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path='/' element={<MainPage />} />
                            <Route path='comics' element={<ComicsPage />} />

                            <Route
                                path='/comics/:id'
                                element={
                                    <SinglePage
                                        Component={SingleComicPage}
                                        dataType='comic'
                                    />
                                }
                            />
                            <Route
                                path='/characters/:id'
                                element={
                                    <SinglePage
                                        Component={SingleCharacterLayout}
                                        dataType='character'
                                    />
                                }
                            />
                            <Route path='*' element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    );
};

export default App;
