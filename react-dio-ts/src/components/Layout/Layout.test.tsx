import { screen, render } from "@testing-library/react";
import Layout from "./Layout";
import App from "../../App";
import { BrowserRouter } from "react-router-dom";

describe('Layout', () =>{
    render (<BrowserRouter>
                    <Layout>
                        Meu App
                    </Layout>
                </BrowserRouter>
    )
            it('Deve renderizar a mensagem Meu App', () => {
                    const app = screen.getByAltText('Meu App')

                    expect (App).toBeInTheDocument()
            })
})