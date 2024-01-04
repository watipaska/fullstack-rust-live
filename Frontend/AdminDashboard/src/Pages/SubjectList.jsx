import React from 'react';

function SubjectList() {
  return (
    <div>
      <a className="btn btn-primary" href="#" data-toggle="modal" data-target="#modal1">
        <i className="fa fa-plus" />
        Add new subject
      </a>

      <div className="row">
        <div className="col-sm-12">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>{/* You need to replace {{ object }} with actual data */}</td>
                <td>
                  <a href={`/subject-update/${object.id}`}>
                    <i className="fa fa-edit" />
                  </a>
                  <a href={`/subject-delete/${object.id}`}>
                    <i className="fa fa-trash-alt" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="modal fade" id="modal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form action="/subject-create" method="POST">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add new subject
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  {/* Replace {{ field.label_tag }} and {{ field|add_class:"form-control" }} with actual form field JSX */}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectList;
