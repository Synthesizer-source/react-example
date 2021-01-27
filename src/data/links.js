import Home from "../components/Home/Home";
import About from "../components/About/About";
import Courses from "../Courses";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Search from "../Search";
import Contact from "../Contact";
import NotFound from "../NotFound";

export const links = [
  { link: "/", title: "Home", component: Home, isExact: true, isLink: true },
  {
    link: "#about",
    title: "About",
    component: About,
    isExact: false,
    isLink: true
  },
  {
    link: "/courses",
    title: "Courses",
    component: Courses,
    isExact: true,
    isLink: true
  },
  {
    link: "/courses/search",
    title: "Search",
    component: Search,
    isExact: true,
    isLink: false
  },
  {
    link: "/courses/:id",
    title: "Product Detail",
    component: ProductDetail,
    isExact: false,
    isLink: false
  },

  {
    link: "/contact",
    title: "Contact",
    component: Contact,
    isExact: false,
    isLink: true
  },
  {
    link: "/404",
    title: "404",
    component: NotFound,
    isExact: false,
    isLink: false
  }
];
