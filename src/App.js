import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import About from './Components/About'
import Missing from './Components/Missing'
import Post from './Components/Post'

import CE from './asserts/CE.jpg'
import DataAdmin from './asserts/data admin.jpg'
import DataEncrpyt from './asserts/data-encrypt.jpg'
import PenTest from './asserts/pen-test.jpg'
import PYJava from './asserts/python vs java.jpg'
import TechComm from './asserts/tech communication.jpg'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      img: CE,
      title: 'Title One',
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis aut quibusdam? Voluptatibus qui nesciunt, enim facilis labore repudiandae sunt accusamus tenetur tempora sed, facere nostrum, debitis commodi praesentium voluptate est harum esse vero! Dolorum, autem commodi rerum at hic non dolore? Mollitia fugit vero quae odio excepturi hic provident ipsum amet distinctio alias. Blanditiis animi unde veniam accusamus natus, iste fuga ex architecto cumque! Aspernatur animi minus accusantium sequi corrupti adipisci, quod quaerat iste laudantium sit veniam saepe harum illum hic. Veniam tempore, voluptatum nisi nam, quos et alias quibusdam fugiat consectetur distinctio sequi delectus reprehenderit at sit dolorem"
    },
    {
      id: 2,
      img: DataAdmin,
      title: 'Title Two',
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis aut quibusdam? Voluptatibus qui nesciunt, enim facilis labore repudiandae sunt accusamus tenetur tempora sed, facere nostrum, debitis commodi praesentium voluptate est harum esse vero! Dolorum, autem commodi rerum at hic non dolore? Mollitia fugit vero quae odio excepturi hic provident ipsum amet distinctio alias. Blanditiis animi unde veniam accusamus natus, iste fuga ex architecto cumque! Aspernatur animi minus accusantium sequi corrupti adipisci, quod quaerat iste laudantium sit veniam saepe harum illum hic. Veniam tempore, voluptatum nisi nam, quos et alias quibusdam fugiat consectetur distinctio sequi delectus reprehenderit at sit dolorem"
    },
    {
      id: 3,
      img: DataEncrpyt,
      title: 'Title Three',
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis aut quibusdam? Voluptatibus qui nesciunt, enim facilis labore repudiandae sunt accusamus tenetur tempora sed, facere nostrum, debitis commodi praesentium voluptate est harum esse vero! Dolorum, autem commodi rerum at hic non dolore? Mollitia fugit vero quae odio excepturi hic provident ipsum amet distinctio alias. Blanditiis animi unde veniam accusamus natus, iste fuga ex architecto cumque! Aspernatur animi minus accusantium sequi corrupti adipisci, quod quaerat iste laudantium sit veniam saepe harum illum hic. Veniam tempore, voluptatum nisi nam, quos et alias quibusdam fugiat consectetur distinctio sequi delectus reprehenderit at sit dolorem"
    },
    {
      id: 4,
      img: PYJava,
      title: 'Title Four',
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis aut quibusdam? Voluptatibus qui nesciunt, enim facilis labore repudiandae sunt accusamus tenetur tempora sed, facere nostrum, debitis commodi praesentium voluptate est harum esse vero! Dolorum, autem commodi rerum at hic non dolore? Mollitia fugit vero quae odio excepturi hic provident ipsum amet distinctio alias. Blanditiis animi unde veniam accusamus natus, iste fuga ex architecto cumque! Aspernatur animi minus accusantium sequi corrupti adipisci, quod quaerat iste laudantium sit veniam saepe harum illum hic. Veniam tempore, voluptatum nisi nam, quos et alias quibusdam fugiat consectetur distinctio sequi delectus reprehenderit at sit dolorem"
    },
    {
      id: 5,
      img: TechComm,
      title: 'Title Five',
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis aut quibusdam? Voluptatibus qui nesciunt, enim facilis labore repudiandae sunt accusamus tenetur tempora sed, facere nostrum, debitis commodi praesentium voluptate est harum esse vero! Dolorum, autem commodi rerum at hic non dolore? Mollitia fugit vero quae odio excepturi hic provident ipsum amet distinctio alias. Blanditiis animi unde veniam accusamus natus, iste fuga ex architecto cumque! Aspernatur animi minus accusantium sequi corrupti adipisci, quod quaerat iste laudantium sit veniam saepe harum illum hic. Veniam tempore, voluptatum nisi nam, quos et alias quibusdam fugiat consectetur distinctio sequi delectus reprehenderit at sit dolorem"
    },
    {
      id: 6,
      img: PenTest,
      title: 'Title Six',
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis aut quibusdam? Voluptatibus qui nesciunt, enim facilis labore repudiandae sunt accusamus tenetur tempora sed, facere nostrum, debitis commodi praesentium voluptate est harum esse vero! Dolorum, autem commodi rerum at hic non dolore? Mollitia fugit vero quae odio excepturi hic provident ipsum amet distinctio alias. Blanditiis animi unde veniam accusamus natus, iste fuga ex architecto cumque! Aspernatur animi minus accusantium sequi corrupti adipisci, quod quaerat iste laudantium sit veniam saepe harum illum hic. Veniam tempore, voluptatum nisi nam, quos et alias quibusdam fugiat consectetur distinctio sequi delectus reprehenderit at sit dolorem"
    },
  ])

  return (
    <Router>
      <Navbar title = "DoriBlog"/>
      <Routes>
        <Route path = '/' element = {<Home
        posts = {posts}
        setPosts = {setPosts}
        />}/>
        <Route path = 'about' element = {<About/>}/>
        <Route path = 'post' element = {<Post/>}/>
        <Route path = '*' element = {<Missing/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
