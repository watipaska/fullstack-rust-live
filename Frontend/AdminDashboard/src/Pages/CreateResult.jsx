import React from 'react';

function CreateResult() {
  return (
    <div>
      <form method="POST">
        <div className="card-header">
          <h3 className="card-title">
            <input type="submit" className="btn btn-success" value="Proceed >" />
          </h3>

          <div className="card-tools">
            <p className="small btn btn-tool">
              You can also search by name/class by typing in the search box
            </p>
          </div>
        </div>

        <table id="studenttable" className="table table-sm table-bordered" data-page-length="100">
          <thead className="thead-light">
            <tr>
              <th>
                <input type="checkbox" id="selecter" />
              </th>
              <th>Name</th>
              <th>Current Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" id={student.id} name="students" value={student.id} />
              </td>
              <td>{student.name}</td>
              <td>{student.current_class}</td>
            </tr>
            {/* Add more rows if needed */}
          </tbody>
        </table>

        <input type="submit" className="btn btn-success mt-2" value="Proceed >" />
      </form>
    </div>
  );
}

export default CreateResult;
