import Layout from '../components/Layout/Layout';

const Home =() =>{
    return (
        <Layout>
                <div className='col-4 m-auto'>
                    <h1>Login</h1>
                            <div>
                            <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">E-mail</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu E-mail"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Senha</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Digite sua senha"/>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" htmlFor="exampleCheck1">Lembrar de mim</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Entrar</button>
                                        </form>
                            </div>
                </div>
            </Layout>
    );
  }

  export default Home;