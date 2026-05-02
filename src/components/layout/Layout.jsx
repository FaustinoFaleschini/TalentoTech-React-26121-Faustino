import Header from './Header'
import Footer from './Footer'
import NavBarContainer from './NavBarContainer';

function Layout({children}) {
  
  return (
      <div>
        <Header />
        <NavBarContainer />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  );
}


export default Layout;