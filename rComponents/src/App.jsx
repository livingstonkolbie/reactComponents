
// This is a functional component. 
function App() {


  return (
    <div className="container">
      <Header />
    </div>
  )
}


function Header() {

  return (
    <header role="banner" className="row">
      <div className="col-6 logoWords">
        <h1>Top 5 Movie List</h1>
      </div>
    </header>
  )
}

function Main() {

  return (
    <main role="main" className="row">

    </main>
  )
}

// You can only export ONE functional component per file.
export default App
