import React from "react";

const HelperDialogue = () => {

  var modal = document.querySelector("body");
  modal.classList.add("modal-open");

  console.log(modal)
  return (
    <div>
      <div className="modal fade" tabIndex={-1} role="dialog" id="Dialog-Help">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">Ayuda</h4>
            </div>
            <div className="modal-body">
              <p>
                SI TIENE ALGUN PROBLEMA POR FAVOR COMUNICARSE CON EL HIJO DE
                NAIBYS
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn-raised"
                data-dismiss="modal"
              >
                <i className="zmdi zmdi-thumb-up" /> Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelperDialogue;
