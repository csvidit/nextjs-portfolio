import React, { useEffect, useState } from "react";
import { gql, request } from "graphql-request";
import PoemContainer from "./PoemContainer";
import _ from "lodash"

const Poem = (props) => {
  const poemID = props.id;

  const [data, setData] = useState(null);
  useEffect(() => {
    const query = gql`
      {
        poems(where: { id: poemID }) {
          id
          publishDate
          title
          content {
            markdown
          }
          tags
          updatedAt
        }
      }
    `;

    request(process.env.REACT_APP_HYGRAPH_ENDPOINT, query)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!data) {
    return <LoadingPoem></LoadingPoem>;
  }


  return (
    <PoemContainer>
      {data.poems.map((item) => (
        <React.Fragment>
          {" "}
          <PoemTitle>{item.title}</PoemTitle>
          <PoemDate>{item.publishDate}</PoemDate>
          <PoemContent>{item.content}</PoemContent>
          <ShareButtons href={"https://viditkhandelwal.com/lit/poems/"+_.join(_.split(_.lowerCase(item.title), " "), "-")}></ShareButtons>
        </React.Fragment>
      ))}
    </PoemContainer>
  );
};

export default Poem;
