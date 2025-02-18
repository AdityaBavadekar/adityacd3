import styles from './App.module.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Router } from '@solidjs/router';
import NotFoundPage from './pages/404';
import Blogs from './pages/blogs';
import Projects from './pages/projects';

function App() {
  return (
    <div class={styles.App}>
      <Header />
      <Router>
        <Route path="/blogs" component={Blogs} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
