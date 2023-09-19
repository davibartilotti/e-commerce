import React from 'react';
import './Produtos.js';


const produtos = {
    produto1: {
        nomeProduto: "Televisão Samsung 70' Ultra HD 4k",
        categoria: "Eletrodomésticos",
        marca: "Samsung",
        valor: "R$6499,99"
    }
}

export default class CardProdutos extends React.Component {
    constructor() {
        super();
        this.state = {
            quantidade: 0,
        }
    }

    adicionarAoCarrinho() {
        this.setState({
            quantidade: this.state.quantidade + 1,
        })
    }

    render() {
        const { produtos, produto1 } = this.props;

        return (
            <div>
                <Produtos 
                nome={produto1.nome}
                categoria={produto1.categoria}/>
            </div>
        )
    }

}