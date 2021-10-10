import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
function Producto() {
  const dataProducto = [
    { id: 1, descripcion: "Perro Caliente", valorUnitario: "5000", estado: "Disponible" },
    { id: 2, descripcion: "Hamburguesa", valorUnitario: "7000", estado: "Disponible" },
    { id: 3, descripcion: "Pizza", valorUnitario: "10000", estado: "Disponible" },
  ];

  const [data, setData] = useState(dataProducto);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [productoSeleccionado, setProductoSeleccionado] = useState({
    id: '',
    descripcion: '',
    valorUnitario: '',
    estado: ''
  });

  const seleccionarProducto = (elemento, caso) => {
    setProductoSeleccionado(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setProductoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const editar = () => {
    var dataNueva = data;
    dataNueva.map(producto => {
      if (producto.id === productoSeleccionado.id) {
        producto.descripcion = productoSeleccionado.descripcion;
        producto.valorUnitario = productoSeleccionado.valorUnitario;
        producto.estado = productoSeleccionado.estado;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar = () => {
    setData(data.filter(producto => producto.id !== productoSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar = () => {
    setProductoSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar = () => {
    var valorInsertar = productoSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-10">
            <p className="p-3"></p>
            <div className="container shadow-lg p-3 mb-5 bg-body rounded">
              <div className="row justify-content-center m-3">
                <div className="App">
                  <h2>Gestion de Productos</h2>
                  <br />
                  <button className="btn btn-success" onClick={() => abrirModalInsertar()}>Nuevo Producto</button>
                  <br /><br />
                  <table className="table table-bordered" class="table table-striped table-hover">
                    <thead class="table-light">
                      <tr>
                        <th>ID</th>
                        <th>Descripcion</th>
                        <th>Valor Unitario</th>
                        <th>Estado</th>
                        <th colspan="2">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map(elemento => (
                        <tr>
                          <td>{elemento.id}</td>
                          <td>{elemento.descripcion}</td>
                          <td>{elemento.valorUnitario}</td>
                          <td>{elemento.estado}</td>
                          <td><button className="btn btn-success" onClick={() => seleccionarProducto(elemento, 'Editar')}>Editar</button></td>
                          <td><button className="btn btn-danger" onClick={() => seleccionarProducto(elemento, 'Eliminar')}>Eliminar</button></td>
                        </tr>
                      ))
                      }
                    </tbody>
                  </table>

                  <Modal isOpen={modalEditar}>
                    <ModalHeader>
                      <div>
                        <h3>Editar Producto</h3>
                      </div>
                    </ModalHeader>
                    <ModalBody>
                      <div className="form-group">
                        <label>ID</label>
                        <input
                          className="form-control"
                          readOnly
                          type="text"
                          name="id"
                          value={productoSeleccionado && productoSeleccionado.id} />
                        <br />
                        <label>Descripcion</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          name="descripcion"
                          value={productoSeleccionado && productoSeleccionado.descripcion}
                          onChange={handleChange} />
                        <br />
                        <label>Valor Unitario</label>
                        <input
                          className="form-control"
                          type="text"
                          name="valorUnitario"
                          value={productoSeleccionado && productoSeleccionado.valorUnitario}
                          onChange={handleChange} />
                        <br />
                        <label>Estado</label>
                        <select
                          className="form-select"
                          name="estado"
                          value={productoSeleccionado && productoSeleccionado.estado}
                          onChange={handleChange} >
                            <option value="">Seleccione</option>
                        <option value="Disponible">Disponible</option>
                        <option value="No Disponible">No Disponible</option>
                        </select>
                        <br />
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <button className="btn btn-success" onClick={() => editar()}>
                        Actualizar
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => setModalEditar(false)}>
                        Cancelar
                      </button>
                    </ModalFooter>
                  </Modal>
                  <Modal isOpen={modalEliminar}>
                    <ModalBody>
                      Estás Seguro que deseas eliminar el producto? {productoSeleccionado && productoSeleccionado.descripcion}
                    </ModalBody>
                    <ModalFooter>
                      <button className="btn btn-danger" onClick={() => eliminar()}>
                        Sí
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => setModalEliminar(false)}>
                        No
                      </button>
                    </ModalFooter>
                  </Modal>
                  <Modal isOpen={modalInsertar}>
                    <ModalHeader>
                      <div>
                        <h3>Nuevo Producto</h3>
                      </div>
                    </ModalHeader>
                    <ModalBody>
                      <div className="form-group">
                        <label>ID</label>
                        <input
                          className="form-control"
                          readOnly
                          type="text"
                          name="id"
                          value={data[data.length - 1].id + 1} />
                        <br />
                        <label>Descripcion</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          name="descripcion"
                          value={productoSeleccionado ? productoSeleccionado.descripcion : ''}
                          onChange={handleChange}
                        />
                        <br />
                        <label>Valor Unitario</label>
                        <input
                          className="form-control"
                          type="text"
                          name="valorUnitario"
                          value={productoSeleccionado ? productoSeleccionado.valorUnitario : ''}
                          onChange={handleChange}
                        />
                        <br />
                        <label>Estado</label>
                        <select
                          className="form-select"
                          name="estado"
                          value={productoSeleccionado ? productoSeleccionado.estado : ''}
                          onChange={handleChange}>
                        <option value="">Seleccione</option>
                        <option value="Disponible">Disponible</option>
                        <option value="No Disponible">No Disponible</option>
                        </select>
                        <br />
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <button className="btn btn-success"
                        onClick={() => insertar()}>
                        Insertar
                      </button>
                      <button className="btn btn-danger"
                        onClick={() => setModalInsertar(false)}>
                        Cancelar
                      </button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Producto;
