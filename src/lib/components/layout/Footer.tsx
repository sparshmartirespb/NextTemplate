const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p>
          {new Date().getFullYear()} -{" "}
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            Pure Billion Next Boilerplate
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
