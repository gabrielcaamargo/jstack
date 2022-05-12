import PropTypes from 'prop-types';

import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título do Modal</h1>
        <p>O corpo do modal</p>

        <Footer>
          <button className="cancel-button" type="button">Cancelar</button>
          <Button type="button" danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
