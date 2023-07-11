import Header from './component/Header';
import './app.css'
import Content from './component/Content';
import Footer from './component/Footer';

function App() {
  const quote = "I Am The Raja!"
  return (
    <div>
      <Header title="This is a title!"></Header>
      <Content></Content>
      <Footer quote = {quote}></Footer>
    </div>
  )
}

export default App
