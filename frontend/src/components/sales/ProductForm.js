import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";

import "./product-form-styles.css"


function ProductForm(props) {

  //const [isEdit, setIsEdit] = useState(props.location.state);
  const isEdit = false;

  // Put default values:
  let id = isEdit ? isEdit.data.id : "";
  let name = isEdit ? isEdit.data.name : "";
  let purchasePrice = isEdit ? isEdit.data.purchasePrice : "";
  let salePrice = isEdit ? isEdit.data.salePrice : "";
  let stock = isEdit ? isEdit.data.stock : "";
  let minimumStock = isEdit ? isEdit.data.minimumStock : "";
  let description = isEdit ? isEdit.data.description : "";
  let barCode = isEdit ? isEdit.data.barCode : "";
  let location = isEdit ? isEdit.data.location : "";

  // Use custom hook
  const { value: valueName, onChange: onChangeName, reset: resetName } = useInput(name);
  const { value: valuePurchasePrice, onChange: onChangePurchasePrice, reset: resetPurchasePrice } = useInput(purchasePrice);
  const { value: valueSalePrice, onChange: onChangeSalePrice, reset: resetSalePrice } = useInput(salePrice);
  const { value: valueStock, onChange: onChangeStock, reset: resetStock } = useInput(stock);
  const { value: valueMinimumStock, onChange: onChangeMinimumStock, reset: resetMinimumStock } = useInput(minimumStock);
  const { value: valueDescription, onChange: onChangeDescription, reset: resetDescription } = useInput(description);
  const { value: valueBarCode, onChange: onChangeBarCode, reset: resetBarCode } = useInput(barCode);
  const { value: valueLocation, onChange: onChangeLocation, reset: resetLocation } = useInput(location);

  const handleReset = () => {
    resetName();
    resetPurchasePrice();
    resetSalePrice();
    resetStock();
    resetMinimumStock();
    resetDescription();
    resetBarCode();
    resetLocation();
  }

  const handleAdd = (event) => {
    event.preventDefault();
    //const username = window.sessionStorage.getItem("username");
    const username = "admin";
    const body = {
      name: valueName,
      purchasePrice: valuePurchasePrice,
      dni: valueSalePrice,
      stock: valueStock,
      minimumStock: valueMinimumStock,
      description: valueDescription,
      barCode: valueBarCode,
      location: valueLocation,
      createdBy: username,
      updatedBy: username,
    }
    console.log(body);
    handleReset();
  }

  return (
    <div className="puggysoft-product-form" >
      <Card>
        <Card.Title>{i18n.productForm.title}</Card.Title>
        <Card.Body>
          <Form >
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>{i18n.productForm.fieldName}</Form.Label>
              <Form.Control
                onChange={onChangeName}
                value={valueName}
                type="text"
                placeholder={i18n.productForm.fieldName} />
              {/*<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>*/}
            </Form.Group>
            <Form.Group className="mb-3" controlId="purcharse-price">
              <Form.Label>{i18n.productForm.fieldPurchasePrice}</Form.Label>
              <Form.Control
                onChange={onChangePurchasePrice}
                value={valuePurchasePrice}
                type="number"
                placeholder={i18n.productForm.fieldPurchasePrice} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="sale-price">
              <Form.Label>{i18n.productForm.fieldSalePrice}</Form.Label>
              <Form.Control
                onChange={onChangeSalePrice}
                value={valueSalePrice}
                type="number"
                placeholder={i18n.productForm.fieldSalePrice} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="stock">
              <Form.Label>{i18n.productForm.fieldStock}</Form.Label>
              <Form.Control
                onChange={onChangeStock}
                value={valueStock}
                type="number"
                placeholder={i18n.productForm.fieldStock} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="minimum-stock">
              <Form.Label>{i18n.productForm.fieldMinimumStock}</Form.Label>
              <Form.Control
                onChange={onChangeMinimumStock}
                value={valueMinimumStock}
                type="number"
                placeholder={i18n.productForm.fieldMinimumStock} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>{i18n.productForm.fieldDescription}</Form.Label>
              <Form.Control
                onChange={onChangeDescription}
                value={valueDescription}
                as="textarea" rows={3}
                placeholder={i18n.productForm.fieldDescription} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bar-code">
              <Form.Label>{i18n.productForm.fieldBarCode}</Form.Label>
              <Form.Control
                onChange={onChangeBarCode}
                value={valueBarCode}
                type="text"
                placeholder={i18n.productForm.fieldBarCode} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>{i18n.productForm.fieldLocation}</Form.Label>
              <Form.Control
                onChange={onChangeLocation}
                value={valueLocation}
                type="text"
                placeholder={i18n.productForm.fieldLocation} />
            </Form.Group>
            <Button onClick={handleAdd} variant="primary" type="button">{i18n.productForm.buttonAdd}</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductForm;
