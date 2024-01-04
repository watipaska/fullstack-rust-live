import React from 'react';

function AllResults({ results }) {
  return (
    <div>
      <div className="card">
        <div className="card-header">
        </div>
        <div className="card-body">
          <table className="table table-bordered table-sm">
            <thead className="thead-light">
              <tr>
                <th />
                <th>Subject</th>
                <th>Test Score</th>
                <th>Exam Score</th>
                <th>Total Score</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {results.subjects.map((subject, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{subject.subject}</td>
                  <td>{subject.test_score}</td>
                  <td>{subject.exam_score}</td>
                  <td>{subject.total_score}</td>
                  <td>{subject.grade}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2" />
                <td>{results.test_total}</td>
                <td>{results.exam_total}</td>
                <td>{results.total_total}</td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllResults;
