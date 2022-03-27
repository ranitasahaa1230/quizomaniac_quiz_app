import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
        <footer class="footer">
        <div>Made with 💕 by Ranita Saha</div>
        <div class="link-social">
          <a
            href="https://github.com/ranitasahaa1230/Quizomaniac"
            target="_blank"
            class="nav-pills"
            ><i class="fab fa-github icon"></i
          ></a>
          <a
            href="https://twitter.com/Ifullofsunshine"
            target="_blank"
            class="nav-pills"
            ><i class="fab fa-twitter icon"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/saharanitaa1230dreamer/"
            target="_blank"
            class="nav-pills"
            ><i class="fab fa-linkedin icon"></i
          ></a>
        </div>
        <span class="footer-copyright">© 2022 || Quizomaniac</span>
      </footer>
  )
}
