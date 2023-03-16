// import "./styles.css";
import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from "react";

export default function Test() {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setPosts(data.slice(0, 6));
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (postIndex) => {
    setPosts((prevPosts) =>
      prevPosts.filter((_, index) => index !== postIndex)
    );
  };

  return (
    <TableBody>
      {posts.map((post, postIndex) => (
        <TableRow key={post.id}>
          <TableCell component="th" scope="row">
            {post.title}
          </TableCell>
          <TableCell align="center">{post.body}</TableCell>
          <TableCell align="center">
            {/* <DialogBoxEdit dataParent1={post.title} dataParent2={post.body} /> */}
          </TableCell>
          <TableCell align="center">
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDelete(postIndex)}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
