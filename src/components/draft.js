<BrowserRouter>
  <Link to="/">HOME</Link>
  <Link to="/app">STARSHIPS</Link>
  <hr />
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/app" element={<App />} />
  </Routes>
</BrowserRouter>;
