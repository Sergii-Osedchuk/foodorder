import { useContext } from 'react';
import Modal from '../components/UI/Modal.jsx';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext.jsx';
import Input from '../components/UI/Input.jsx';
import Button from '../components/UI/Button.jsx';
import { currencyFormator } from '../util/formatting';

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => 
    totalPrice + item.quantity * item.price, 
  0);

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={userProgressCtx.progress === 'checkout'}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormator.format(cartTotal)} </p>
        <Input label='Full name' type='text' id='full-name'/>
        <Input label='E-mail address' type='email' id='email'/>
        <Input label='Street' type='text' id='street'/>
        <div className='control-row'>
          <Input label='Postal code' type='text' id='postal-code'/>
          <Input label='City' type='text' id='city'/>
        </div>
        <p className='modal-actions'>
          <Button type='button' textOnly onClick={handleClose}>Close</Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  )
}