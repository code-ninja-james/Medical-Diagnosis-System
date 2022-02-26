const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">Medical Diagnosis System</h5>
      <div class="card-text">
        <p>
          This is a Medical Diagnosis System
          that mimics doctor's interview and gives a preliminary diagnosis based on 
           machine learning models.
        </p>
        
        <p>
          Please click 
          <span class="badge badge-primary">Next</span> 
          to move to the first question.
        </p>
      
      </div>
    `);
  });
};

export default template;
