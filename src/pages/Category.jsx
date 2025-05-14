import { useParams } from "react-router";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

function Category() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Détails du blog avec l'ID : {categoryId}</h1>
      <Button onClick={returnHome} variant="primary">
        Retour à la page d'accueil
      </Button>
    </div>
  );
}

export default Category;
