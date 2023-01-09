import gql from "graphql-tag";
const CS_CARDS_QUERY = gql`
query ContentCards {
    contentCards {
      description
      href
      id
      title
    }
  }`
export default CS_CARDS_QUERY;