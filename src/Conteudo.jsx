import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Loja } from "./paginas/Loja"


export const Conteudo = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/loja' component={Loja}></Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Conteudo;