import Layout from './components/layout/Layout'
import TarjetaProductoContainer from './components/TarjetaProducto/TarjetaProductoContainer'

function App() {
  
  return (
    <Layout>
      {/* Todo lo que pongamos acá adentro irá donde estaba {children} */}
      
      
      <TarjetaProductoContainer />
    </Layout>
  )
}

export default App

