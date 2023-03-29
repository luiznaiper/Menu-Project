import Title from './Title'
import menu from './data'
import Menu from './Menu'
import Categories from './Categories'

const tempCategories = menu.map((item) => item.category)
const tempSet = new Set(tempCategories)
const allCategories = ['all', ...tempSet]

//Another way to take the allCategories in one line (shorter)
// const cat = ['all', ...new Set(menu.map((item) => item.category))]

function App() {
  const menuItems = menu
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={allCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
