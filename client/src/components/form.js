import { useState } from "react";
import { useEffect } from "react";

const Form = (props) => {
  return (
    <form>
      <div id="form-card">
        <fieldset>
          <label>Today's Date</label>
          <input
            type="datetime-local"
            id="add-date-of-sighting"
            // placeholder="First Name"
            // required
          />
          <br />
          <label>How do you feel?</label>
         
          <input
            type="text"
            id="add-sighting-location"
            placeholder="Location"
            required
          />
          <br />
          <label>Journal</label>
          <textarea
          className="text-area"
            type="text"
            id="add-animal-healthy"
            placeholder="healthy"
            required
          />
        </fieldset>
      </div>
      <button className="add-form-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
