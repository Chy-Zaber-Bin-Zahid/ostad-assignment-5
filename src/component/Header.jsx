import '../assets/css/header.css';
function Header(props) {

  return (
    <div>
      <h1 className="title">{props.title}</h1>
    </div>
  )
}

export default Header
