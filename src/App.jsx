import Title from './Title'
import menu from './data'
import Menu from './Menu'

function App() {
  const menuItems = menu
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
