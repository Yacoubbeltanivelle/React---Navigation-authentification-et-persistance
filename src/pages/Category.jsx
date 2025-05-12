import { useParams } from "react-router";

function Category() {
  const { categoriId } = useParams();
  return (
    <div>
      <h1>Détails du blog avec l'ID : {categoriId}</h1>
    </div>
  );
}

export default Category;
