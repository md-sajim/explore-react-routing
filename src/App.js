import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componant/Home/Home';
import About from './componant/About/About';
import SignIn from './componant/SignUp/SignIn';
import SignOut from './componant/SignOut/SignOut';
import Doc from './componant/Doc/Doc';
import Product from './componant/Product/Product';
import Main from './Layout/Main';
import Frinds from './componant/Frinds/Frinds';
import FriendDetil from './componant/FriendDetail/FriendDetil';
import Post from './componant/Post/Post';
import PostInfo from './componant/PostInfo/PostInfo';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children: [
        { path: "home", element: <Home></Home> },
        { path: "about", element: <About></About> },
        { path: "product", element: <Product></Product> },
        {
          path: "friends",
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Frinds></Frinds>
        },
        {
          path: "/friend/:friendId",
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetil></FriendDetil>
        },
        {
          path: "/post",
          loader: () => {
            return fetch("https://jsonplaceholder.typicode.com/posts")
          },
          element: <Post></Post>
        },
        {
          path: "/postinfo/:postin",
          loader: ({ params }) => {
            console.log(params)
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postin}`)
          },
          element: <PostInfo></PostInfo>
        }
      ]
    },
    { path: "signup", element: <SignIn></SignIn> },
    { path: "signout", element: <SignOut></SignOut> },
    { path: "doc", element: <Doc></Doc> },
    { path: "*", element: <div>Page not Found 404</div> }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
