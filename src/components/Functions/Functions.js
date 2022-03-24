// Function for getting site name
export const getSiteName = () => {
  return 'Avanturisti izazovne prirode';
};

export const getSlogan = () => {
  return 'Slogan?';
};

export const getMainLinks = () => {
  return [
    {index: {name: 'AIP', path: '/'}},
    {blog: {name: 'Blog', path: '/posts'}},
    {about: {name: 'O nama', path: '/about'}},
    {contact: {name: 'Kontakt', path: '/contact'}}
  ];
};

// <li>
//   <Link to="/">AIP</Link>
// </li>
// 
// <li>
//   <Link to="/posts">Blog</Link>
// </li>
// 
// <li>
//   <Link to="/about">O nama</Link>
// </li>
// 
// <li>
//   <Link to="/contact">Kontakt</Link>
// </li>
