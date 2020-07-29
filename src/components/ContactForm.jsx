import React from 'react'
import '../public/css/contact.css'
const ContactForm = (props) => {

    const [status, setStatus] = React.useState("");


    function submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }

    return (
        <section id="contact-form">
            <h5>Escribanos</h5>
            <form
                onSubmit={submitForm}
                action="https://formspree.io/xrgyryda"
                method="POST"
            >
                <div className="form-group">
                    {/* <label htmlFor="form-name">Nombre</label> */}
                    <input placeholder="Nombre" type="text" name="name" className="form-control" id="form-name" />
                </div>
                <div className="form-group">
                    {/* <label placeholder="Nombre"  htmlFor="form-email">Email</label> */}
                    <input placeholder="Email"  type="text" name="email" className="form-control" id="form-email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="form-message">Mensaje</label> */}
                    <textarea type="text" name="message" className="form-control" id="form-message" placeholder="Ingrese su mensaje aquí">

                    </textarea>
                </div>

                {status === "LOADING" ? (
                    <button type="submit" className="btn btn-primary" >
                        <div className="spinner-border text-light" role="status" style={{ width: "20px", height: "20px" }}>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </button>
                ) : (
                        <button type="submit" className="btn btn-primary" onClick={() => setStatus("LOADING")}>
                            <span>Enviar</span>
                        </button>
                    )
                }
                {status === "SUCCESS" && <p>¡Gracias por enviarnos su mensaje!</p>}
                {status === "ERROR" && <p>Ooops! Hubo un error para enviar su mensaje.</p>}

            </form>
        </section>
    )
}

export default ContactForm
