import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
       <footer>
        <div className="footer-content">
            <NavLink to="/"><img width="100px" alt="logo" src="logo192.png"/></NavLink>
            <p>ShopR is shoping Cart web app which is built using Reactjs, React Hooks, React-Bootstrap,HTML,CSS and data is getting through Faker data - which provides fakes data.</p>
            <ul className="socials">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-google-plus"></i></li>
                <li><i className="fa fa-youtube"></i></li>
                <li><i className="fa fa-linkedin-square"></i></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy; Adarsh Mishra - MERN Developer  </p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                      </ul>
                    </div>
        </div>

    </footer>
    </div>
  )
}

export default Footer