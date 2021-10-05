import React from 'react'

const ListarProducto = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-around"><div className="col-10">
                    <p className="p-3"></p>
                    <div className="container shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row justify-content-center m-3">
                            <h1>Lista de productos</h1>
                            <div className="col">
                                <form className="form-horizontal m-3" id="formulario" name="formulario">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hover">
                                            <thead className="table table-secondary">
                                                <tr className="fs-8" valign="middle" align="center">
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Descripción</th>
                                                    <th scope="col">Valor Unitario</th>
                                                    <th scope="col">Estado</th>
                                                    <th scope="col" colspan="3">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1001</td>
                                                    <td align="justify"><b>Perro Sencillo</b> (Pan tradicional, salchicha sencilla, salsa de la casa, verduras, papa chongo</td>
                                                    <td>7000</td>
                                                    <td>Disponible</td>
                                                    <td align="center"><a href="#" className="btn btn-sm btn-outline-success" data-bs-toggle="modal" data-bs-target="#verModal"><i className="fa fa-eye fa-lg"></i></a></td>
                                                    <td align="center"><a href="/editarProducto" className="btn btn-sm btn-outline-secondary"><i className="fa fa-pencil fa-lg"></i></a></td>
                                                    <td align="center"><a href="#" className="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#eliminarModal"><i className="fa fa-trash fa-lg"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1002</td>
                                                    <td align="justify"><b>Perro de la casa</b> (Pan tradicional, salchicha ranchera, chorizo, butifarra, salsa de la casa, verduras, papa chongo acompañado de papas a la francesa)</td>
                                                    <td>15000</td>
                                                    <td>Disponible</td>
                                                    <td align="center"><a href="#" className="btn btn-sm btn-outline-success" data-bs-toggle="modal" data-bs-target="#verModal"><i className="fa fa-eye fa-lg"></i></a></td>
                                                    <td align="center"><a href="/editarProducto" className="btn btn-sm btn-outline-secondary"><i className="fa fa-pencil fa-lg"></i></a></td>
                                                    <td align="center"><a href="#" className="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#eliminarModal"><i className="fa fa-trash fa-lg"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Modal Ver */}
                        <div className="modal fade" id="verModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="eliminarModalLabel">Ver detalle del producto</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Aqui va la información del producto
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Modal Eliminar */}
                        <div className="modal fade" id="eliminarModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalLabel">Confirmacion Eliminar Registro</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Está seguro de eliminar el registro? <b className="text-danger">Esta acción no se puede deshacer...</b>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default ListarProducto;