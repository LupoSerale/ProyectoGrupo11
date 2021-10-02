import React from 'react'

const EditarProducto = () => {
    return ( 
        <>
        <div className="container">
                <div className="row justify-content-around">
                    <div className="col-6">
                        <p className="p-3"></p>
                        <div className="container shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="row justify-content-center m-3">
                                <h1 className="p-3">Editar el producto</h1>
                                <div className="col p-2">
                                    <form>
                                        <div className="row">
                                            <div className="form-floating mb-3 col-2">
                                                <input type="text" className="form-control" id="floatingInput" value="1002" required></input>
                                                <label for="floatingInput">Id</label>
                                            </div>
                                            <div className="form-floating mb-3 col-4">
                                                <input type="text" className="form-control" id="floatingInput" value="15000" required></input>
                                                <label for="floatingInput">Precio</label>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-floating">
                                                    <select className="form-select" id="floatingSelectGrid" required>
                                                        <option></option>
                                                        <option value="1" selected>Disponible</option>
                                                        <option value="2">No disponible</option>
                                                    </select>
                                                    <label for="floatingSelect">Selecciona una opción</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating col-12">
                                                <textarea className="form-control" id="floatingTextarea" value="Perro de la casa (Pan tradicional, salchicha ranchera, chorizo, butifarra, salsa de la casa, verduras, papa chongo acompañado de papas a la francesa)"  rows="8" required></textarea>
                                                <label for="floatingTextarea">Descripción</label>
                                            </div>
                                        </div>
                                        <p className="p-2"></p>
                                        <button type="submit" className="btn btn-success">Editar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
);
}
 
export default EditarProducto;