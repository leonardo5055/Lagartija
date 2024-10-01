import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormularioPagina = () => {
    const navigate = useNavigate(); // Hook para navegar de vuelta a la página principal

    return (
        <div className='d-flex justify-content-center m-5'>
            <div style={{ maxWidth: '600px' }}>
                <div className="p-4" style={{ border: '4px solid black' }}> {/* Se elimina el fondo de la tarjeta */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2>Contacto</h2>
                        <button onClick={() => navigate('/')} className="btn-close" aria-label="Close"></button>
                    </div>
                    <p className="mb-4">PREGUNTAS? SUGERENCIAS? ¿QUIERES CONOCER NUESTRA RECETA MÁGICA PARA ALIMENTOS SÚPER DELICIOSOS HECHOS DE PLANTAS? ¡LLÉNALO AQUÍ!</p>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" placeholder="Nombre" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" placeholder="correo electrónico" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" placeholder="+54 911 00000-0000" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mensaje</label>
                            <textarea className="form-control" rows="4" placeholder="mensaje"></textarea>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button type="button" onClick={() => navigate('/')} className="btn btn-secondary me-2"> Cancelar </button>
                            <button type="submit" className="btn btn-primary">Enviar </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormularioPagina;
