import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./Components/post/Post.jsx";
import { PostList } from "./Components/post/PostList.jsx";
import { PostEdit } from "./Components/post/EditPost.jsx";
import { PostCreate } from "./Components/post/CreatePost.jsx";
import { Dashboard } from "./Components/home/Home.jsx";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>
);

export default App;