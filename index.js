const Pool = require('pg').Pool
const pool = new Pool({
    user: "user",
    host: "localhost",
    database: "db",
    password: "pass",
    port: 5432
});

const addNewVisitor = (fullName,age,date,time,facilitator,comment) => {
    pool.query(
       'INSERT INTO Visitor(Full_name,Age,Date,Time,Facilitator_name,Comments) VALUES($1,$2,$3,$4,$5,$6);',
        [fullName,age,date,time,facilitator,comment],
        (error, results) => {
          if (error) {
            throw error;
          }
          console.log('Number of visitor added: '+results.rowCount);
        }
      );
};
addNewVisitor('Tiyiselani Rhangani',25,'2019-08-09','13:56:05','Concellia Maluleke','Amazement!!')
const selectAll = () => {
    pool.query(
      "SELECT * FROM Visitor",
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results.rows);
      }
    );
  };

// selectAll()

const updateVisitor = (id,newValue,value) => {
        pool.query(
            `UPDATE Visitor SET ${value} = $1 WHERE Visitor_id = $2`,
             [newValue,id],
             (error, results) => {
               if (error) {
                 throw error;
               }
               console.log(results.rowCount);
             }
           );
    
};
updateVisitor(12,"Blessing Mabasa",'full_name')
const deleteVisitor = (fullName) => {
    pool.query(
       'DELETE FROM Visitor WHERE Full_name = $1',
        [fullName],
        (error, results) => {
          if (error) {
            throw error;
          }
          console.log('Deleted: '+results.rowCount);
        }
      );
};

// deleteVisitor('Mariam Mzaleka')

const viewVisitor = (id) => {
    pool.query(
       'SELECT * FROM Visitor WHERE Visitor_id = $1',
        [id],
        (error, results) => {
          if (error) {
            throw error;
          }
          console.log(results);
        }
      );
};
// viewVisitor(7)

const deleteAll = (id) => {
    pool.query(
       'DELETE FROM Visitor;',
        (error, results) => {
          if (error) {
            throw error;
          }
          console.log('Numbber of visitors deleted: '+results.rowCount);
        }
      );
};
//deleteAll()