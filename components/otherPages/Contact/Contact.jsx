"use client";

import { storesLocations } from "@/data/storeLocations";

export default function Contact() {
  return (
    <section className="contact-us container">
      <div className="mw-930">
        <div className="contact-us__form">
          <form
            className="needs-validation"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="mb-5">Escríbenos</h3>
            <div className="form-floating my-4">
              <input
                type="text"
                className="form-control"
                id="contact_us_name"
                placeholder="Nombre *"
                required
              />
              <label htmlFor="contact_us_name">Nombre *</label>
            </div>
            <div className="form-floating my-4">
              <input
                type="email"
                className="form-control"
                id="contact_us_email"
                placeholder="Correo electrónico *"
                required
              />
              <label htmlFor="contact_us_name">Correo electrónico *</label>
            </div>
            <div className="my-4">
              <textarea
                className="form-control form-control_gray"
                placeholder="Tu mensaje"
                cols="30"
                rows="8"
                required
              ></textarea>
            </div>
            <div className="my-4">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
