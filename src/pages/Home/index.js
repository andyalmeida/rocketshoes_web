import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-random/06/D22-1962-006/D22-1962-006_detalhe2.jpg?ims=326x"
          alt="aa"
        />
        <strong>Tênis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-random/06/D22-1962-006/D22-1962-006_detalhe2.jpg?ims=326x"
          alt="aa"
        />
        <strong>Tênis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-random/06/D22-1962-006/D22-1962-006_detalhe2.jpg?ims=326x"
          alt="aa"
        />
        <strong>Tênis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-random/06/D22-1962-006/D22-1962-006_detalhe2.jpg?ims=326x"
          alt="aa"
        />
        <strong>Tênis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-random/06/D22-1962-006/D22-1962-006_detalhe2.jpg?ims=326x"
          alt="aa"
        />
        <strong>Tênis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}