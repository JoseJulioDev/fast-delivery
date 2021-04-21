import { ReactComponent as Pizza} from './pizza.svg'

function ProductCard() {
  return (
    <div className="card-container">
      <h3 className="card-content">
        Pizza Calabresa
      </h3>
      <Pizza className="card-image"/>
      <h3 className="card-price">
        R$ 40,00
      </h3>
      <div className="card-description">
          <h3>Descrição</h3>
          <p>
            Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.
          </p>
      </div>
    </div>
  )
}

export default ProductCard;