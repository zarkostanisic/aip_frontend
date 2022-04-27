// Function for getting site name
export const getSiteName = () => {
  return 'Avanturisti izazovne prirode';
};

export const getSlogan = () => {
  return 'Zajedno do vrha <i class="fa fa-regular fa-mountain"></i>';
};

export const getMainLinks = () => {
  return [
    {index: {name: 'AIP', path: '/'}},
    {blog: {name: 'Blog', path: '/posts'}},
    {about: {name: 'O nama', path: '/about'}},
    {contact: {name: 'Kontakt', path: '/contact'}}
  ];
};
