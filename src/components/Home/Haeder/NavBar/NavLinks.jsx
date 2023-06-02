import { HashLink as Link } from "react-router-hash-link";

const NavLinks = () => {
  const Links = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "NOSOTROS",
      link: "/#AboutUs",
    },
    {
      name: "SEGUROS PERSONALES",
      link: "/#Personal_Business_Insurance",
    },
    {
      name: "SEGUROS EMPRESARIALES",
      link: "/#Personal_Business_Insurance",
    },
    {
      name: "CONTACTO",
      link: "/",
    },
  ];

  return (
    <>
      {Links.map((itemMenu, i) => (
        <li key={i} className="font-semibold hover:text-primaryMenu">
          <Link to={itemMenu.link} smooth>
            {itemMenu.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
