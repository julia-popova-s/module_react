import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CardBasketWrap } from './CardBasketWrap.styled.js';
import { getFormatNumber } from '../../../utils/getFormatNumber.js';
import { cutPartOfLine } from '../../../utils/cutPartOfLine.js';
import { removeProduct, minusProduct, plusProduct } from '../../../store/reducers/basket';
import { ButtonCircle } from '../../ui/buttonCircle';
import { FC } from 'react';

type Product = {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
};

export const CardBasket: FC<Product> = ({ id, img, name, price, quantity }) => {
  const newPrice = getFormatNumber(price * quantity);
  const title = cutPartOfLine(name, 47);

  const dispatch = useDispatch();
  let item = { id };

  const handleDeleteProduct = () => {
    dispatch(removeProduct(item));
  };
  const handlePlusProduct = () => {
    dispatch(plusProduct(item));
  };
  const handleMinusProduct = () => {
    dispatch(minusProduct({ id, quantity }));
  };

  return (
    <CardBasketWrap>
      <Link to={`/${id}/${name}`} className="card__link">
        <div className="card__preview">
          <img
            className="card__img"
            src={`${process.env.PUBLIC_URL}/images/basket/${img}`}
            alt={name}
          />
        </div>
      </Link>

      <div className="card__text">
        <Link to={`/${id}/${name}`} className="card__link">
          {title}
        </Link>

        <div className="card__block-price">
          <ButtonCircle handle={handlePlusProduct} view={'plus'} classNames={'card__btn_color'} />
          <span className="card__quantity"> {`${quantity} шт.`}</span>
          <ButtonCircle handle={handleMinusProduct} view={'minus'} classNames={'card__btn_color'} />
          <span className="card__price">{newPrice}</span>
          <ButtonCircle
            handle={handleDeleteProduct}
            view={'delete'}
            classNames={'card__btn_color'}
          />
        </div>
      </div>
    </CardBasketWrap>
  );
};