import Cookies from 'universal-cookie';

const Logout = () => {
  const cookies = new Cookies();

    cookies.remove("username");
    cookies.remove("name");
    cookies.remove("surname");
    cookies.remove("email");
    cookies.remove("role");

    window.location.href="/";
}

export default Logout