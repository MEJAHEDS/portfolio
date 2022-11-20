import React from "react";

export const Home = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous"
      ></link>
      <div class="wrapper">
        <header class="header">Header</header>
        <div class="main">
          <div className="container-txt center">
            <h3>Mejahed Soufiane</h3>
            <p>
              Web Designer & Developer. Let us do good work for the good of all.
            </p>
          </div>
          <div className="container-img">
            <img
              className="imgpro"
              src={require("/Users/soufianemejahed/Desktop/Delivery/portfolio/src/img/photo.jpeg")}
              alt="test"
            />
          </div>
        </div>
        <aside class="aside aside-1">
          <h4>Who I'm</h4>{" "}
          <p>
            Hello i'm soufiane mejahedHello i'm soufiane mejahedHello i'm
            soufiane mejahedHello i'm soufiane mejahed
          </p>
        </aside>
        <aside class="aside aside-2">
          <p>Project 1: dashboard</p>
          <p>Project 2: dashboard</p>
          <p>Project 3: dashboard</p>
        </aside>
        <footer class="footer">
          <a href="#">
            <i class="fab fa-github"></i>
          </a>
          <a href="#">
            <i class="fab fa-gitlab"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            class="email-link"
            href="mailto:johnson.s.jake@gmail.com?subject=Let's work together"
          >
            <i class="fas fa-envelope"></i>
          </a>
          <p>&copy;mejahed</p>
        </footer>
      </div>
    </>
  );
};
